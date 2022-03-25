import { useState, useEffect } from "react";
import { storage, db } from "../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(null);

  const saveToDb = async (url) => {
    try {
      const docRef = await addDoc(collection(db, "images"), { url, createdAt: serverTimestamp() });
      console.log(docRef.id);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const storageRef = ref(storage, file.name);
    console.log(storageRef);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
        // console.log(percentage);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            // console.log("Upload is running ");
            break;
        }
      },
      (error) => {
        setError(error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(downloadUrl);
        saveToDb(downloadUrl);
        console.log("File available at ", downloadUrl);
      }
    );
  }, [file]);

  return { progress, url, error };
}
