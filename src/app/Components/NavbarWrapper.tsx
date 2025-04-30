'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 500, easing: "ease-in-out", once: true,});
  }, []);

  return <Navbar />;
}
