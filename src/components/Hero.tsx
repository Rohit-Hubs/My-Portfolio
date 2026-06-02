"use client";

import Overlay from "@/components/Overlay";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll value exactly like the old ScrollyVideo did
  const springScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  // Create cinematic animation effects based on scroll!
  const scale = useTransform(springScroll, [0, 1], [1, 1.25]);
  const y = useTransform(springScroll, [0, 1], ["0%", "15%"]);
  
  // Crossfade opacities between the two images based on scroll
  // Image 1 fades out between 0 and 0.4 scroll progress
  const opacity1 = useTransform(springScroll, [0, 0.4], [0.8, 0]);
  // Image 2 fades in between 0 and 0.4 scroll progress
  const opacity2 = useTransform(springScroll, [0, 0.4], [0, 0.8]);
  
  return (
    <div ref={containerRef} className="relative h-[400vh]" id="home">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a]">
        {/* First Image */}
        <motion.img
          style={{ scale, y, opacity: opacity1 }}
          src="/linkedin_profile_banner.png"
          className="h-full w-full object-cover object-top absolute inset-0"
          alt="Background Frame 1"
        />
        {/* Second Image */}
        <motion.img
          style={{ scale, y, opacity: opacity2 }}
          src="/Linkedin_prof.png"
          className="h-full w-full md:w-[60%] md:left-[20%] lg:w-[50%] lg:left-[25%] object-cover object-top absolute"
          alt="Background Frame 2"
        />
        {/* Pass the smoothed scroll progress to the Overlay */}
        <Overlay scrollYProgress={springScroll} />
      </div>
    </div>
  );
}
