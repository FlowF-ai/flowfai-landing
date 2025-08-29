/**
 * Loading Spinner Component
 * Reusable loading indicator following DRY principle
 */

"use client";

import React from "react";
import { cn } from "@/shared/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  color?: "primary" | "secondary" | "accent";
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

const colorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

export function LoadingSpinner({
  size = "md",
  className,
  color = "primary",
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Alternative dot-based loader
export function LoadingDots({
  size = "md",
  className,
  color = "primary",
}: LoadingSpinnerProps) {
  const dotSize = {
    sm: "w-1 h-1",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  return (
    <div
      className={cn("flex space-x-1", className)}
      role="status"
      aria-label="Loading"
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "animate-bounce rounded-full",
            dotSize[size],
            colorClasses[color]
          )}
          style={{
            animationDelay: `${i * 0.1}s`,
            backgroundColor: "currentColor",
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
