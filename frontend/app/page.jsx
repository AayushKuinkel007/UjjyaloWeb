"use client";
import React from "react";
import Header from "./Components/Header";
import OpeningModal from "./Components/OpeningModal";
import Hero from "./PageComponents/Hero";
import ProjectsGrid from "./PageComponents/Projects";
import Services from "./PageComponents/Services";
import FAQs from "./PageComponents/FAQs";
import Footer from "./Components/Footer";
import Process from "./PageComponents/how-we-work";
import FinalCTA from "./PageComponents/FinalCTA";
import Testimonials from "./PageComponents/Testimonials";

const page = () => {
  return (
    <>
      <Header />

      <main className="pt-24">
        <Hero />
        <Services />
        <ProjectsGrid />
        <Process />
        <FAQs />
        <Testimonials/>
        <FinalCTA />
      </main>

      <Footer/>
      <OpeningModal />
    </>
  );
};

export default page;
