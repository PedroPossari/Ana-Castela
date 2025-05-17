"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Início", path: "/" },
  { name: "Discografia", path: "/pages/discrografia" },
  { name: "Musicas-populares", path: "/pages/musicas-populares" },
  { name: "Curiosidades", path: "/about" },
  { name: "Contato", path: "/contact" },
];

export function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-gray-700 hover:text-purple-600"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Desktop menu (hidden on mobile) */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu (shown when toggled) */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.path} className="border-b border-gray-100">
                <Link
                  href={item.path}
                  className="block py-3 px-6 text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}