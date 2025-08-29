import { Brain, Coins, FileCode, Layers } from "lucide-react";
import React from "react";
import { getImagePath } from "@/lib/utils";
import ImageWithFallback from "@/shared/components/ImageWithFallback";

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Agents",
    description:
      "Utilize artificial intelligence to optimize your trading strategies",
  },
  {
    icon: <Coins className="h-8 w-8" />,
    title: "Cryptocurrencies",
    description: "Access a wide cryptocurrency market with ease",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "DeFi",
    description:
      "Participate in decentralized finance and maximize your returns",
  },
  {
    icon: <FileCode className="h-8 w-8" />,
    title: "Smart Contracts",
    description: "Create and manage smart contracts securely",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-lg">
              <div className="gradient-text mb-4">{feature.icon}</div>
              <h3 className="text-xl gradient-text font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="gradient-text">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <ImageWithFallback
            src={getImagePath("/features.webp")}
            alt="FlowFai Features"
            width={600}
            height={600}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
