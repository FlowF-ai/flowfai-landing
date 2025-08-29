import Header from "./components/Header";
import Hero from "./components/Hero";
import Blockchain from "./components/Blockchain";
import Features from "./components/Features";
import AvaxSection from "./components/AvaxSection";
import Vision from "./components/Vision";
import WhyFlowFai from "./components/WhyFlowFai";
import Roadmap from "./components/Roadmap";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Blockchain />
        <Features />
        <AvaxSection />
        <Vision />
        <WhyFlowFai />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
