"use client";

import * as React from "react";
import { cx, useInView, useReducedMotion } from "./use-motion";

/* ============================================================================
   Text effects — headings that arrive word by word, typewriters, shine sweeps.
   ========================================================================== */

export type TextRevealProps = {
  /** The text to animate. Plain strings only — it gets split up. */
  text: string;
  /** Animate each word, or each individual character. Default "word". */
  by?: "word" | "char";
  /** Milliseconds between units. Default 55 for words, 22 for characters. */
  step?: number;
  /** Milliseconds before the first unit. Default 0. */
  delay?: number;
  /** Milliseconds each unit takes. Default 700. */
  duration?: number;
  /** Units rise from below by default; "fade" keeps them in place. */
  variant?: "rise" | "fade" | "tilt";
  /** Clip each unit so it emerges from nothing. Default true for "rise". */
  clip?: boolean;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
};

export function TextReveal({
  text,
  by = "word",
  step,
  delay = 0,
  duration = 700,
  variant = "rise",
  clip,
  as: Tag = "span",
  className,
  style,
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.25,
    disabled: reduced,
  });

  const gap = step ?? (by === "char" ? 22 : 55);
  const shouldClip = clip ?? variant === "rise";

  const units = React.useMemo(
    () => (by === "char" ? Array.from(text) : text.split(/(\s+)/)),
    [text, by],
  );

  if (reduced) {
    return (
      <Tag className={className} style={style}>
        {text}
      </Tag>
    );
  }

  let animatedIndex = -1;

  return (
    <Tag
      ref={ref}
      data-mo-in={inView ? "true" : "false"}
      className={className}
      style={style}
      aria-label={text}
    >
      {units.map((unit, index) => {
        // Whitespace passes through untouched so line-breaking still works.
        if (/^\s+$/.test(unit)) {
          return <React.Fragment key={index}>{unit}</React.Fragment>;
        }

        animatedIndex += 1;

        const inner = (
          <span
            className={by === "char" ? "mo-char" : "mo-word"}
            aria-hidden="true"
            style={
              {
                "--mo-delay": `${delay + animatedIndex * gap}ms`,
                "--mo-word-dur": `${duration}ms`,
                "--mo-word-y": variant === "fade" ? "0em" : "0.72em",
                "--mo-word-r": variant === "tilt" ? "6deg" : "0deg",
              } as React.CSSProperties
            }
          >
            {unit}
          </span>
        );

        return shouldClip ? (
          <span key={index} className="mo-word-clip" aria-hidden="true">
            {inner}
          </span>
        ) : (
          <React.Fragment key={index}>{inner}</React.Fragment>
        );
      })}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   Typewriter — cycles through phrases, typing and deleting.
   ------------------------------------------------------------------------ */

export function Typewriter({
  words,
  typeSpeed = 70,
  deleteSpeed = 38,
  holdTime = 1700,
  loop = true,
  className,
}: {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
  loop?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (reduced || words.length === 0) return;

    const current = words[index % words.length] ?? "";

    if (!deleting && text === current) {
      if (!loop && index === words.length - 1) return;
      const hold = window.setTimeout(() => setDeleting(true), holdTime);
      return () => window.clearTimeout(hold);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const tick = window.setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deleteSpeed : typeSpeed,
    );

    return () => window.clearTimeout(tick);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, holdTime, loop, reduced]);

  if (reduced) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={cx("mo-caret", className)} aria-live="polite">
      {text}
    </span>
  );
}

/* ---------------------------------------------------------------------------
   ShinyText — a highlight sweeps across the letters. Keeps your text colour.
   ------------------------------------------------------------------------ */

export function ShinyText({
  children,
  duration = 4.5,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cx("mo-shine", className)}
      style={{ ["--mo-shine-dur" as string]: `${duration}s` }}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   GradientText — pass your own two brand colours, or leave them out and it
   animates within the inherited colour.
   ------------------------------------------------------------------------ */

export function GradientText({
  children,
  from,
  to,
  duration = 8,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  from?: string;
  to?: string;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cx("mo-gradient-text", className)}
      style={
        {
          "--mo-grad-a": from,
          "--mo-grad-b": to,
          "--mo-grad-dur": `${duration}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   Counter — an animated statistic. Starts when it scrolls into view.
   ------------------------------------------------------------------------ */

export function Counter({
  to,
  from = 0,
  duration = 1800,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  className,
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Thousands separator. Pass "" to disable. Default ",". */
  separator?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [value, setValue] = React.useState(from);

  React.useEffect(() => {
    if (!inView) return;

    if (reduced || duration <= 0) {
      setValue(to);
      return;
    }

    let frame = 0;
    let startedAt: number | null = null;
    const factor = 10 ** decimals;

    const tick = (now: number) => {
      if (startedAt === null) startedAt = now;
      const t = Math.min(1, (now - startedAt) / duration);
      const eased = t === 1 ? 1 : 1 - 2 ** (-10 * t);
      setValue(Math.round((from + (to - from) * eased) * factor) / factor);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, from, duration, decimals, reduced]);

  const formatted = React.useMemo(() => {
    const fixed = value.toFixed(decimals);
    if (!separator) return fixed;
    const [whole, fraction] = fixed.split(".");
    const grouped = (whole ?? "").replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return fraction ? `${grouped}.${fraction}` : grouped;
  }, [value, decimals, separator]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
