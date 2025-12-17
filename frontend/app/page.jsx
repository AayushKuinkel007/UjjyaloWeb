"use client";
import React from "react";
import Header from "./Components/Header";
import OpeningModal from "./Components/OpeningModal";
import Hero from "./PageComponents/Hero";
import Services from "./PageComponents/Services";

const page = () => {
  return (
    <>
      <Header />

      <main className="pt-24">
        <Hero />

        <Services/>
      </main>

      <OpeningModal />
    </>
  );
};

export default page;
