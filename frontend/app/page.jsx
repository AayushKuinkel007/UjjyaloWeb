"use client";
import React from "react";
import Header from "./Components/Header";
import OpeningModal from "./Components/OpeningModal";
import Hero from "./PageComponents/Hero";
import ProjectsGrid from "./PageComponents/Projects";
import Services from "./PageComponents/Services";
import FAQs from "./PageComponents/FAQs";
import Footer from "./Components/Footer";

const page = () => {
  return (
    <>
      <Header />

      <main className="pt-24">
        <Hero />
        <Services />
        <ProjectsGrid />
      </main>

      <Footer/>
      <OpeningModal />
    </>
  );
};

export default page;
