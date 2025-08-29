/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import React from "react";
import { getImagePath } from "@/lib/utils";
import ImageWithFallback from "@/shared/components/ImageWithFallback";

export default function AvaxSection() {
  return (
    <section id="avax" className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <ImageWithFallback
            src={getImagePath("/AVAX.png")}
            width={400}
            height={300}
            alt="AVAX Logo"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-6 gradient-text">
            Discover AVAX
          </h2>
          <p className="mb-6 gradient-text">
            AVAX is the native cryptocurrency of Avalanche, a fast, low-cost,
            and eco-friendly smart contract platform. With FlowFai, you can
            maximize AVAX's potential in DeFi and beyond.
          </p>
          <Button
            variant="ghost"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Learn more about AVAX
          </Button>
        </div>
      </div>
    </section>
  );
}
