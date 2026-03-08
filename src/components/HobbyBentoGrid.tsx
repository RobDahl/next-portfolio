"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { HobbyEntry } from "@/data/data";

interface HobbyCardProps {
  hobby: HobbyEntry;
}

function HobbyCard({ hobby }: HobbyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (hobby.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hobby.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hobby.images.length]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 min-h-[256px] ${hobby.span || "col-span-1"} ${
        hobby.span === "row-span-2" ? "row-span-2" : ""
      }`}
    >
      {/* Image Background */}
      <div className="relative h-full w-full">
        <Image
          src={hobby.images[currentImageIndex]}
          alt={hobby.title}
          fill
          className="object-cover"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-semibold text-white md:text-xl">{hobby.title}</h3>
        <p className="mt-1 text-sm text-zinc-300 md:text-base">{hobby.description}</p>
        
        {/* Carousel Indicators */}
        {hobby.images.length > 1 && (
          <div className="mt-2 flex gap-1">
            {hobby.images.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-4 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-cyan-400" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface HobbyBentoGridProps {
  hobbies: HobbyEntry[];
}

export function HobbyBentoGrid({ hobbies }: HobbyBentoGridProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-white md:text-3xl">Off the Clock</h3>
        <p className="text-zinc-400">Beyond the keyboard—hobbies that keep me grounded and inspired.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 auto-rows-[256px]">
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby} />
        ))}
      </div>
    </section>
  );
}
