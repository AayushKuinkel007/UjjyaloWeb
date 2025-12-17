"use client";
import React from "react";
import Header from "./Components/Header";
import OpeningModal from "./Components/OpeningModal";
import Hero from "./PageComponents/Hero";
import ProjectsGrid from "./PageComponents/Projects";

const page = () => {
  return (
    <>
      <Header />

      <main className="pt-24">
        <Hero />
        <ProjectsGrid />
      </main>

      <OpeningModal />
    </>
  );
};

export default page;
