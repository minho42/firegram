import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select image: png or jpeg");
    }
  };

  return (
    <div className="">
      <form>
        <input onChange={handleChange} type="file" className="bg-white w-full rounded p-2" />
        {error && <div className="bg-pink-100 text-pink-700 p-1">⚠️ {error}</div>}{" "}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </form>
    </div>
  );
}
