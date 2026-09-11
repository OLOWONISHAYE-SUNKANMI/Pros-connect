"use client";

import React from "react";

interface BrandLogoProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  inverted?: boolean; // all white
  monochrome?: boolean; // all black
}

export function BrandLogo({
  variant = "full",
  size = "md",
  className = "",
  inverted = false,
  monochrome = false,
}: BrandLogoProps) {
  // Height configurations
  const heights = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
    xl: "h-14",
  };

  const iconSizes = {
    sm: { w: 26, h: 22 },
    md: { w: 34, h: 28 },
    lg: { w: 42, h: 36 },
    xl: { w: 58, h: 50 },
  };

  const currentIcon = iconSizes[size];

  // SVG representation of the interconnected infinity-node symbol (formed by 'c' and 'o' with 2 dots)
  // Matching the Brand Guidelines 2026:
  // - Two circular nodes/dots at the top
  // - Continuous infinity loop at the bottom
  const renderEmblem = (color: string = "#d94e1f") => (
    <svg
      width={currentIcon.w}
      height={currentIcon.h}
      viewBox="0 0 100 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block shrink-0 transition-transform group-hover:scale-105"
    >
      {/* Left Node Dot */}
      <circle cx="28" cy="16" r="14" fill={color} />
      {/* Right Node Dot */}
      <circle cx="72" cy="16" r="14" fill={color} />
      {/* Interconnected Infinity Loop */}
      <path
        d="M28 36C15 36 5 46 5 59C5 72 15 82 28 82C40 82 48 73 50 67C52 73 60 82 72 82C85 82 95 72 95 59C95 46 85 36 72 36C60 36 52 45 50 51C48 45 40 36 28 36ZM28 69C21.5 69 17 64.5 17 59C17 53.5 21.5 49 28 49C34 49 40 54 42.5 59C40 64 34 69 28 69ZM72 69C66 69 60 64 57.5 59C60 54 66 49 72 49C78.5 49 83 53.5 83 59C83 64.5 78.5 69 72 69Z"
        fill={color}
      />
    </svg>
  );

  const emblemColor = inverted ? "#ffffff" : monochrome ? "#000000" : "#d94e1f";
  const textColor = inverted
    ? "text-white"
    : monochrome
    ? "text-black"
    : "text-[#000000] dark:text-[#f1f1f1]";

  if (variant === "icon") {
    if (!inverted && !monochrome) {
      return (
        <div className={`inline-flex items-center justify-center ${className}`}>
          <img
            src="https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png"
            alt="ProsConnect"
            style={{ width: currentIcon.w, height: currentIcon.h }}
            className="object-contain transition-transform group-hover:scale-105"
          />
        </div>
      );
    }
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderEmblem(emblemColor)}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1 select-none font-display font-extrabold tracking-tight ${heights[size]} ${className}`}>
      {/* 'pros' */}
      <span className={`text-xl md:text-2xl lowercase ${textColor} transition-colors`}>
        pros
      </span>

      {/* Interconnected infinity emblem representing 'co' */}
      <span className="mx-0.5 relative top-[1px] inline-flex items-center">
        {renderEmblem(emblemColor)}
      </span>

      {/* 'nnect' */}
      <span className={`text-xl md:text-2xl lowercase ${textColor} transition-colors`}>
        nnect
      </span>
    </div>
  );
}
