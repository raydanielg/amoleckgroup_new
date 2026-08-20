"use client";

import * as React from "react";

/* ============================================================================
   Shared hooks for the motion kit.
   Every hook is SSR-safe and degrades to "no motion" when the user has asked
   their operating system to reduce motion.
   ========================================================================== */

/** True once the component has hydrated on the client. */
export function useHasMounted(): boolean {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return mounted;
}

/** Tracks the `prefers-reduced-motion` media query, live. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}

export type InViewOptions = {
  /** Fraction of the element that must be visible. Default 0.15. */
  threshold?: number | number[];
  /** Extra margin around the viewport. Default "0px 0px -12% 0px". */
  rootMargin?: string;
  /** Stop observing after the first entry. Default true. */
  once?: boolean;
  /** Skip observation entirely and report visible immediately. */
  disabled?: boolean;
};

/**
 * Reports whether the referenced element is in the viewport.
 *
 *   const { ref, inView } = useInView<HTMLDivElement>();
 *   return <div ref={ref} data-mo-in={inView} />;
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options: InViewOptions = {},
) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -12% 0px",
    once = true,
    disabled = false,
  } = options;

  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;

    if (disabled || !node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
    // `threshold` may be an array; stringify so the effect is stable.
  }, [disabled, once, rootMargin, JSON.stringify(threshold)]);

  return { ref, inView };
}

/** Page scroll progress from 0 to 1, updated on an animation frame. */
export function useScrollProgress(): number {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}

/** Current window.scrollY, rAF-throttled. */
export function useScrollY(): number {
  const [y, setY] = React.useState(0);

  React.useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setY(window.scrollY);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return y;
}

/**
 * True once the page has been scrolled past `offset` pixels.
 * Handy for shrinking / frosting a sticky navbar.
 */
export function useScrolled(offset = 24): boolean {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > offset);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [offset]);

  return scrolled;
}

/**
 * Scroll direction, so a navbar can hide on the way down and return on the
 * way up. Returns "up" until the user has scrolled past `threshold`.
 */
export function useScrollDirection(threshold = 80): "up" | "down" {
  const [direction, setDirection] = React.useState<"up" | "down">("up");
  const last = React.useRef(0);

  React.useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const y = window.scrollY;
      if (Math.abs(y - last.current) < 6) return;
      setDirection(y > last.current && y > threshold ? "down" : "up");
      last.current = y;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    last.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return direction;
}

/**
 * How far an element has travelled through the viewport, from 0 (its top edge
 * is entering at the bottom) to 1 (its bottom edge is leaving at the top).
 * This is what drives <Parallax> and <ScrollScale>.
 */
export function useElementScrollProgress<T extends HTMLElement = HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const [progress, setProgress] = React.useState(0.5);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const total = window.innerHeight + rect.height;
      if (total <= 0) return;
      const travelled = window.innerHeight - rect.top;
      setProgress(Math.min(1, Math.max(0, travelled / total)));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, progress };
}

/**
 * Eases a number from 0 to `end` once the element scrolls into view.
 * Used by <Counter>.
 */
export function useCountUp(
  end: number,
  {
    duration = 1800,
    start = 0,
    decimals = 0,
    enabled = true,
  }: {
    duration?: number;
    start?: number;
    decimals?: number;
    enabled?: boolean;
  } = {},
): number {
  const [value, setValue] = React.useState(start);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (!enabled) return;

    if (reduced || duration <= 0) {
      setValue(end);
      return;
    }

    let frame = 0;
    let startedAt: number | null = null;
    const factor = 10 ** decimals;

    const tick = (now: number) => {
      if (startedAt === null) startedAt = now;
      const elapsed = now - startedAt;
      const t = Math.min(1, elapsed / duration);
      // easeOutExpo — fast out of the gate, gentle landing.
      const eased = t === 1 ? 1 : 1 - 2 ** (-10 * t);
      setValue(Math.round((start + (end - start) * eased) * factor) / factor);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start, decimals, enabled, reduced]);

  return value;
}

/**
 * Pointer position inside an element, as 0–1 fractions plus pixel values.
 * Returns null while the pointer is outside.
 */
export function usePointerInside<T extends HTMLElement = HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const [pointer, setPointer] = React.useState<{
    x: number;
    y: number;
    fx: number;
    fy: number;
  } | null>(null);

  const onPointerMove = React.useCallback((event: React.PointerEvent<T>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setPointer({
      x,
      y,
      fx: rect.width ? x / rect.width : 0.5,
      fy: rect.height ? y / rect.height : 0.5,
    });
  }, []);

  const onPointerLeave = React.useCallback(() => setPointer(null), []);

  return { ref, pointer, onPointerMove, onPointerLeave };
}

/** True on devices whose primary pointer is coarse (phones, tablets). */
export function useIsTouch(): boolean {
  const [touch, setTouch] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const sync = () => setTouch(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return touch;
}

/** Small class-name joiner so the kit stays dependency-free. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
