"use client";

import React from "react";
import { getImagePath } from "@/lib/utils";
import ImageWithFallback from "@/shared/components/ImageWithFallback";

export default function Blockchain() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ImageWithFallback
          className="rounded-lg"
          src={getImagePath("/blockchain.webp")}
          width={392}
          height={345}
          alt="Blockchain"
        ></ImageWithFallback>
        <div className="flex flex-col gap-2 ">
          <p className="text-4xl gradient-text font-bold">Blockchain</p>
          <p className="text-lg gradient-text">
            Decentralized, secure, transparent ledger for digital transactions.
          </p>
        </div>
      </div>
    </div>
  );
}
