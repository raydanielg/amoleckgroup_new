"use client";

import * as React from "react";
import Link from "next/link";
import {
  AnimatedDivider,
  Counter,
  ParticleField,
  Reveal,
  SectionGlow,
  ShimmerButton,
  Stagger,
  TextReveal,
  TickerStrip,
} from "@/components/motion";
import { site } from "@/lib/site-config";

/* ============================================================================
   SiteFooter

   A four-part footer:
     1. A closing call to action, so the page never dead-ends.
     2. A scrolling strip of value propositions.
     3. Brand, navigation, and contact details in four columns.
     4. A quiet bottom bar with legal links.

   Styling uses your existing theme tokens (bg-background, text-muted-foreground,
   border-border, text-primary), so it inherits whatever palette you already
   have — light and dark both.
   ========================================================================== */

/* --- Icons. Inline SVG so there is no icon-library dependency. ------------ */

const icons: Record<string, React.ReactNode> = {
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  x: <path d="M4 4l16 16M20 4L4 20" />,
  whatsapp: (
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-5.2A8.5 8.5 0 1 1 21 11.5z" />
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

function Icon({
  name,
  size = 18,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {icons[name]}
    </svg>
  );
}

/* --- A footer link with the animated underline. --------------------------- */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="mo-underline group inline-flex items-center gap-1.5 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />
      {children}
    </Link>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
      {children}
    </h3>
  );
}

/* ========================================================================== */

export function SiteFooter() {
  const year = new Date().getFullYear();
  const yearsActive = Math.max(1, year - site.foundedYear);

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background text-foreground">
      {/* Ambient layer — decorative only, sits behind everything. */}
      <div className="pointer-events-none absolute inset-0 text-primary">
        <SectionGlow x="18%" y="0%" size={720} intensity={0.13} />
        <ParticleField count={16} intensity={0.28} />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 1. Closing call to action                                           */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Reveal direction="down" duration={700}>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                  <span className="mo-live-dot text-primary" />
                  Replies within 2 working hours
                </span>
              </Reveal>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                <TextReveal
                  text="Let's equip your facility properly."
                  by="word"
                  step={58}
                />
              </h2>

              <Reveal delay={380}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Tell us what you need — a single device, a full department
                  fit-out, or a service contract for equipment you already own.
                  You will get a written quote, not a sales call.
                </p>
              </Reveal>
            </div>

            <Reveal delay={520} direction="zoom" className="w-full lg:w-auto">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <ShimmerButton
                  as={Link}
                  href="/request-quote"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg"
                >
                  Request a quote
                  <Icon name="arrow" size={16} />
                </ShimmerButton>

                <a
                  href={site.contact.phoneHref}
                  className="mo-lift inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon name="phone" size={16} />
                  {site.contact.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. Value-proposition ticker                                         */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 border-b border-border bg-muted/30 py-4 text-muted-foreground">
        <TickerStrip
          items={[...site.ticker]}
          speed={40}
          itemClassName="text-xs font-medium uppercase tracking-[0.18em]"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 3. Main columns                                                     */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand ------------------------------------------------------- */}
          <div className="lg:col-span-4">
            <Reveal>
              <Link href="/" className="inline-flex items-center gap-2.5">
                {/* Swap this mark for your real logo. */}
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                  A
                </span>
                <span className="text-lg font-semibold tracking-tight">
                  {site.name}
                </span>
              </Link>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {site.tagline}
              </p>
            </Reveal>

            {/* Two quiet numbers that build confidence. */}
            <Reveal delay={180}>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-2xl font-semibold tabular-nums">
                    <Counter to={yearsActive} suffix="+" />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    Years serving Tanzania
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold tabular-nums">
                    <Counter to={500} suffix="+" />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    Installations
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Social ------------------------------------------------------ */}
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {site.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="mo-lift grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon name={item.icon} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Services ---------------------------------------------------- */}
          <div className="lg:col-span-2">
            <Reveal>
              <ColumnHeading>Services</ColumnHeading>
            </Reveal>
            <Stagger step={60} as="ul" itemAs="li" className="space-y-0.5">
              {site.nav.services.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </Stagger>
          </div>

          {/* Explore ----------------------------------------------------- */}
          <div className="lg:col-span-2">
            <Reveal>
              <ColumnHeading>Explore</ColumnHeading>
            </Reveal>
            <Stagger step={60} delay={80} as="ul" itemAs="li" className="space-y-0.5">
              {site.nav.explore.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </Stagger>
          </div>

          {/* Contact ----------------------------------------------------- */}
          <div className="lg:col-span-4">
            <Reveal>
              <ColumnHeading>Get in touch</ColumnHeading>
            </Reveal>

            <Stagger step={80} className="space-y-4">
              <a
                href={site.contact.phoneHref}
                className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="mt-0.5 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon name="phone" />
                </span>
                <span>
                  <span className="block font-medium text-foreground">
                    {site.contact.phone}
                  </span>
                  <span className="text-xs">Sales &amp; support</span>
                </span>
              </a>

              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="mt-0.5 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon name="mail" />
                </span>
                <span>
                  <span className="block font-medium text-foreground">
                    {site.contact.email}
                  </span>
                  <span className="text-xs">General enquiries</span>
                </span>
              </a>

              <a
                href={site.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="mt-0.5 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon name="pin" />
                </span>
                <span>
                  <span className="block font-medium text-foreground">
                    {site.contact.address.line1}
                  </span>
                  <span className="text-xs">
                    {site.contact.address.line2}, {site.contact.address.country}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 text-primary">
                  <Icon name="clock" />
                </span>
                <ul className="space-y-1">
                  {site.contact.hours.map((slot) => (
                    <li key={slot.days} className="flex gap-2 text-xs">
                      <span className="w-32 shrink-0 font-medium text-foreground">
                        {slot.days}
                      </span>
                      <span>{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Stagger>
          </div>
        </div>

        {/* Credentials --------------------------------------------------- */}
        <AnimatedDivider className="my-12" />

        <Stagger
          step={80}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {site.credentials.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
            >
              <span className="text-primary">
                <Icon name="check" size={14} />
              </span>
              {item}
            </span>
          ))}
        </Stagger>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 4. Bottom bar                                                       */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>

          <nav className="flex items-center gap-6">
            {site.nav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mo-underline transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mo-underline transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
