"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Gunakan lucide-react untuk ikon

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (section: string) => {
    setActive(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Adjust offset if needed

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed z-50 w-full bg-blue-950 px-6 py-6 text-white shadow-md md:px-36">
      <div className="flex items-center justify-between">
        <h1 className="cursor-default text-xl font-semibold capitalize md:text-2xl">
          Chris Portfolio
        </h1>

        {/* Desktop view */}
        <div className="hidden gap-x-8 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              className={`text-base font-medium capitalize transition-colors duration-300 md:text-lg ${
                active === link.id ? "text-sky-400" : "text-white"
              } hover:text-sky-600`}
              onClick={() => handleClick(link.id)}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mt-4 flex flex-col items-start space-y-4 md:hidden">
          {links.map((link) => (
            <button
              key={link.id}
              className={`text-base font-medium capitalize transition-colors duration-300 md:text-lg ${
                active === link.id ? "text-sky-400" : "text-white"
              } hover:text-sky-600`}
              onClick={() => handleClick(link.id)}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
