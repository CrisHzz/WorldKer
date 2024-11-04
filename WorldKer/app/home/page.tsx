"use client";

import React, { useEffect, useState } from "react";
import PlatformHeader from "@/app/components/UI/platformHeader";
import { Loader } from "lucide-react";

interface Post {
  id: number;
  title: string;
  body: string;
  // Agrega más propiedades según sea necesario
}

export default function Page() {
  const [data, setData] = useState<Post[] | null>(null);

  useEffect(() => {
    fetch("https://worlderk.onrender.com/post")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <PlatformHeader>
        <div className="p-4 flex flex-wrap gap-4">
          {data ? (
            data.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-md w-full md:w-1/3"
              >
                <pre className="whitespace-pre-wrap break-words text-black">
                  {JSON.stringify(item, null, 2)}
                </pre>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full">
              <Loader className="animate-spin text-black" />
              <span className="ml-2 text-black">Loading...</span>
            </div>
          )}
        </div>
      </PlatformHeader>
    </div>
  );
}
