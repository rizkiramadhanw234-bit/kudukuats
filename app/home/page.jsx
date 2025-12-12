"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Banner from "../assets/banner.jpg";
import Me from "../assets/me.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { dataWebDev } from "../data/dataSkills";
import { dataCompanies } from "../data/dataComapnies";
import Project1 from "../assets/website/plastik/1.jpg";
import Project2 from "../assets/website/rri/2.jpg";
import Project3 from "../assets/website/ecommerce/1.jpg";

export default function Home() {
  const RecentProjects = [
    {
      id: 1,
      title: "Plastic Movement Website",
      image: Project1,
      p: "React.js + Express.js",
      link: "https://www.plasticmvmt.com/",
    },
    {
      id: 2,
      title: "RRI Podacst Playlist Website",
      image: Project2,
      p: "PHP + MySql",
      link: "https://appmusicrricrb.net/",
    },
    {
      id: 3,
      title: "E-Commerce Website",
      image: Project3,
      p: "React.js + Express.js",
      link: "https://shopsy-ecommerce-psi.vercel.app/",
    },
  ];

  // handle web carousel
  const [webApi, setWebApi] = React.useState(null);
  const [webCurrent, setWebCurrent] = React.useState(0);
  const [webCount, setWebCount] = React.useState(0);

  React.useEffect(() => {
    if (!webApi) return;
    setWebCount(webApi.scrollSnapList().length);
    setWebCurrent(webApi.selectedScrollSnap() + 1);
    webApi.on("select", () => setWebCurrent(webApi.selectedScrollSnap() + 1));
  }, [webApi]);

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
              className="text-cyan-400 font-bold text-2xl sm:text-3xl lg:text-4xl text-center"
              data-aos="fade-up"
            >
              Hi, there! I&apos;m
            </h1>
            <h2
              className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 md:mt-5 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Muhammad Rizki Ramadhan
            </h2>
            <p
              className="text-white text-base sm:text-lg ld:text-2xl lg:text-2xl mt-3 sm:mt-4 md:mt-5 text-center px-2 sm:px-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Full-Stack Web Developer <span className="text-cyan-500">|</span>{" "}
              IT Support Specialist <span className="text-cyan-500">|</span>{" "}
              Creative Designer
            </p>

            <a
              className="px-4 py-2 sm:px-5 sm:py-3 text-white bg-cyan-400 items-center justify-center rounded-md mt-6 sm:mt-8 md:mt-10 hover:bg-cyan-300 hover:scale-101 transition duration-300 text-sm sm:text-base"
              data-aos="fade-up"
              href="/CV OF MUHAMMAD RIZKI RAMADHAN.pdf"
              download="CV OF MUHAMMAD RIZKI RAMADHAN"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="items-center justify-center bg-(--bg2)">
          <h1
            className="text-white text-center text-3xl sm:text-4xl lg:text-5xl font-bold pt-8 md:pt-10 px-4"
            data-aos="fade-up"
          >
            About <span className="text-cyan-400">Me</span>
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto mt-8 sm:mt-10 md:mt-12 lg:mt-15 gap-10 sm:gap-12 lg:gap-20 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
            <div
              className="flex flex-col items-center justify-center lg:w-auto"
              data-aos="fade-up"
            >
              <div className="border-2 rounded-2xl border-cyan-400 shadow-lg sm:shadow-xl lg:shadow-2xl mb-6 sm:mb-8 lg:mb-10 cursor-pointer hover:scale-102 transition duration-300 overflow-hidden">
                <Image
                  src={Me}
                  alt="full stack developer"
                  className="w-64 sm:w-72 md:w-xs max-w-full h-auto"
                  width={320}
                  height={320}
                />
              </div>
              <div
                className="text-white px-3 py-2 bg-cyan-500 rounded-sm hover:bg-cyan-400 hover:scale-101 transition duration-300"
                data-aos="fade-up"
              >
                <Link href={"/experience"}>View My Experience</Link>
              </div>
            </div>

            <div className="flex flex-col text-white text-base sm:text-lg w-full lg:w-1/2 gap-4 sm:gap-5">
              <p
                className="leading-6 sm:leading-7 text-center lg:text-left"
                data-aos="fade-up"
              >
                I’m a Full-Stack Web Developer with over 3 years of experience
                building dynamic and responsive web applications using HTML,
                CSS/Tailwind, JavaScript, TypeScript, React.js, Next.js, Node.js
                (Express), and PHP. Strong technical foundation in IT Support,
                including hardware/software troubleshooting, network
                maintenance, and system administration.
              </p>
              <p
                className="mt-4 sm:mt-5 leading-6 sm:leading-7 text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                With over 5 years of experience in graphic design and video
                editing, I bring a unique combination of development, IT
                support, and creative skills. Proven ability to deliver
                end-to-end projects—from UI/UX planning, workflows, and
                development, to deployment and content creation. Comfortable
                working independently, collaboratively, onsite, or fully remote
                with international clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* recent projects */}
      <section>
        <div className="bg-(--bg1) items-center justify-center">
          <h1
            className="text-center text-white font-bold text-3xl sm:text-4xl pt-12 sm:pt-16 md:pt-20 px-4"
            data-aos="fade-up"
          >
            Recent <span className="text-cyan-400">Projects</span>
          </h1>

          {/* Carousel Section */}
          <div
            className="flex flex-col items-center justify-center mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Carousel
              setApi={setWebApi}
              opts={{
                align: "start",
              }}
              className="w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {RecentProjects.map((data, id) => (
                  <CarouselItem
                    key={id}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card
                        className="h-80 sm:h-[360px] w-full flex flex-col items-center justify-center bg-(--bg2)
                       border-cyan-500"
                      >
                        <CardContent className="flex flex-col w-full items-center justify-center p-3 sm:p-4 hover:scale-105 transition duration-300">
                          <Image
                            src={data.image}
                            alt={"kudukuats" || `${id + 1}`}
                            className="w-100 h-fit object-cover rounded-lg"
                          />
                          <div className="text-center text-sm sm:text-md mt-2 text-white font-medium">
                            {data.title}
                          </div>
                          <p className="text-gray-400 py-1 sm:py-2 text-center text-xs sm:text-sm">
                            {data.p}
                          </p>
                          <Link
                            href={data.link}
                            target="_blank"
                            className="mt-2 text-xs sm:text-sm bg-cyan-500 text-white py-1.5 px-3 sm:px-4 rounded hover:bg-cyan-400 hover:scale-105 transition duration-300"
                          >
                            View Project
                          </Link>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="text-muted-foreground py-2 text-center text-xs sm:text-sm">
              Slide {webCurrent} of {webCount}
            </div>
          </div>

          <div
            className="flex items-center justify-center px-4 mt-4"
            data-aos="fade-up"
          >
            <Link
              href={"/projects"}
              className="px-4 py-2 text-white bg-cyan-400 items-center justify-center rounded-md sm:mt-8 md:mt-10 hover:bg-cyan-300 hover:scale-102 transition duration-300 text-sm sm:text-base"
            >
              View All Projects
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="px-4 sm:px-6 lg:px-8 xl:px-20 max-w-7xl mx-auto mt-8 sm:mt-10 md:mt-12 pb-12 sm:pb-16 md:pb-20">
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center pt-8 sm:pt-10"
              data-aos="fade-up"
            >
              Tech-Stack
            </h2>
            <div
              className="grid grid-cols-4 mt-2 justify-center items-center sm:gap-6 lg:gap-7"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {dataWebDev.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 items-center justify-between mt-4 sm:mt-5 w-1/4 sm:w-auto min-w-20"
                >
                  <data.icon className="text-cyan-400 text-3xl sm:text-4xl lg:text-5xl cursor-pointer hover:text-cyan-300 hover:scale-110 transition duration-300" />
                  <p className="text-white text-xs sm:text-sm text-center">
                    {data.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* companies */}
      <section>
        <div className="bg-(--bg2) items-center justify-center pb-10 sm:pb-12 md:pb-15 px-4 sm:px-6">
          <h1
            className="text-center text-white text-xl sm:text-4xl font-bold pt-12 sm:pt-16 md:pt-20"
            data-aos="fade-up"
          >
            Companies I&apos;ve{" "}
            <span className="text-cyan-400">Worked With</span>
          </h1>

          <div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto max-w-7xl mt-6 sm:mt-8 gap-2 sm:gap-6"
            data-aos="fade-up"
          >
            {dataCompanies.map((data, index) => (
              <div
                key={index}
                className="px-3 sm:px-6 lg:px-8 xl:px-15 py-2 sm:py-5"
              >
                <Link href={data.link} target="_blank">
                  <div className="bg-(--bg1) border border-cyan-400 flex flex-col items-center justify-center min-h-[140px] sm:w-[250] sm:h-[170px] p-4 sm:p-5 rounded-lg cursor-pointer shadow-lg sm:shadow-xl hover:scale-105 duration-300">
                    <Image
                      src={data.image}
                      alt="kudukuats"
                      className="w-32 sm:w-36 md:w-full rounded-md max-w-full h-auto"
                      width={160}
                      height={80}
                    />

                    <div className="text-white text-center text-sm sm:text-md font-bold mt-3 sm:mt-4 md:mt-5">
                      {data.name}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
