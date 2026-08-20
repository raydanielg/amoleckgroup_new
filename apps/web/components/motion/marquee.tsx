"use client";

import * as React from "react";
import { cx, useReducedMotion } from "./use-motion";

/* ============================================================================
   Marquee — an endless ticker. Use it for partner logos, certifications,
   equipment names, or a rolling "24/7 support · nationwide delivery ·
   certified technicians" strip between sections.
   ========================================================================== */

export function Marquee({
  children,
  /** Seconds for one full pass. Higher is slower. Default 28. */
  speed = 28,
  /** Travel right-to-left by default; set true to reverse. */
  reverse = false,
  /** Scroll vertically instead of horizontally. Default false. */
  vertical = false,
  /** Freeze while the pointer is over it. Default true. */
  pauseOnHover = true,
  /** Fade the leading and trailing edges. Default true. */
  fade = true,
  /** Space between repeated items. Default 48. */
  gap = 48,
  className,
  style,
}: {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  vertical?: boolean;
  pauseOnHover?: boolean;
  fade?: boolean;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();
  const [paused, setPaused] = React.useState(false);

  const animationName = vertical
    ? "mo-marquee-y"
    : reverse
      ? "mo-marquee-x-reverse"
      : "mo-marquee-x";

  const maskImage = fade
    ? vertical
      ? "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)"
      : "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)"
    : undefined;

  const track: React.CSSProperties = {
    display: "flex",
    flexDirection: vertical ? "column" : "row",
    gap,
    width: vertical ? "auto" : "max-content",
    animation: reduced ? undefined : `${animationName} ${speed}s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
    willChange: reduced ? undefined : "transform",
  };

  const group = (
    <div
      style={{
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        gap,
        flexShrink: 0,
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );

  return (
    <div
      className={cx("mo-marquee", className)}
      onPointerEnter={() => pauseOnHover && setPaused(true)}
      onPointerLeave={() => pauseOnHover && setPaused(false)}
      style={{
        overflow: "hidden",
        display: "flex",
        maskImage,
        WebkitMaskImage: maskImage,
        ...style,
      }}
    >
      <div style={track}>
        {group}
        {/* The duplicate is what makes the loop seamless. */}
        <div aria-hidden="true" style={{ display: "contents" }}>
          {group}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   TickerStrip — a ready-made band of short phrases separated by a dot.
   Drop one between two sections and the page instantly feels alive.
   ------------------------------------------------------------------------ */

export function TickerStrip({
  items,
  separator = "•",
  speed = 34,
  reverse = false,
  className,
  itemClassName,
}: {
  items: string[];
  separator?: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <Marquee speed={speed} reverse={reverse} gap={0} className={className}>
      {items.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className={itemClassName}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1.5rem",
            paddingInline: "0.75rem",
            whiteSpace: "nowrap",
          }}
        >
          {item}
          <span aria-hidden="true" style={{ opacity: 0.45 }}>
            {separator}
          </span>
        </span>
      ))}
    </Marquee>
  );
}
