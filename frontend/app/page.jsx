"use client";
import React from "react";
import Header from "./Components/Header";
import OpeningModal from "./Components/OpeningModal";
import Hero from "./PageComponents/Hero";

const page = () => {
  return (
    <>
      <Header />

      <main className="pt-24">
        <Hero />
      </main>

      <OpeningModal />
    </>
  );
};

export default page;
