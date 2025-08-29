/**
 * Enhanced Link Component
 * Following Open/Closed Principle - open for extension, closed for modification
 */

"use client";

import React from "react";
import Link from "next/link";
import { LinkProps as NextLinkProps } from "next/link";
import { LinkProps } from "@/types";
import { cn, ValidationUtils } from "@/shared/utils";

interface EnhancedLinkProps extends Omit<NextLinkProps, "href">, LinkProps {
  variant?: "default" | "button" | "nav" | "external";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const linkVariants = {
  default: "text-primary hover:text-primary/80 transition-colors",
  button:
    "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors",
  nav: "text-foreground hover:text-primary transition-colors",
  external:
    "text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors",
};

const linkSizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function EnhancedLink({
  href,
  children,
  className,
  external = false,
  variant = "default",
  size = "md",
  disabled = false,
  ...props
}: EnhancedLinkProps) {
  const isExternal = external || ValidationUtils.isValidUrl(href);

  const linkClassName = cn(
    linkVariants[variant],
    linkSizes[size],
    disabled && "opacity-50 pointer-events-none cursor-not-allowed",
    className
  );

  // External links
  if (isExternal) {
    return (
      <a
        href={href}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={disabled}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {variant === "external" && (
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </a>
    );
  }

  // Internal links
  return (
    <Link
      href={href}
      className={linkClassName}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Link>
  );
}

export default EnhancedLink;
