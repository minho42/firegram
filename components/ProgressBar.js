import { useEffect } from "react";
import { useStorage } from "../hooks/useStorage";

export function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  // console.log(progress, url);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="rounded-md border border-gray-300">
      <div className="h-full bg-pink-300 trasition duration-300" style={{ width: progress + "%" }}>
        <div className="font-bold text-sm">{progress.toFixed(1)}%</div>
      </div>
    </div>
  );
}
