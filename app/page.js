"use client";

import React from "react";
import "../app/globals.css";
import Home from "./home/page";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
