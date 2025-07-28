import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue-950 px-6 pb-6 pt-3 text-center text-white md:px-36">
      <div className="flex items-center justify-center">
        <h1 className="text-sm md:text-xl">
          &#169; Christian Hadinata {currentYear}. All Right Reserved.
        </h1>
      </div>
    </footer>
  );
}
