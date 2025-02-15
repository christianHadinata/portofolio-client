"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const handleClick = (section: string) => {
    setActive(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed z-50 w-full bg-blue-950 px-36 py-6 text-white">
      <div className="flex items-center justify-between px-8">
        <h1 className="text-2xl font-medium capitalize">Ch portofolio</h1>
        <div className="flex gap-x-10">
          {links.map((link) => (
            <button
              key={link.id}
              className={`text-lg font-medium capitalize transition-colors duration-300 ${
                active === link.id ? "text-blue-400" : "text-white"
              }`}
              onClick={() => handleClick(link.id)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
