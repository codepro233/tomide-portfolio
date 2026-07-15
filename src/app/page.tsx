import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";

import About from "@/sections/About";

import Skills from "@/sections/Skills";

import Projects from "@/sections/Projects";

import Blog from "@/sections/Blog";

import Github from "@/sections/Github";

import Timeline from "@/sections/Timeline";

import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import Experience from "@/sections/Experience";



export default function Home() {
  return (
    <>


       <Navbar />
       <main className="pt-20">

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Stats />

      <Github /> 

       <Blog />
       {/* <Experience/> */}

       <Timeline />
       
      <Contact /> 
      {/* <Testimonials /> */}
       <Footer /> 

    </main>
    </>
  );
} 