"use client";

import * as React from "react";
import {
  cx,
  useElementScrollProgress,
  useReducedMotion,
} from "./use-motion";

/* ============================================================================
   Scroll-linked motion — parallax layers, scale-on-scroll, sticky reveals.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   Parallax — the content drifts at a different rate from the page.
   `speed` is a fraction: 0.2 is subtle, 0.6 is dramatic. Negative reverses it.
   ------------------------------------------------------------------------ */

export function Parallax({
  children,
  speed = 0.25,
  axis = "y",
  className,
  style,
}: {
  children: React.ReactNode;
  speed?: number;
  axis?: "x" | "y";
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();
  const { ref, progress } = useElementScrollProgress<HTMLDivElement>();

  // progress runs 0 → 1; centre it so the element sits at rest mid-viewport.
  const shift = (progress - 0.5) * -2 * speed * 100;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: reduced
          ? undefined
          : axis === "y"
            ? `translate3d(0, ${shift}px, 0)`
            : `translate3d(${shift}px, 0, 0)`,
        willChange: reduced ? undefined : "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   ScrollScale — grows and sharpens as it reaches the middle of the viewport.
   Beautiful on a hero image or a featured equipment shot.
   ------------------------------------------------------------------------ */

export function ScrollScale({
  children,
  /** Scale when the element is at the edge of the viewport. Default 0.9. */
  from = 0.9,
  /** Scale at the centre. Default 1. */
  to = 1,
  /** Also fade in alongside the scale. Default true. */
  fade = true,
  className,
  style,
}: {
  children: React.ReactNode;
  from?: number;
  to?: number;
  fade?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();
  const { ref, progress } = useElementScrollProgress<HTMLDivElement>();

  // Triangle wave: 0 at the edges, 1 at dead centre.
  const centred = 1 - Math.abs(progress - 0.5) * 2;
  const eased = Math.min(1, Math.max(0, centred * 1.6));
  const scale = from + (to - from) * eased;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: reduced ? undefined : `scale(${scale})`,
        opacity: reduced || !fade ? undefined : 0.55 + eased * 0.45,
        transition: "opacity 220ms linear",
        willChange: reduced ? undefined : "transform, opacity",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   ParallaxImage — a background image that drifts inside a fixed frame.
   Give the wrapper a height and it does the rest.
   ------------------------------------------------------------------------ */

export function ParallaxImage({
  src,
  alt = "",
  speed = 0.18,
  className,
  style,
}: {
  src: string;
  alt?: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();
  const { ref, progress } = useElementScrollProgress<HTMLDivElement>();
  const shift = (progress - 0.5) * -2 * speed * 100;

  return (
    <div
      ref={ref}
      className={cx("mo-zoom-media", className)}
      style={{ overflow: "hidden", position: "relative", ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "118%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          transform: reduced ? undefined : `translate3d(0, ${shift}px, 0)`,
          willChange: reduced ? undefined : "transform",
        }}
      />
    </div>
  );
}

/* ---------------------------------------------------------------------------
   StickyStack — each child pins to the top and the next slides over it.
   Give it a list of cards and it turns a plain section into a scroll story.
   ------------------------------------------------------------------------ */

export function StickyStack({
  children,
  /** Distance from the top when pinned. Default "12vh". */
  top = "12vh",
  /** Vertical gap between cards. Default 24. */
  gap = 24,
  className,
}: {
  children: React.ReactNode;
  top?: string;
  gap?: number;
  className?: string;
}) {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <div className={className} style={{ display: "grid", gap }}>
      {items.map((child, index) => (
        <div
          key={index}
          style={{
            position: "sticky",
            top: `calc(${top} + ${index * 14}px)`,
            zIndex: index + 1,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
