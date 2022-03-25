import Image from "next/image";
import { UploadForm } from "../components/UploadForm";
import { ImageList } from "../components/ImageList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pb-6 space-y-3">
      <div className="flex w-full items-center justify-center bg-white text-xl font-bold h-12">
        🔥 Firegram 📷
      </div>
      <div className="w-full max-w-5xl px-2 space-y-3">
        <UploadForm />
        <ImageList />
      </div>
    </div>
  );
}
