"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/kudukuats.png";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed right-0 top-0 left-0 z-50 bg-(--bg2)">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-17">
          <Link href="/" className="shrink-0">
            <Image
              src={Logo}
              alt="Logo"
              width={120}
              height={120}
              className="w-24 h-auto sm:w-32 md:w-36 lg:w-40"
              priority
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center text-white text-base lg:text-base gap-6 lg:gap-10">
            <Link
              href={"/"}
              className={`${
                pathname === "/" ? "text-cyan-400" : "text-white"
              } hover:scale-105 transition duration-300 px-1`}
            >
              Home
            </Link>
            <Link
              href={"/experience"}
              className={`${
                pathname === "/experience" ? "text-cyan-400" : "text-white"
              } hover:scale-105 transition duration-300 px-1`}
            >
              Experience
            </Link>
            <Link
              href={"/projects"}
              className={`${
                pathname === "/projects" ? "text-cyan-400" : "text-white"
              } hover:scale-105 transition duration-300 px-1`}
            >
              Projects
            </Link>
            <Link
              href={"/contact"}
              className={`${
                pathname === "/contact" ? "text-cyan-400" : "text-white"
              } hover:scale-110 transition duration-300 px-1`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:block hover:scale-105 transition duration-300">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=%2B628987982807&text&type=phone_number&app_absent=0"
              }
              className="px-4 py-2 lg:px-6 lg:py-2.5 bg-cyan-400 rounded-sm text-white hover:bg-cyan-500 hover:scale-105 transition duration-300 text-sm lg:text-base"
            >
              Hire Me!
            </Link>
          </div>

          {/* Mobile button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=%2B628987982807&text&type=phone_number&app_absent=0"
              }
              className="px-3 py-1.5 bg-cyan-400 rounded-sm text-white hover:bg-cyan-500 transition duration-300 text-sm"
            >
              Hire Me!
            </Link>
            <button
              className="text-2xl text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu open */}
      <div
        className={`md:hidden w-full bg-(--bg1) text-white flex flex-col transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-screen translate-y-0"
            : "opacity-0 max-h-0 -translate-y-5 pointer-events-none overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          <Link
            href={"/"}
            className={`py-3 px-4 rounded-md hover:bg-gray-800 transition ${
              pathname === "/" ? "text-cyan-400 bg-gray-800/50" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/experience"}
            className={`py-3 px-4 rounded-md hover:bg-gray-800 transition ${
              pathname === "/experience" ? "text-cyan-400 bg-gray-800/50" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            href={"/projects"}
            className={`py-3 px-4 rounded-md hover:bg-gray-800 transition ${
              pathname === "/projects" ? "text-cyan-400 bg-gray-800/50" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href={"/contact"}
            className={`py-3 px-4 rounded-md hover:bg-gray-800 transition ${
              pathname === "/contact" ? "text-cyan-400 bg-gray-800/50" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
