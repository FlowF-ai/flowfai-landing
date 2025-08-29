import Header from "./components/Header";
import Hero from "@/features/landing/components/Hero";
import Blockchain from "@/features/landing/components/Blockchain";
import Features from "@/features/landing/components/Features";
import AvaxSection from "@/features/landing/components/AvaxSection";
import Vision from "@/features/landing/components/Vision";
import WhyFlowFai from "@/features/landing/components/WhyFlowFai";
import Roadmap from "@/features/landing/components/Roadmap";
import CTA from "@/features/landing/components/CTA";
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
