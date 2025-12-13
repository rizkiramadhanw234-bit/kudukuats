"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return children;
}
