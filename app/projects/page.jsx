"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Banner from "../assets/banner.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { WebDev } from "../../dataProjects/webDev";
import { Designs } from "../../dataProjects/designs";
import { LogoProjects } from "../../dataProjects/logoProjects";

export default function Projects() {
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

  // handle design carousel
  const [designApi, setDesignApi] = React.useState(null);
  const [designCurrent, setDesignCurrent] = React.useState(0);
  const [designCount, setDesignCount] = React.useState(0);

  React.useEffect(() => {
    if (!designApi) return;
    setDesignCount(designApi.scrollSnapList().length);
    setDesignCurrent(designApi.selectedScrollSnap() + 1);
    designApi.on("select", () =>
      setDesignCurrent(designApi.selectedScrollSnap() + 1)
    );
  }, [designApi]);

  // handle logo carousel
  const [logoApi, setLogoAPi] = React.useState(null);
  const [logoCurrent, setLogoCurrent] = React.useState(0);
  const [logoCount, setLogoCount] = React.useState(0);

  React.useEffect(() => {
    if (!logoApi) return;

    setLogoCount(logoApi.scrollSnapList().length);
    setLogoCurrent(logoApi.selectedScrollSnap() + 1);
    logoApi.on("select", () =>
      setLogoCurrent(logoApi.selectedScrollSnap() + 1)
    );
  }, [logoApi]);


  return (
    <>
      <section className="h-screen w-full relative bg-(--bg1)">
        {/* background */}
        <Image
          src={Banner}
          alt="kudukuats"
          priority
          fill
          className="object-cover opacity-50"
        />

        {/* content */}
        <div className="relative h-full flex flex-col z-10 items-center justify-center">
          <h1
            className="text-center text-4xl font-bold text-white"
            data-aos="fade-up"
          >
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p
            className="text-center text-white text-sm lg:text-xl mt-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Curious about what I’ve been working on? Take a look. <br />
            Wondering what I’ve built so far? Let’s dive in.
          </p>

          <Link
            href={"#card-projects"}
            className="text-white text-md bg-cyan-500 py-2 px-4 mt-10 rounded-md hover:bg-cyan-400 hover:scale-101 transisiton duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* projects */}
      <section className="bg-(--bg2)" id="card-projects">
        <div className="py-6 md:py-10 px-4 sm:px-6 lg:px-10">
          {/* web development */}
          <h1
            className="text-white text-2xl sm:text-3xl text-center font-bold"
            data-aos="fade-up"
          >
            Web Development <span className="text-cyan-400">Projects</span>
          </h1>
          <div className="flex flex-col items-center justify-center mt-4 sm:mt-5">
            <Carousel
              setApi={setWebApi}
              opts={{
                align: "start",
              }}
              className="w-full max-w-7xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CarouselContent>
                {WebDev.map((web, id) => (
                  <CarouselItem
                    key={id}
                    className="basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 sm:p-2">
                      <Card className="h-85 w-full flex items-center justify-center bg-(--bg1) border-cyan-500">
                        <CardContent className="flex flex-col items-center justify-center p-2 sm:p-3 hover:scale-105 transition duration-300">
                          <Image
                            src={web.img}
                            alt={"kudukuats" || `${id + 1}`}
                            className="w-100 h-full rounded-lg lg"
                          />
                          <h2 className="text-white mt-2 text-sm sm:text-md">
                            {web.name}
                          </h2>
                          <p className="text-center text-xs sm:text-sm text-gray-400 py-1">
                            {web.p}
                          </p>
                          <Link
                            href={web.link}
                            target="_blank"
                            className="mt-2 text-xs sm:text-sm bg-cyan-500 text-white py-1 px-3 rounded hover:bg-cyan-400 hover:scale-105 transition duration-300"
                          >
                            View Project
                          </Link>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className={
                  "cursor-pointer hover:scale-110 transition duration-300 hidden sm:flex"
                }
              />
              <CarouselNext
                className={
                  "cursor-pointer hover:scale-110 transition duration-300 hidden sm:flex"
                }
              />
            </Carousel>
            <div className="text-muted-foreground py-2 text-center text-xs sm:text-sm">
              Slide {webCurrent} of {webCount}
            </div>
          </div>
        </div>

        {/* design projects */}
        <div className="py-6 md:py-10 px-4 sm:px-6 lg:px-10">
          <h1
            className="text-white text-2xl sm:text-3xl text-center font-bold"
            data-aos="fade-up"
          >
            Design <span className="text-cyan-400">Projects</span>
          </h1>

          <div
            className="flex flex-col items-center justify-center mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-4 sm:mt-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Carousel setApi={setDesignApi} className="w-full lg:w-200">
              <CarouselContent>
                {Designs.map((data, id) => (
                  <CarouselItem key={id}>
                    <Card
                      className={
                        "w-full h-60 lg:h-120 flex items-center justify-center bg-(--bg1) border-cyan-500"
                      }
                    >
                      <CardContent className="flex items-center justify-center p-2 sm:p-3">
                        <Image
                          src={data.img}
                          alt={"kudukuats" || `${id + 1}`}
                          className="w-100 h-55 lg:w-200 lg:h-110 rounded-xl sm:rounded-2xl"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className={
                  "cursor-pointer hover:scale-110 transition duration-300 hidden sm:flex"
                }
              />
              <CarouselNext
                className={
                  "cursor-pointer hover:scale-110 transition duration-300 hidden sm:flex"
                }
              />
            </Carousel>
            <div className="text-muted-foreground py-2 text-center text-xs sm:text-sm">
              Slide {designCurrent} of {designCount}
            </div>
          </div>
        </div>

        {/* logo projects */}
        <div className="py-6 md:py-10 px-4 sm:px-6 lg:px-10">
          <h1
            className="text-white text-2xl sm:text-3xl text-center font-bold"
            data-aos="fade-up"
          >
            Logo <span className="text-cyan-400">Projects</span>
          </h1>

          <div
            className="flex flex-col items-center justify-center mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-4 sm:mt-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Carousel setApi={setLogoAPi} className="w-full lg:w-200">
              <CarouselContent>
                {LogoProjects.map((data, id) => (
                  <CarouselItem key={id}>
                    <Card
                      className={
                        "w-full h-60 lg:h-120 flex items-center justify-center bg-(--bg1) border-cyan-500"
                      }
                    >
                      <CardContent className="flex items-center justify-center p-2 sm:p-3">
                        <Image
                          src={data.img}
                          alt={"kudukuats" || `${id + 1}`}
                          className="w-100 h-55 lg:w-200 lg:h-110 rounded-xl sm:rounded-2xl"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className={
                  "cursor-pointer hover:scale-110 transition duration-300 hidden sm:flex"
                }
              />
              <CarouselNext
                className={
                  "cursor-pointer hover:scale-110 transition duration-300 hidden sm:flex"
                }
              />
            </Carousel>
            <div className="text-muted-foreground py-2 text-center text-xs sm:text-sm">
              Slide {logoCurrent} of {logoCount}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
