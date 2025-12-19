"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-(--bg1) text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
        {/* LEFT SECTION */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Kudukuats <span className="text-cyan-400">Project</span>
            </h2>
          </div>

          <p className="text-white leading-relaxed text-sm sm:text-base md:text-base">
            A bespoke royal formula for unstoppable business growth. Strategy at
            core, formula as crown.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6">
            <Link
              href="https://www.linkedin.com/in/muhammad-rizki-ramadhan-5a243b349/"
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-(--color2) rounded-md cursor-pointer hover:bg-white hover:text-gray-500 hover:scale-105 transition duration-300"
            >
              <FaLinkedin className="text-sm sm:text-base md:text-lg" />{" "}
              LinkedIn
            </Link>
            <Link
              href="https://github.com/rizkiramadhanw234-bit"
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-(--color2) cursor-pointer rounded-md hover:bg-white hover:text-gray-500 hover:scale-105 transition duration-300"
            >
              <FaGithub className="text-sm sm:text-base md:text-lg" /> GitHub
            </Link>
            <Link
              href="https://www.instagram.com/rizkidhan.js/"
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-(--color2) cursor-pointer rounded-md hover:bg-white hover:text-gray-500 hover:scale-105 transition duration-300"
            >
              <FaInstagram className="text-sm sm:text-base md:text-lg" />{" "}
              Instagram
            </Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-start sm:items-center lg:items-start justify-center">
          <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-3 sm:mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-white text-left sm:text-center lg:text-left">
            <li>
              <Link
                href="/"
                className="hover:text-gray-200 cursor-pointer text-sm sm:text-base md:text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="hover:text-gray-200 cursor-pointer text-sm sm:text-base md:text-base"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-gray-200 cursor-pointer text-sm sm:text-base md:text-base"
              >
                Projetcs
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="hover:text-gray-200 cursor-pointer text-sm sm:text-base md:text-base"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="sm:col-span-2 lg:col-span-1 lg:col-start-3">
          <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-3 sm:mb-4">
            Contact
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-white">
            <div className="flex items-start sm:items-center">
              <CgMail className="text-base sm:text-xl md:text-2xl mr-1 sm:mr-2 shrink-0 mt-0.5 sm:mt-0" />
              <li className="text-sm sm:text-base md:text-base wrap-break-word">
                Email: rizkiramadhanw234@gmail.com
              </li>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-sm sm:text-base md:text-xl mr-1 sm:mr-2 shrink-0" />
              <li className="text-sm sm:text-base md:text-base">
                Mobile No: +62 8987982807
              </li>
            </div>
            <div className="flex items-center">
              <MdLocationPin className="mr-1 sm:mr-2 text-base sm:text-xl md:text-2xl shrink-0" />
              <li className="text-sm sm:text-base md:text-base">
                Kuningan, Indonesia
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-5 md:pt-6 text-center text-white text-xs sm:text-sm md:text-base">
        © 2025 Muhammad Rizki Ramadhan. All rights reserved.
      </div>
    </footer>
  );
}
