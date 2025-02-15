import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue-950 px-36 pb-6 text-center text-white">
      <div className="flex items-center justify-center">
        <h1 className="text-xl">
          &#169; Christian Hadinata {currentYear}. All Right Reserved.
        </h1>
      </div>
    </footer>
  );
}
