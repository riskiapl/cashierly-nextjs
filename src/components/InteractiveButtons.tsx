"use client";

import Image from "next/image";
import { toast, alert } from "@/utils/alert";
import { useState } from "react";
// import axios from "@/utils/axios";

export function InteractiveButtons() {
  const [loading, setLoading] = useState(false);

  const handleApiCall = async () => {
    setLoading(true);
    try {
      // Contoh penggunaan axios dengan konfigurasi yang sudah dibuat
      // const response = await axios.get("/example-endpoint");
      // toast.success("API call successful!");
      // console.log(response); // Response data sudah langsung tersedia
    } catch (error) {
      // Error handling sudah ditangani oleh interceptor
      console.error("Error details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => toast.success("Hello World!")}
      >
        <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Deploy now
      </div>
      <div
        className="cursor-pointer"
        onClick={() => alert.error("Hello World!")}
      >
        Read our docs
      </div>
      <button
        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
        onClick={handleApiCall}
        disabled={loading}
      >
        {loading ? "Loading..." : "Test API Call"}
      </button>
    </div>
  );
}
