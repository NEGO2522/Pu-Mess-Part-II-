import React, { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
  pauseOnHover?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className = "",
  children,
  pauseOnHover = false,
  repeat = 4,
  duration = "30s",
  gap = "2rem",
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      if (pauseOnHover) setIsPaused(true);
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) setIsPaused(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{
        ["--duration" as any]: duration,
        ["--gap" as any]: gap,
      }}
    >
      <div
        className={`flex ${isPaused ? "" : "animate-marquee"}`}
        style={{
          animationDuration: isPaused ? "0s" : duration,
          gap: gap,
        }}
      >
        {Array.from({ length: repeat }).map((_, index) => (
          <div key={index} className="flex gap-3">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};
