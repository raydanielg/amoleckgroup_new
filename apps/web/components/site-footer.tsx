"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight, Clock, MessageCircle, ChevronRight } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/social-icons"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { siteConfig } from "@/lib/data"

const serviceLinks = [
  { label: "Medical Equipment", href: "/services/medical" },
  { label: "Physiotherapy Solutions", href: "/services/physiotherapy" },
  { label: "Healthcare Technology", href: "/services/technology" },
  { label: "Service & Maintenance", href: "/services/equipment" },
  { label: "All Services", href: "/services" },
]

const exploreLinks = [
  { label: "Equipment Catalogue", href: "/equipment" },
  { label: "Physiotherapy", href: "/physiotherapy" },
  { label: "Technology", href: "/technology" },
  { label: "About Us", href: "/about" },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-muted-foreground transition-all duration-300 hover:bg-primary/5 hover:pl-3 hover:text-primary"
    >
      <ChevronRight className="size-3.5 text-primary/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
      {children}
    </Link>
  )
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground after:mt-2 after:block after:h-px after:w-8 after:bg-primary">
      {children}
    </h3>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border bg-muted/30 text-foreground">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: "url('/images/gtte 8.jpg')" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-muted/60 via-muted/40 to-muted/60" aria-hidden />

      {/* Decorative side lines — zigzag waves */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-24 opacity-[0.07]"
        viewBox="0 0 60 800"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M30 0 Q 0 50 30 100 T 30 200 T 30 300 T 30 400 T 30 500 T 30 600 T 30 700 T 30 800"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        />
        <path
          d="M45 0 Q 15 50 45 100 T 45 200 T 45 300 T 45 400 T 45 500 T 45 600 T 45 700 T 45 800"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary"
        />
      </svg>
      <svg
        className="pointer-events-none absolute right-0 top-0 h-full w-24 opacity-[0.07]"
        viewBox="0 0 60 800"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M30 0 Q 60 50 30 100 T 30 200 T 30 300 T 30 400 T 30 500 T 30 600 T 30 700 T 30 800"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        />
        <path
          d="M15 0 Q 45 50 15 100 T 15 200 T 15 300 T 15 400 T 15 500 T 15 600 T 15 700 T 15 800"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary"
        />
      </svg>

      {/* CTA strip */}
      <div className="relative z-10 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <RevealOnScroll className="max-w-2xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                Replies within 2 working hours
              </span>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-4xl text-foreground">
                Let&apos;s equip your facility properly.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
                Tell us what you need — a single device, a full department fit-out, or a service contract for equipment you already own. You will get a written quote, not a sales call.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="w-full lg:w-auto">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/request-quote"
                  className={cn(buttonVariants({ size: "sm" }), "w-full rounded-md sm:w-auto")}
                >
                  Request a quote
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto sm:px-7 sm:py-3.5"
                >
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <RevealOnScroll>
              <Link href="/" className="inline-flex items-center gap-2.5">
                <img
                  src="/images/6iYLsnGOmFXtOs7YU30m01K6EB23zXr4DY8YPuCL-removebg-preview.png"
                  alt={siteConfig.name}
                  className="h-11 w-auto object-contain"
                />
              </Link>
            </RevealOnScroll>

            <RevealOnScroll delay={90}>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {siteConfig.description}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8">
                <Link href={siteConfig.social.facebook} className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Facebook">
                  <FacebookIcon className="size-4" />
                </Link>
                <Link href={siteConfig.social.instagram} className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Instagram">
                  <InstagramIcon className="size-4" />
                </Link>
                <Link href={siteConfig.social.linkedin} className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="LinkedIn">
                  <LinkedinIcon className="size-4" />
                </Link>
                <Link href={siteConfig.social.twitter} className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Twitter">
                  <TwitterIcon className="size-4" />
                </Link>
                <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="WhatsApp">
                  <MessageCircle className="size-4" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Services */}
          <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 lg:col-span-2">
            <RevealOnScroll>
              <ColumnHeading>Services</ColumnHeading>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <ul className="space-y-0.5">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          {/* Explore */}
          <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 lg:col-span-2">
            <RevealOnScroll>
              <ColumnHeading>Explore</ColumnHeading>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <ul className="space-y-0.5">
                {exploreLinks.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          {/* Contact */}
          <div className="col-span-2 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 lg:col-span-4">
            <RevealOnScroll>
              <ColumnHeading>Get in touch</ColumnHeading>
            </RevealOnScroll>

            <RevealOnScroll delay={160}>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="mt-0.5 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Phone className="size-4" />
                  </span>
                  <span>
                    <span className="block font-medium text-foreground">{siteConfig.phone}</span>
                    <span className="text-xs">Sales &amp; support</span>
                  </span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="mt-0.5 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Mail className="size-4" />
                  </span>
                  <span>
                    <span className="block font-medium text-foreground">{siteConfig.email}</span>
                    <span className="text-xs">General enquiries</span>
                  </span>
                </a>

                <div className="group flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-primary">
                    <MapPin className="size-4" />
                  </span>
                  <span>
                    <span className="block font-medium text-foreground">{siteConfig.location}</span>
                    <span className="text-xs">Service coverage nationwide</span>
                  </span>
                </div>

                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-primary">
                    <Clock className="size-4" />
                  </span>
                  <span className="text-xs">{siteConfig.hours}</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Watermark */}
      <div className="pointer-events-none select-none overflow-hidden leading-none">
        <span className="block translate-y-[0.12em] text-center text-[22vw] font-black tracking-tighter text-foreground/[0.03] lg:text-[16vw]">
          AMOLECK
        </span>
      </div>
    </footer>
  )
}

