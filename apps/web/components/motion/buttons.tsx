"use client";

import * as React from "react";
import { cx, useIsTouch, useReducedMotion } from "./use-motion";

/* ============================================================================
   Buttons and links with physical feedback.
   Each one renders whatever element you pass via `as` — a <button>, an <a>,
   or Next's <Link> — so your existing markup and styling carry over.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   MagneticButton — the control leans toward the cursor as it approaches, then
   springs back. Use sparingly: primary CTAs only.
   ------------------------------------------------------------------------ */

export function MagneticButton({
  children,
  /** How far the element may travel, in pixels. Default 12. */
  strength = 12,
  /** Pointer distance at which the pull begins, in pixels. Default 90. */
  radius = 90,
  as: Tag = "button",
  className,
  style,
  ...rest
}: {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
} & Record<string, unknown>) {
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const disabled = reduced || touch;

  const ref = React.useRef<HTMLElement | null>(null);
  const frame = React.useRef(0);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (disabled) return;

    const onMove = (event: PointerEvent) => {
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const cx0 = rect.left + rect.width / 2;
      const cy0 = rect.top + rect.height / 2;
      const dx = event.clientX - cx0;
      const dy = event.clientY - cy0;
      const distance = Math.hypot(dx, dy);
      const reach = radius + Math.max(rect.width, rect.height) / 2;

      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        if (distance > reach) {
          setOffset((prev) =>
            prev.x === 0 && prev.y === 0 ? prev : { x: 0, y: 0 },
          );
          return;
        }
        const pull = 1 - distance / reach;
        setOffset({
          x: (dx / reach) * strength * pull * 2,
          y: (dy / reach) * strength * pull * 2,
        });
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [disabled, radius, strength]);

  const settled = offset.x === 0 && offset.y === 0;

  return (
    <Tag
      ref={ref}
      className={cx("mo-press", className)}
      style={{
        display: "inline-flex",
        transform: disabled
          ? undefined
          : `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: settled
          ? "transform 620ms var(--mo-ease-spring)"
          : "transform 140ms var(--mo-ease-soft)",
        willChange: "transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   RippleButton — a material-style ripple blooms from the click point.
   ------------------------------------------------------------------------ */

type Ripple = { id: number; x: number; y: number; size: number };

export function RippleButton({
  children,
  as: Tag = "button",
  className,
  style,
  onPointerDown,
  ...rest
}: {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  onPointerDown?: (event: React.PointerEvent<HTMLElement>) => void;
} & Record<string, unknown>) {
  const reduced = useReducedMotion();
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const nextId = React.useRef(0);

  const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    onPointerDown?.(event);
    if (reduced) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const id = nextId.current++;

    setRipples((prev) => [
      ...prev,
      {
        id,
        size,
        x: event.clientX - rect.left - size / 2,
        y: event.clientY - rect.top - size / 2,
      },
    ]);

    window.setTimeout(
      () => setRipples((prev) => prev.filter((r) => r.id !== id)),
      640,
    );
  };

  return (
    <Tag
      onPointerDown={handlePointerDown}
      className={cx("mo-press", className)}
      style={{ position: "relative", overflow: "hidden", ...style }}
      {...rest}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          aria-hidden="true"
          className="mo-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   ShimmerButton — a light sweeps across the surface on a loop, and faster on
   hover. Good for the single most important CTA on a page.
   ------------------------------------------------------------------------ */

export function ShimmerButton({
  children,
  speed = 2.6,
  as: Tag = "button",
  className,
  style,
  ...rest
}: {
  children: React.ReactNode;
  /** Seconds per sweep. Default 2.6. */
  speed?: number;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
} & Record<string, unknown>) {
  return (
    <Tag
      className={cx("mo-shimmer-surface", "mo-lift", "mo-press", className)}
      style={
        {
          "--mo-shimmer-dur": `${speed}s`,
          position: "relative",
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {/* Inline-flex so the button's own gap and alignment still reach the
          children — otherwise an icon beside a label drops to a second line. */}
      <span
        style={{
          position: "relative",
          zIndex: 1,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "inherit",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   ArrowLink — text plus an arrow that slides forward on hover.
   Pass your own arrow, or let it draw the default one.
   ------------------------------------------------------------------------ */

export function ArrowLink({
  children,
  icon,
  as: Tag = "a",
  className,
  ...rest
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  as?: React.ElementType;
  className?: string;
} & Record<string, unknown>) {
  return (
    <Tag className={cx("mo-arrow", "mo-underline", className)} {...rest}>
      <span>{children}</span>
      <span data-mo-arrow="" aria-hidden="true">
        {icon ?? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </span>
    </Tag>
  );
}
