"use client";

import * as React from "react";
import { cx, useInView, useReducedMotion } from "./use-motion";

/* ============================================================================
   Scroll reveals — the backbone of the whole site.
   Wrap anything. It fades and glides into place the moment it enters view,
   and never animates again.
   ========================================================================== */

export type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "none"
  | "zoom"
  | "zoom-out";

export type RevealProps = {
  children: React.ReactNode;
  /** Which way the element travels in from. Default "up". */
  direction?: RevealDirection;
  /** Travel distance in pixels. Default 34. */
  distance?: number;
  /** Milliseconds to wait before starting. Default 0. */
  delay?: number;
  /** Milliseconds the transition runs for. Default 620. */
  duration?: number;
  /** Blur-in amount in pixels. 0 disables it. Default 0. */
  blur?: number;
  /** Degrees of rotation to unwind on entry. Default 0. */
  rotate?: number;
  /** Replay every time the element re-enters view. Default false. */
  repeat?: boolean;
  /** Visibility fraction that triggers the reveal. Default 0.15. */
  threshold?: number;
  /** Render as a different element or component. Default "div". */
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "style" | "className">;

function offsetsFor(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "up":
      return { x: "0px", y: `${distance}px`, s: 1 };
    case "down":
      return { x: "0px", y: `${-distance}px`, s: 1 };
    case "left":
      return { x: `${distance}px`, y: "0px", s: 1 };
    case "right":
      return { x: `${-distance}px`, y: "0px", s: 1 };
    case "zoom":
      return { x: "0px", y: "0px", s: 0.9 };
    case "zoom-out":
      return { x: "0px", y: "0px", s: 1.08 };
    default:
      return { x: "0px", y: "0px", s: 1 };
  }
}

export function Reveal({
  children,
  direction = "up",
  distance = 34,
  delay = 0,
  duration = 620,
  blur = 0,
  rotate = 0,
  repeat = false,
  threshold = 0.15,
  as: Tag = "div",
  className,
  style,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLElement>({
    once: !repeat,
    threshold,
    disabled: reduced,
  });
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (!inView || repeat) return;
    const timer = window.setTimeout(() => setDone(true), delay + duration + 60);
    return () => window.clearTimeout(timer);
  }, [inView, repeat, delay, duration]);

  const { x, y, s } = offsetsFor(direction, distance);

  return (
    <Tag
      ref={ref}
      data-mo-reveal=""
      data-mo-in={inView ? "true" : "false"}
      data-mo-done={done ? "true" : undefined}
      className={className}
      style={
        {
          "--mo-x": x,
          "--mo-y": y,
          "--mo-s": s,
          "--mo-r": `${rotate}deg`,
          "--mo-blur": `${blur}px`,
          "--mo-delay": `${delay}ms`,
          "--mo-d": `${duration}ms`,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   Stagger — reveal a list of children one after another.
   Each direct child is wrapped in its own <Reveal> with a growing delay.
   ------------------------------------------------------------------------ */

export type StaggerProps = {
  children: React.ReactNode;
  /** Milliseconds between each child. Default 90. */
  step?: number;
  /** Milliseconds before the first child. Default 0. */
  delay?: number;
  /** Largest delay any child may receive, so long lists stay snappy. */
  maxDelay?: number;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  blur?: number;
  as?: React.ElementType;
  /** Element type used to wrap each child. Default "div". */
  itemAs?: React.ElementType;
  itemClassName?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function Stagger({
  children,
  step = 90,
  delay = 0,
  maxDelay = 900,
  direction = "up",
  distance = 28,
  duration = 620,
  blur = 0,
  as: Tag = "div",
  itemAs = "div",
  itemClassName,
  className,
  style,
}: StaggerProps) {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <Tag className={className} style={style}>
      {items.map((child, index) => (
        <Reveal
          key={(child as React.ReactElement)?.key ?? index}
          as={itemAs}
          className={itemClassName}
          direction={direction}
          distance={distance}
          duration={duration}
          blur={blur}
          delay={Math.min(maxDelay, delay + index * step)}
        >
          {child}
        </Reveal>
      ))}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   InViewFlag — for when you want the visibility state but need to render the
   markup yourself.

     <InViewFlag>{(inView) => <Chart animate={inView} />}</InViewFlag>
   ------------------------------------------------------------------------ */

export function InViewFlag({
  children,
  threshold = 0.2,
  repeat = false,
  className,
}: {
  children: (inView: boolean) => React.ReactNode;
  threshold?: number;
  repeat?: boolean;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold,
    once: !repeat,
  });
  return (
    <div ref={ref} className={className}>
      {children(inView)}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   AnimatedDivider — a hairline that draws itself across the section.
   ------------------------------------------------------------------------ */

export function AnimatedDivider({
  className,
  thickness = 1,
}: {
  className?: string;
  thickness?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={cx("mo-divider", className)}
      style={{
        height: thickness,
        transform: `scaleX(${inView ? 1 : 0})`,
        transformOrigin: "left center",
        transition: "transform 900ms var(--mo-ease)",
      }}
    />
  );
}
