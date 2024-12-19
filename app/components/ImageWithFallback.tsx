'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full ">
      {isLoading && (
        <div 
        style={{
            width,
            height
        }}
          className={cn(
            "absolute inset-0 animate-pulse bg-muted rounded-md",
            className
          )}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "object-contain",
          "rounded-md",
          className,
          isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-200 rounded-md"
        )}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}