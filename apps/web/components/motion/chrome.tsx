"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  cx,
  useIsTouch,
  useReducedMotion,
  useScrollProgress,
} from "./use-motion";

/* ============================================================================
   Site chrome — the persistent layer that makes the whole site feel like one
   moving piece. Mount these once, in app/layout.tsx.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   ScrollProgress — a hairline at the very top that fills as you read.
   ------------------------------------------------------------------------ */

export function ScrollProgress({
  height = 3,
  /** Any CSS colour. Defaults to --mo-accent, falling back to the text colour. */
  color = "var(--mo-accent, currentColor)",
  className,
}: {
  height?: number;
  color?: string;
  className?: string;
}) {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height,
        zIndex: 90,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          background: color,
          transformOrigin: "left center",
          transform: `scaleX(${progress})`,
          transition: "transform 90ms linear",
          boxShadow: `0 0 12px color-mix(in oklab, ${color} 55%, transparent)`,
        }}
      />
    </div>
  );
}

/* ---------------------------------------------------------------------------
   PageTransition — wrap {children} in app/layout.tsx and every route change
   fades and glides in instead of snapping.
   ------------------------------------------------------------------------ */

export function PageTransition({
  children,
  /** Milliseconds for the entry. Default 520. */
  duration = 520,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      data-mo-page=""
      className={className}
      style={{ ["--mo-page-dur" as string]: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   CustomCursor — a dot with a trailing ring that swells over anything
   clickable. Automatically disabled on touch devices and for reduced motion.

   Add `data-cursor="grow"` to any element you want to trigger the swell, or
   `data-cursor="hide"` to hide the cursor over it entirely.
   ------------------------------------------------------------------------ */

export function CustomCursor({
  size = 8,
  ringSize = 34,
  color = "var(--mo-accent, currentColor)",
}: {
  size?: number;
  ringSize?: number;
  color?: string;
}) {
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const disabled = reduced || touch;

  const dotRef = React.useRef<HTMLDivElement | null>(null);
  const ringRef = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);
  const [mode, setMode] = React.useState<"default" | "grow" | "hide">("default");
  // Mirrored in a ref so the animation loop reads it without restarting.
  const modeRef = React.useRef(mode);
  modeRef.current = mode;

  React.useEffect(() => {
    if (disabled) return;

    const target = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      setVisible(true);

      const el = event.target as HTMLElement | null;
      const flagged = el?.closest?.("[data-cursor]") as HTMLElement | null;
      if (flagged?.dataset.cursor === "hide") setMode("hide");
      else if (
        flagged?.dataset.cursor === "grow" ||
        el?.closest?.('a, button, [role="button"], input, textarea, select')
      )
        setMode("grow");
      else setMode("default");
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      // Lerp the ring toward the pointer for a soft trailing feel.
      ring.x += (target.x - ring.x) * 0.16;
      ring.y += (target.y - ring.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${modeRef.current === "grow" ? 1.9 : 1})`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [disabled]);

  if (disabled) return null;

  const opacity = !visible || mode === "hide" ? 0 : 1;

  const base: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
    pointerEvents: "none",
    borderRadius: 999,
    opacity,
    transition: "opacity 220ms var(--mo-ease-soft)",
    willChange: "transform",
  };

  return (
    <>
      <div
        aria-hidden="true"
        ref={dotRef}
        style={{ ...base, width: size, height: size, background: color }}
      />
      <div
        aria-hidden="true"
        ref={ringRef}
        style={{
          ...base,
          width: ringSize,
          height: ringSize,
          border: `1px solid color-mix(in oklab, ${color} 55%, transparent)`,
          background:
            mode === "grow"
              ? `color-mix(in oklab, ${color} 10%, transparent)`
              : "transparent",
          transition:
            "opacity 220ms var(--mo-ease-soft), background 220ms var(--mo-ease-soft)",
        }}
      />
    </>
  );
}

/* ---------------------------------------------------------------------------
   ScrollToTop — a floating button ringed by your reading progress.
   ------------------------------------------------------------------------ */

export function ScrollToTop({
  /** Show it once the page is this far scrolled, 0–1. Default 0.15. */
  after = 0.15,
  label = "Back to top",
  className,
}: {
  after?: number;
  label?: string;
  className?: string;
}) {
  const progress = useScrollProgress();
  const reduced = useReducedMotion();
  const shown = progress > after;

  const circumference = 2 * Math.PI * 20;

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() =>
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
      }
      className={cx("mo-lift", "mo-press", className)}
      style={{
        position: "fixed",
        right: "1.5rem",
        bottom: "1.5rem",
        zIndex: 80,
        width: 48,
        height: 48,
        display: "grid",
        placeItems: "center",
        borderRadius: 999,
        cursor: "pointer",
        // Defaults so the control is legible with no extra classes. Pass a
        // className with your own bg/border utilities to override.
        background: "color-mix(in oklab, canvas 86%, transparent)",
        border: "1px solid color-mix(in oklab, currentColor 14%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "var(--mo-accent, currentColor)",
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
        pointerEvents: shown ? "auto" : "none",
        transition:
          "opacity 320ms var(--mo-ease), transform 420ms var(--mo-ease-spring)",
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          style={{ transition: "stroke-dashoffset 90ms linear" }}
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

/* ---------------------------------------------------------------------------
   RouteLoader — a slim indeterminate bar that appears while a route change is
   in flight. Pair with React's useTransition, or just let it flash briefly on
   every navigation.
   ------------------------------------------------------------------------ */

export function RouteLoader({
  height = 3,
  color = "var(--mo-accent, currentColor)",
  /** Milliseconds the bar stays up after a route change. Default 700. */
  hold = 700,
}: {
  height?: number;
  color?: string;
  hold?: number;
}) {
  const pathname = usePathname();
  const [busy, setBusy] = React.useState(false);
  const first = React.useRef(true);

  React.useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setBusy(true);
    const timer = window.setTimeout(() => setBusy(false), hold);
    return () => window.clearTimeout(timer);
  }, [pathname, hold]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height,
        zIndex: 95,
        pointerEvents: "none",
        overflow: "hidden",
        opacity: busy ? 1 : 0,
        transition: "opacity 240ms var(--mo-ease-soft)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          background: color,
          animation: "mo-bar-indeterminate 900ms var(--mo-ease-soft) infinite",
        }}
      />
    </div>
  );
}

/* ---------------------------------------------------------------------------
   MotionProvider — one component that mounts the whole persistent layer.
   Drop it inside <body> in app/layout.tsx and you are done.
   ------------------------------------------------------------------------ */

export function MotionProvider({
  progress = true,
  cursor = true,
  toTop = true,
  routeLoader = false,
  className,
}: {
  progress?: boolean;
  cursor?: boolean;
  toTop?: boolean;
  routeLoader?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {progress && <ScrollProgress />}
      {routeLoader && <RouteLoader />}
      {cursor && <CustomCursor />}
      {toTop && <ScrollToTop />}
    </div>
  );
}
