"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  avatarSrc: string;
}

export default function TestimonialCard({
  quote,
  author,
  position,
  avatarSrc,
}: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-md transition-all duration-300 ${
        isHovered ? "shadow-lg -translate-y-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Quote className="text-blue-500/30 h-10 w-10 mb-4" />
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={avatarSrc || "/placeholder.svg"}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
}
