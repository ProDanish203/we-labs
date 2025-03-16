"use client";

import type React from "react";

import { useState } from "react";

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

export default function SkillBadge({
  name,
  icon,
  color = "bg-blue-100 text-blue-800",
}: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-full ${color} transition-all duration-300 ${
        isHovered ? "scale-105 shadow-md" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <span className="font-medium">{name}</span>
    </div>
  );
}
