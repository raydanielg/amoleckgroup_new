"use client";

import * as React from "react";
import { cx, useReducedMotion } from "./use-motion";

/* ============================================================================
   Ambient backgrounds.

   Every one of these is decorative: absolutely positioned, aria-hidden, and
   pointer-events:none, so it never interferes with your content or a11y.
   They draw with `currentColor`, which means they inherit whatever colour the
   parent section already uses — your palette is never overridden.

   Usage: give the parent `position: relative; overflow: hidden`, then drop the
   background in as the first child.

       <section className="relative overflow-hidden">
         <AuroraBackground />
         <div className="relative z-10"> ...your content... </div>
       </section>
   ========================================================================== */

const layerStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  overflow: "hidden",
};

/** Deterministic pseudo-random, so server and client render identically. */
function seeded(seed: number) {
  let state = seed * 9301 + 49297;
  return () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
}

/* ---------------------------------------------------------------------------
   AuroraBackground — slow, soft colour fields drifting behind the content.
   The default look is a tinted version of the section's own colour.
   ------------------------------------------------------------------------ */

export function AuroraBackground({
  /** 0–1. How visible the aurora is. Default 0.22. */
  intensity = 0.22,
  /** Seconds per drift cycle. Default 22. */
  speed = 22,
  /** Optional explicit colours. Leave empty to inherit. */
  colors,
  className,
}: {
  intensity?: number;
  speed?: number;
  colors?: [string, string, string?];
  className?: string;
}) {
  const reduced = useReducedMotion();

  const paint = (index: number) =>
    colors?.[index] ??
    `color-mix(in oklab, currentColor ${Math.round(intensity * 100)}%, transparent)`;

  const blobs = [
    { top: "-18%", left: "-10%", size: "58%", delay: "0s" },
    { top: "12%", left: "58%", size: "52%", delay: "-7s" },
    { top: "48%", left: "18%", size: "62%", delay: "-14s" },
  ];

  return (
    <div style={layerStyle} aria-hidden="true" className={className}>
      {blobs.map((blob, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            top: blob.top,
            left: blob.left,
            width: blob.size,
            aspectRatio: "1",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${paint(index)}, transparent 68%)`,
            filter: "blur(52px)",
            animation: reduced
              ? undefined
              : `mo-blob-drift ${speed + index * 5}s ease-in-out ${blob.delay} infinite`,
            willChange: reduced ? undefined : "transform",
          }}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   GridBackground — a technical grid that drifts, faded out toward the edges.
   Reads as precise and clinical; a natural fit for equipment and technology
   sections.
   ------------------------------------------------------------------------ */

export function GridBackground({
  /** Cell size in pixels. Default 44. */
  size = 44,
  /** 0–1 line visibility. Default 0.09. */
  intensity = 0.09,
  /** Seconds for the grid to travel one cell. Default 14. */
  speed = 14,
  /** Fade the grid out toward the edges. Default true. */
  mask = true,
  className,
}: {
  size?: number;
  intensity?: number;
  speed?: number;
  mask?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const line = `color-mix(in oklab, currentColor ${Math.round(intensity * 100)}%, transparent)`;

  const maskImage = mask
    ? "radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 100%)"
    : undefined;

  return (
    <div
      style={{
        ...layerStyle,
        backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px, ${size}px ${size}px`,
        maskImage,
        WebkitMaskImage: maskImage,
        animation: reduced ? undefined : `mo-grid-drift ${speed}s linear infinite`,
        ["--mo-grid-size" as string]: `${size}px`,
      }}
      aria-hidden="true"
      className={className}
    />
  );
}

/* ---------------------------------------------------------------------------
   DotGrid — softer sibling of GridBackground.
   ------------------------------------------------------------------------ */

export function DotGrid({
  size = 24,
  dot = 1.4,
  intensity = 0.16,
  mask = true,
  className,
}: {
  size?: number;
  dot?: number;
  intensity?: number;
  mask?: boolean;
  className?: string;
}) {
  const color = `color-mix(in oklab, currentColor ${Math.round(intensity * 100)}%, transparent)`;
  const maskImage = mask
    ? "radial-gradient(ellipse 75% 65% at 50% 50%, #000 25%, transparent 100%)"
    : undefined;

  return (
    <div
      style={{
        ...layerStyle,
        backgroundImage: `radial-gradient(${color} ${dot}px, transparent ${dot}px)`,
        backgroundSize: `${size}px ${size}px`,
        maskImage,
        WebkitMaskImage: maskImage,
      }}
      aria-hidden="true"
      className={className}
    />
  );
}

/* ---------------------------------------------------------------------------
   BeamField — thin vertical shafts of light falling through the section.
   ------------------------------------------------------------------------ */

