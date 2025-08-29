/**
 * Enhanced Image Component with Fallback
 * Following Single Responsibility Principle
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageProps } from "@/types";
import { cn } from "@/shared/utils";

interface EnhancedImageProps extends ImageProps {
  fallbackSrc?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export function EnhancedImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc,
  priority = false,
  quality = 75,
  fill = false,
  sizes,
  placeholder = "empty",
  blurDataURL,
  ...props
}: EnhancedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-muted text-muted-foreground",
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    );
  }

  const imageProps = {
    src: imageSrc,
    alt,
    className: cn(
      "transition-opacity duration-300",
      isLoading ? "opacity-0" : "opacity-100",
      className
    ),
    onError: handleError,
    onLoad: handleLoad,
    priority,
    quality,
    sizes,
    placeholder,
    blurDataURL,
    ...props,
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  }

  if (!width || !height) {
    throw new Error("Width and height are required when fill is false");
  }

  return <Image {...imageProps} width={width} height={height} />;
}

export default EnhancedImage;
