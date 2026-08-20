"use client";

import * as React from "react";
import { cx, useIsTouch, useReducedMotion } from "./use-motion";

/* ============================================================================
   Interactive surfaces — tilt, spotlight, sweeping borders, flips.
   All of them fall back to a plain static card on touch devices and for
   anyone using reduced motion.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   TiltCard — the card leans toward the pointer in 3D, with an optional glare.
   ------------------------------------------------------------------------ */

export function TiltCard({
  children,
  /** Maximum lean in degrees. Default 9. */
  max = 9,
  /** How far the card lifts toward the viewer, in pixels. Default 14. */
  lift = 14,
  /** Show a moving specular highlight. Default true. */
  glare = true,
  /** Perspective depth in pixels. Default 900. */
  perspective = 900,
  className,
  style,
  ...rest
}: {
  children: React.ReactNode;
  max?: number;
  lift?: number;
  glare?: boolean;
  perspective?: number;
  className?: string;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "style" | "className">) {
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const disabled = reduced || touch;

  const ref = React.useRef<HTMLDivElement | null>(null);
  const frame = React.useRef(0);
  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0, mx: 50, my: 50 });
  const [active, setActive] = React.useState(false);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (disabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const fx = (event.clientX - rect.left) / rect.width;
    const fy = (event.clientY - rect.top) / rect.height;

    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      setTilt({
        rx: (0.5 - fy) * max * 2,
        ry: (fx - 0.5) * max * 2,
        mx: fx * 100,
        my: fy * 100,
      });
    });
  };

  const reset = () => {
    setActive(false);
    setTilt({ rx: 0, ry: 0, mx: 50, my: 50 });
  };

  React.useEffect(
    () => () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    },
    [],
  );

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={() => !disabled && setActive(true)}
      onPointerLeave={reset}
      className={cx("mo-tilt", className)}
      style={{
        transformStyle: "preserve-3d",
        perspective: `${perspective}px`,
        transform: disabled
          ? undefined
          : `perspective(${perspective}px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(${active ? lift : 0}px)`,
        transition: active
          ? "transform 90ms linear"
          : "transform 520ms var(--mo-ease)",
        willChange: "transform",
        position: "relative",
        ...style,
      }}
      {...rest}
    >
      {children}

      {glare && !disabled && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            background: `radial-gradient(420px circle at ${tilt.mx}% ${tilt.my}%, color-mix(in oklab, currentColor 14%, transparent), transparent 62%)`,
            opacity: active ? 1 : 0,
            transition: "opacity 260ms var(--mo-ease-soft)",
          }}
        />
      )}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   SpotlightCard — a soft glow follows the pointer across the surface.
   Cheaper than TiltCard; good for dense grids of service / equipment cards.
   ------------------------------------------------------------------------ */

export function SpotlightCard({
  children,
  /** Diameter of the glow in pixels. Default 320. */
  size = 320,
  className,
  style,
  ...rest
}: {
  children: React.ReactNode;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "style" | "className">) {
  const frame = React.useRef(0);
  const [pos, setPos] = React.useState({ x: "50%", y: "50%" });

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      setPos({ x: `${x}px`, y: `${y}px` });
    });
  };

  React.useEffect(
    () => () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    },
    [],
  );

  return (
    <div
      onPointerMove={handleMove}
      className={cx("mo-spotlight", className)}
      style={
        {
          "--mo-mx": pos.x,
          "--mo-my": pos.y,
          "--mo-spot-size": `${size}px`,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <span style={{ position: "relative", zIndex: 1, display: "block" }}>
        {children}
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   GlowCard — a highlight travels around the border. Set `always` for hero
   cards you want lit up permanently.
   ------------------------------------------------------------------------ */

export function GlowCard({
  children,
  always = false,
  speed = 3,
  className,
  style,
  ...rest
}: {
  children: React.ReactNode;
  always?: boolean;
  /** Seconds for one full lap of the border. Default 3. */
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "style" | "className">) {
  return (
    <div
      className={cx("mo-sweep-border", className)}
      data-mo-always={always ? "true" : undefined}
      style={
        { "--mo-sweep-dur": `${speed}s`, ...style } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   FlipCard — front face flips to reveal the back on hover or focus.
   Keyboard accessible: it flips on focus too.
   ------------------------------------------------------------------------ */

export function FlipCard({
  front,
  back,
  /** "horizontal" spins around Y, "vertical" around X. Default horizontal. */
  axis = "horizontal",
  className,
  style,
}: {
  front: React.ReactNode;
  back: React.ReactNode;
  axis?: "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();
  const [flipped, setFlipped] = React.useState(false);

  const rotation = axis === "horizontal" ? "rotateY" : "rotateX";

  const face: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: "inherit",
  };

  if (reduced) {
    return (
      <div className={className} style={style}>
        {flipped ? back : front}
        <button
          type="button"
          onClick={() => setFlipped((v) => !v)}
          style={{ position: "absolute", inset: 0, opacity: 0 }}
          aria-label="Toggle card"
        />
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{ perspective: "1200px", position: "relative", ...style }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      tabIndex={0}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 680ms var(--mo-ease)",
          transform: flipped ? `${rotation}(180deg)` : "none",
        }}
      >
        <div style={face}>{front}</div>
        <div style={{ ...face, transform: `${rotation}(180deg)` }}>{back}</div>
      </div>
    </div>
  );
}
