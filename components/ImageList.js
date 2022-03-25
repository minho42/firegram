/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDb } from "../hooks/useDb";

export function ImageList() {
  const { docs } = useDb("images");

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
      {docs &&
        docs.map((doc) => {
          return (
            <div key={doc.id} className="bg-white border border-gray-300 p-3">
              <div className="h-56 overflow-hidden">
                <img className="hover:scale-110 transition duration-200" src={doc.url} alt={doc.url} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