export function BeamField({
  count = 9,
  intensity = 0.14,
  speed = 9,
  className,
}: {
  count?: number;
  intensity?: number;
  /** Seconds for a beam to cross the section. Default 9. */
  speed?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return null;

  const random = seeded(count + 3);
  const color = `color-mix(in oklab, currentColor ${Math.round(intensity * 100)}%, transparent)`;

  const beams = Array.from({ length: count }, (_, index) => ({
    left: `${(index / count) * 100 + random() * 6}%`,
    width: 1 + Math.round(random() * 2),
    height: `${28 + random() * 34}%`,
    duration: speed + random() * speed * 0.9,
    delay: -random() * speed * 2,
  }));

  return (
    <div style={layerStyle} aria-hidden="true" className={className}>
      {beams.map((beam, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: beam.left,
            width: beam.width,
            height: beam.height,
            borderRadius: 999,
            background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
            animation: `mo-beam-fall ${beam.duration}s linear ${beam.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   ParticleField — slow floating motes. Cheap: pure CSS, no canvas, no rAF.
   ------------------------------------------------------------------------ */

export function ParticleField({
  count = 26,
  intensity = 0.3,
  className,
}: {
  count?: number;
  intensity?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return null;

  const random = seeded(count * 7 + 11);
  const color = `color-mix(in oklab, currentColor ${Math.round(intensity * 100)}%, transparent)`;

  const particles = Array.from({ length: count }, () => ({
    top: `${random() * 100}%`,
    left: `${random() * 100}%`,
    size: 2 + random() * 5,
    distance: -(14 + random() * 34),
    duration: 6 + random() * 10,
    delay: -random() * 12,
    opacity: 0.25 + random() * 0.6,
  }));

  return (
    <div style={layerStyle} aria-hidden="true" className={className}>
      {particles.map((particle, index) => (
        <span
          key={index}
          style={
            {
              position: "absolute",
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              borderRadius: 999,
              background: color,
              opacity: particle.opacity,
              "--mo-float-distance": `${particle.distance}px`,
              animation: `mo-float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
              willChange: "transform",
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   BlobField — big soft shapes that morph and drift. Heavier, more organic
   than Aurora. Best behind a hero.
   ------------------------------------------------------------------------ */

export function BlobField({
  count = 3,
  intensity = 0.18,
  blur = 60,
  className,
}: {
  count?: number;
  intensity?: number;
  blur?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const random = seeded(count * 13 + 5);
  const color = `color-mix(in oklab, currentColor ${Math.round(intensity * 100)}%, transparent)`;

  const blobs = Array.from({ length: count }, (_, index) => ({
    top: `${random() * 70 - 10}%`,
    left: `${random() * 80 - 10}%`,
    size: `${30 + random() * 34}%`,
    duration: 18 + index * 6 + random() * 8,
    delay: -random() * 20,
    radius: `${40 + random() * 25}% ${40 + random() * 25}% ${40 + random() * 25}% ${40 + random() * 25}% / ${40 + random() * 25}% ${40 + random() * 25}% ${40 + random() * 25}% ${40 + random() * 25}%`,
  }));

  return (
    <div style={layerStyle} aria-hidden="true" className={className}>
      {blobs.map((blob, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            top: blob.top,
            left: blob.left,
            width: blob.size,
            aspectRatio: "1",
            background: color,
            borderRadius: blob.radius,
            filter: `blur(${blur}px)`,
            animation: reduced
              ? undefined
              : `mo-blob-drift ${blob.duration}s ease-in-out ${blob.delay}s infinite`,
            willChange: reduced ? undefined : "transform",
          }}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   NoiseOverlay — a whisper of film grain that makes flat gradients look
   expensive. Static, so it costs nothing.
   ------------------------------------------------------------------------ */

export function NoiseOverlay({
  opacity = 0.035,
  className,
}: {
  opacity?: number;
  className?: string;
}) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>`;

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        ...layerStyle,
        opacity,
        mixBlendMode: "overlay",
        backgroundImage: `url("data:image/svg+xml,${svg}")`,
      }}
    />
  );
}

/* ---------------------------------------------------------------------------
   SectionGlow — a single warm pool of light behind a heading or CTA.
   ------------------------------------------------------------------------ */

export function SectionGlow({
  x = "50%",
  y = "0%",
  size = 620,
  intensity = 0.2,
  className,
}: {
  x?: string;
  y?: string;
  size?: number;
  intensity?: number;
  className?: string;
}) {
  const color = `color-mix(in oklab, currentColor ${Math.round(intensity * 100)}%, transparent)`;

  return (
    <div
      aria-hidden="true"
      className={cx(className)}
      style={{
        ...layerStyle,
        background: `radial-gradient(${size}px circle at ${x} ${y}, ${color}, transparent 70%)`,
      }}
    />
  );
}
