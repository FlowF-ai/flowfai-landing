import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { getImagePath } from '@/lib/utils'
import ImageWithFallback from "./ImageWithFallback";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Welcome to FlowFai
          </h1>
          <p className="text-xl gradient-text mb-8">
            Revolutionizing decentralized application development with AI and
            blockchain
          </p>
          <Button asChild size="lg" variant="ghost">
            <Link  href="https://forms.gle/tyJ25bwb2dycQKZT7" target="_blank">
              Explore the future <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
        <div className="lg:w-1/2">
          <ImageWithFallback
            src={getImagePath('/hero.webp')}
            alt="FlowFai Hero"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
