"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Banner from "../assets/banner.jpg";
import { dataExperience } from "../data/dataExperience";
import { dataWebDev, dataTech, dataDesign, dataAdm } from "../data/dataSkills";

export default function Experience() {
  return (
    <>
      <section>
        <div className="h-screen w-full relative bg-(--bg1)">
          {/* background */}
          <Image
            src={Banner}
            alt="kudukuats"
            priority
            fill
            className="object-cover opacity-50"
          />

          {/* content */}
          <div className="relative flex flex-col z-10 items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <h1
              className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center"
              data-aos="zoom-in"
            >
              My <span className="text-cyan-400">Experience</span>
            </h1>

            <p
              className="text-white text-sm sm:text-base lg:text-lg text-center px-4 sm:px-6 md:px-8 lg:px-20 mx-auto max-w-6xl mt-6 sm:mt-8 md:mt-10 leading-6 sm:leading-7 md:leading-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              I bring a strong Computer Science foundation combined with over 5
              years of experience in graphic design and video editing allowing
              me to deliver complete end-to-end solutions. From UI/UX planning
              and workflow structuring to full-stack development, deployment,
              and content creation, I handle the entire process with precision.
              I&apos;ve worked independently, collaboratively in teams, and
              remotely with international clients.
            </p>

            <Link
              href={"/projects"}
              className="px-4 py-2 text-white bg-cyan-400 items-center justify-center rounded-md mt-6 sm:mt-8 md:mt-10 hover:bg-cyan-300 hover:scale-101 transition-all duration-300 text-sm sm:text-base"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              See My Projects
            </Link>
          </div>
        </div>
      </section>

      {/* experience */}
      <section>
        <div className="h-full pb-12 sm:pb-16 md:pb-20 bg-(--bg2)">
          <h1
            className="text-white font-bold text-3xl md:text-4xl  text-center pt-8 sm:pt-10"
            data-aos="zoom-in"
          >
            Experience
          </h1>

          {dataExperience.map((data, index) => (
            <div
              key={index}
              className="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10"
            >
              <h1
                className="text-left text-white text-sm sm:text-xl lg:text-xl font-bold pt-10 md:pt-15"
                data-aos="fade-up"
              >
                {data.h1}
              </h1>
              <h2
                className="text-cyan-400 text-xs md:text-lg mt-2 italic"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {data.h2}
              </h2>
              <ul
                className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-white text-xs md:text-[1rem] mt-3 sm:mt-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {data.list.map((li, index) => (
                  <li key={index}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* skills */}
      <section>
        <div className="bg-(--bg1) items-center justify-center">
          <h1
            className="text-white font-bold text-3xl sm:text-4xl text-center pt-8 sm:pt-10 px-4"
            data-aos="fade-up"
          >
            My <span className="text-cyan-400">Skills</span>
          </h1>

          {/* Web Development Skills */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 max-w-7xl mx-auto">
            <h2
              className="text-lg sm:text-2xl font-bold text-white text-center pt-6 pb-4 sm:pt-8 md:pt-10"
              data-aos="fade-up"
            >
              Web Development
            </h2>
            <div
              className="grid grid-cols-4 justify-center items-center gap-0 sm:gap-4 md:gap-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {dataWebDev.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 sm:gap-2 items-center justify-between mt-3 sm:mt-4 md:mt-5 w-1/4 sm:w-auto min-w-[70px] sm:min-w-20"
                >
                  <data.icon
                    className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl cursor-pointer hover:text-cyan-300 hover:scale-110 transition duration-300"
                  />
                  <p className="text-white text-xs sm:text-sm text-center">
                    {data.p}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="border border-white mt-4 sm:mt-5"
              data-aos="fade-up"
            />
          </div>

          {/* IT & Technical Skills */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 max-w-7xl mx-auto">
            <h2
              className="text-lg sm:text-2xl font-bold text-white text-center pt-6 pb-4 sm:pt-8 md:pt-10"
              data-aos="fade-up"
            >
              IT & Technical
            </h2>
            <div className="flex flex-col items-center justify-center">
              <div
                className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-20"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {dataTech.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-1 sm:gap-2 items-center justify-between mt-3 sm:mt-4 md:mt-5 w-1/3 sm:w-auto min-w-20 sm:min-w-[90px]"
                  >
                    <data.icon className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl cursor-pointer hover:text-cyan-300 hover:scale-110 transition duration-300" />
                    <p className="text-white text-xs sm:text-sm text-center">
                      {data.p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="border border-white mt-4 sm:mt-5"
              data-aos="fade-up"
            />
          </div>

          {/* Design & Multimedia Skills */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 max-w-7xl mx-auto">
            <h2
              className="text-lg sm:text-2xl font-bold text-white text-center pt-6 pb-4 sm:pt-8 md:pt-10"
              data-aos="fade-up"
            >
              Design & Multimedia
            </h2>
            <div className="flex flex-col items-center justify-center">
              <div
                className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-30"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {dataDesign.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-1 sm:gap-2 items-center justify-between mt-3 sm:mt-4 md:mt-5 w-1/3 sm:w-auto min-w-20 sm:min-w-[90px]"
                  >
                    <data.icon
                      className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl cursor-pointer hover:text-cyan-300 hover:scale-110 transition duration-300"
                    />
                    <p className="text-white text-xs sm:text-sm text-center">
                      {data.p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="border border-white mt-4 sm:mt-5"
              data-aos="fade-up"
            />
          </div>

          {/* Administrative Skills */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 max-w-7xl mx-auto pb-8 sm:pb-10 md:pb-12 lg:pb-5">
            <h2
              className="text-lg sm:text-2xl font-bold text-white text-center pt-6 pb-4 sm:pt-8 md:pt-10"
              data-aos="fade-up"
            >
              Administrative
            </h2>
            <div
              className="flex justify-center items-center gap-0 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-30"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {dataAdm.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 sm:gap-2 items-center justify-between mt-3 sm:mt-4 md:mt-5 w-1/3 sm:w-auto min-w-20 sm:min-w-[90px]"
                >
                  <data.icon
                    className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl cursor-pointer hover:text-cyan-300 hover:scale-110 transition duration-300"
                  />
                  <p className="text-white text-xs sm:text-sm text-center">
                    {data.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
