import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";

export function useDb(collectionName) {
  const [docs, setDocs] = useState([]);

  const getData = async () => {
    // const tempDocs = [];
    // const snap = await getDocs(collection(db, collectionName)).orderBy("createdAt");
    // snap.docs.forEach((doc) => {
    //   tempDocs.push({ ...doc.data(), id: doc.id });
    // });
    // setDocs(tempDocs);
  };

  useEffect(() => {
    // getData();
    const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
    onSnapshot(q, (snap) => {
      const tempDocs = [];
      snap.forEach((doc) => {
        // console.log(doc.data());
        tempDocs.push({ ...doc.data(), id: doc.id });
      });
      console.log(tempDocs);
      setDocs(tempDocs);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName]);

  return { docs };
}
