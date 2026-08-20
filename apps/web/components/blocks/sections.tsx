"use client";

import * as React from "react";
import Link from "next/link";
import {
  AuroraBackground,
  BeamField,
  Counter,
  GridBackground,
  Marquee,
  Parallax,
  ParticleField,
  Reveal,
  ScrollScale,
  SectionGlow,
  ShimmerButton,
  SpotlightCard,
  Stagger,
  TextReveal,
  TiltCard,
  Typewriter,
  cx,
} from "@/components/motion";

/* ============================================================================
   Section blocks.

   Opinionated, animated, drop-in sections built on the motion kit. Each one
   takes plain props, so you can feed them from lib/data.ts and reuse the same
   block on several pages.

   They style themselves entirely from your theme tokens — bg-background,
   text-muted-foreground, border-border, bg-primary — so they inherit your
   palette rather than introducing one.
   ========================================================================== */

/* -------------------------------------------------------------------------
   Section — the shell. Handles the container, the ambient background, and
   the vertical rhythm so every section on the site lines up.
   ---------------------------------------------------------------------- */

export type SectionBackground =
  | "none"
  | "aurora"
  | "grid"
  | "beams"
  | "particles"
  | "glow";

export function Section({
  children,
  background = "none",
  muted = false,
  id,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  background?: SectionBackground;
  /** Use the muted surface colour instead of the page background. */
  muted?: boolean;
  id?: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cx(
        "relative overflow-hidden py-20 lg:py-28",
        muted ? "bg-muted/30" : "bg-background",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 text-primary">
        {background === "aurora" && <AuroraBackground intensity={0.16} />}
        {background === "grid" && <GridBackground intensity={0.09} />}
        {background === "beams" && (
          <>
            <GridBackground intensity={0.06} />
            <BeamField count={7} intensity={0.12} />
          </>
        )}
        {background === "particles" && <ParticleField count={20} />}
        {background === "glow" && <SectionGlow y="10%" intensity={0.15} />}
      </div>

      <div
        className={cx(
          "relative z-10 mx-auto max-w-7xl px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   SectionHeading — eyebrow, animated title, supporting line.
   ---------------------------------------------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal direction="down">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        <TextReveal text={title} by="word" step={52} />
      </h2>

      {description && (
        <Reveal delay={340}>
          <p
            className={cx(
              "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
              align === "center" && "mx-auto max-w-2xl",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------
   Hero
   ---------------------------------------------------------------------- */

export function Hero({
  badge,
  title,
  /** Words that cycle in the sub-headline, e.g. ["hospitals", "clinics"]. */
  rotatingWords,
  descriptionBefore,
  descriptionAfter,
  primaryCta,
  secondaryCta,
  media,
}: {
  badge?: string;
  title: string;
  rotatingWords?: string[];
  descriptionBefore?: string;
  descriptionAfter?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Anything visual — an <Image>, an illustration, a stat card. */
  media?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 text-primary">
        <AuroraBackground intensity={0.2} />
        <ParticleField count={24} />
        <GridBackground intensity={0.05} size={56} />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div>
          {badge && (
            <Reveal direction="down" duration={700}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur">
                <span className="mo-live-dot text-primary" />
                {badge}
              </span>
            </Reveal>
          )}

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            <TextReveal text={title} by="word" step={62} duration={780} />
          </h1>

          {(descriptionBefore || rotatingWords) && (
            <Reveal delay={420}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {descriptionBefore}{" "}
                {rotatingWords && rotatingWords.length > 0 && (
                  <span className="font-semibold text-primary">
                    <Typewriter words={rotatingWords} />
                  </span>
                )}{" "}
                {descriptionAfter}
              </p>
            </Reveal>
          )}

          {(primaryCta || secondaryCta) && (
            <Reveal delay={560} direction="zoom">
              <div className="mt-9 flex flex-wrap gap-3">
                {primaryCta && (
                  <ShimmerButton
                    as={Link}
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg"
                  >
                    {primaryCta.label}
                  </ShimmerButton>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="mo-lift inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </Reveal>
          )}
        </div>

        {media && (
          <Reveal delay={300} direction="left" distance={44}>
            <Parallax speed={0.14}>
              <ScrollScale from={0.94}>{media}</ScrollScale>
            </Parallax>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   StatsBand — animated counters.
   ---------------------------------------------------------------------- */

export function StatsBand({
  stats,
  muted = true,
}: {
  stats: Array<{
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    decimals?: number;
  }>;
  muted?: boolean;
}) {
  return (
    <Section muted={muted} background="glow" className="py-16 lg:py-20">
      <Stagger
        step={130}
        className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl font-semibold tabular-nums tracking-tight text-primary lg:text-5xl">
              <Counter
                to={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </Stagger>
    </Section>
  );
}

/* -------------------------------------------------------------------------
   FeatureGrid — service / equipment cards.
   Three or fewer get the 3D tilt; larger grids use the cheaper spotlight.
   ---------------------------------------------------------------------- */

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: Array<{
    title: string;
    description: string;
    href?: string;
    icon?: React.ReactNode;
    tag?: string;
  }>;
  columns?: 2 | 3 | 4;
}) {
  const useTilt = items.length <= 3;

  const columnClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Stagger step={95} className={cx("grid gap-6", columnClass)}>
      {items.map((item) => {
        const Card = useTilt ? TiltCard : SpotlightCard;

        const inner = (
          <Card className="mo-lift group h-full rounded-2xl border border-border bg-background/70 p-7 backdrop-blur transition-colors hover:border-primary/40">
            {item.icon && (
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
            )}

            {item.tag && (
              <span className="mb-3 inline-block rounded-full bg-muted px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                {item.tag}
              </span>
            )}

            <h3 className="text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>

            {item.href && (
              <span className="mo-arrow mt-5 inline-flex text-sm font-semibold text-primary">
                Learn more
                <span data-mo-arrow="" aria-hidden="true">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </span>
            )}
          </Card>
        );

        return item.href ? (
          <Link key={item.title} href={item.href} className="block h-full">
            {inner}
          </Link>
        ) : (
          <div key={item.title} className="h-full">
            {inner}
          </div>
        );
      })}
    </Stagger>
  );
}

/* -------------------------------------------------------------------------
   ProcessSteps — numbered steps with a line that draws itself.
   ---------------------------------------------------------------------- */

export function ProcessSteps({
  steps,
}: {
  steps: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="relative">
      {/* The spine. Hidden on mobile where the steps stack. */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in oklab, currentColor 18%, transparent) 12%, color-mix(in oklab, currentColor 18%, transparent) 88%, transparent)",
        }}
      />

      <ol className="space-y-10 lg:space-y-0">
        {steps.map((step, index) => (
          <li key={step.title}>
            <Reveal
              direction={index % 2 === 0 ? "right" : "left"}
              distance={40}
              delay={index * 60}
            >
              <div
                className={cx(
                  "relative lg:flex lg:items-center lg:gap-12",
                  index % 2 === 1 && "lg:flex-row-reverse",
                )}
              >
                <div className="lg:w-1/2">
                  <div
                    className={cx(
                      "mo-lift rounded-2xl border border-border bg-background/70 p-7 backdrop-blur",
                      index % 2 === 0 ? "lg:text-right" : "",
                    )}
                  >
                    <span className="text-5xl font-semibold tabular-nums text-primary/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Node on the spine */}
                <span className="absolute left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background lg:block" />

                <div className="hidden lg:block lg:w-1/2" />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* -------------------------------------------------------------------------
   LogoWall — a scrolling band of partner or manufacturer names/logos.
   ---------------------------------------------------------------------- */

export function LogoWall({
  items,
  title,
}: {
  /** Strings, or <Image> elements if you have real logos. */
  items: React.ReactNode[];
  title?: string;
}) {
  return (
    <Section muted className="py-14 lg:py-16">
      {title && (
        <Reveal>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {title}
          </p>
        </Reveal>
      )}

      <Marquee speed={32} gap={64}>
        {items.map((item, index) => (
          <span
            key={index}
            className="mo-lift inline-flex items-center whitespace-nowrap text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </Section>
  );
}

/* -------------------------------------------------------------------------
   FAQ — an accordion that animates its height properly.
   ---------------------------------------------------------------------- */

export function FAQ({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <Stagger step={70} className="mx-auto max-w-3xl space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div
            key={item.question}
            className={cx(
              "overflow-hidden rounded-2xl border transition-colors duration-300",
              isOpen ? "border-primary/40 bg-muted/40" : "border-border",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="text-base font-medium">{item.question}</span>
              <span
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform duration-400"
                style={{ transform: isOpen ? "rotate(135deg)" : "none" }}
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>

            <div
              className="grid transition-all duration-500"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
                transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Stagger>
  );
}

/* -------------------------------------------------------------------------
   TestimonialWall — real quotes only. Delete the section rather than
   inventing one.
   ---------------------------------------------------------------------- */

export function TestimonialWall({
  items,
}: {
  items: Array<{ quote: string; name: string; role: string; facility?: string }>;
}) {
  return (
    <Stagger step={110} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <SpotlightCard
          key={item.name}
          className="mo-lift flex h-full flex-col rounded-2xl border border-border bg-background/70 p-7 backdrop-blur"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 text-primary/25"
            aria-hidden="true"
          >
            <path d="M7 7h4v4a4 4 0 0 1-4 4H6v-2h1a2 2 0 0 0 2-2H7zm8 0h4v4a4 4 0 0 1-4 4h-1v-2h1a2 2 0 0 0 2-2h-2z" />
          </svg>

          <blockquote className="flex-1 text-sm leading-relaxed">
            {item.quote}
          </blockquote>

          <figcaption className="mt-6 border-t border-border pt-4">
            <span className="block text-sm font-semibold">{item.name}</span>
            <span className="block text-xs text-muted-foreground">
              {item.role}
              {item.facility ? ` · ${item.facility}` : ""}
            </span>
          </figcaption>
        </SpotlightCard>
      ))}
    </Stagger>
  );
}

/* -------------------------------------------------------------------------
   CTABand — the closer. Put one at the bottom of every page.
   ---------------------------------------------------------------------- */

export function CTABand({
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <Section background="aurora" className="py-20 lg:py-24">
      <div className="mo-sweep-border relative overflow-hidden rounded-3xl border border-border bg-background/70 p-10 text-center backdrop-blur lg:p-16">
        <div className="pointer-events-none absolute inset-0 text-primary">
          <SectionGlow y="30%" intensity={0.18} />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <TextReveal text={title} by="word" step={54} />
          </h2>

          {description && (
            <Reveal delay={320}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </Reveal>
          )}

          <Reveal delay={460} direction="zoom">
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ShimmerButton
                as={Link}
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg"
              >
                {primaryCta.label}
              </ShimmerButton>

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="mo-lift inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
