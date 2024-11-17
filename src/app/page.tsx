
"use client"

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect (()=>{
    Aos.init ({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    Aos.refresh();
  },[]);
  return (
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      
      
      
    </main>

);
}