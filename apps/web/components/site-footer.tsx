"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight, Clock, MessageCircle } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/social-icons"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { siteConfig, navLinks, services as serviceData, tickerItems } from "@/lib/data"

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
  { label: "Insights & Blog", href: "/blog" },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 py-1 text-sm text-brand-cream/60 transition-colors hover:text-brand-cream"
    >
      <span className="h-px w-0 bg-brand-teal transition-all duration-300 group-hover:w-3" />
      {children}
    </Link>
  )
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cream">
      {children}
    </h3>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-brand-cream/8 bg-brand-ink text-brand-cream">
      {/* CTA strip */}
      <div className="relative z-10 border-b border-brand-cream/8">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <RevealOnScroll className="max-w-2xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-cream/15 px-3.5 py-1.5 text-xs font-medium text-brand-cream/60">
                <span className="size-1.5 rounded-full bg-brand-teal" />
                Replies within 2 working hours
              </span>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-brand-cream">
                Let&apos;s equip your facility properly.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-cream/50">
                Tell us what you need — a single device, a full department fit-out, or a service contract for equipment you already own. You will get a written quote, not a sales call.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="w-full lg:w-auto">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/request-quote"
                  className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
                >
                  Request a quote
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-brand-cream/20 px-7 py-3.5 text-sm font-semibold text-brand-cream transition-colors hover:border-brand-teal hover:text-brand-teal"
                >
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Ticker strip */}
      <div className="relative z-10 border-b border-brand-cream/8 bg-brand-cream/[0.02] py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 sm:px-6 lg:px-8">
          {tickerItems.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-cream/40"
            >
              <span className="size-1 rounded-full bg-brand-teal/60" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main columns */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <RevealOnScroll>
              <Link href="/" className="inline-flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                  A
                </span>
                <span className="text-lg font-semibold tracking-tight text-brand-cream">
                  {siteConfig.name}
                </span>
              </Link>
            </RevealOnScroll>

            <RevealOnScroll delay={90}>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-cream/50">
                {siteConfig.description}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <Link href={siteConfig.social.facebook} className="grid h-10 w-10 place-items-center rounded-full border border-brand-cream/15 text-brand-cream/50 transition-colors hover:border-brand-teal hover:text-brand-teal" aria-label="Facebook">
                  <FacebookIcon className="size-4" />
                </Link>
                <Link href={siteConfig.social.instagram} className="grid h-10 w-10 place-items-center rounded-full border border-brand-cream/15 text-brand-cream/50 transition-colors hover:border-brand-teal hover:text-brand-teal" aria-label="Instagram">
                  <InstagramIcon className="size-4" />
                </Link>
                <Link href={siteConfig.social.linkedin} className="grid h-10 w-10 place-items-center rounded-full border border-brand-cream/15 text-brand-cream/50 transition-colors hover:border-brand-teal hover:text-brand-teal" aria-label="LinkedIn">
                  <LinkedinIcon className="size-4" />
                </Link>
                <Link href={siteConfig.social.twitter} className="grid h-10 w-10 place-items-center rounded-full border border-brand-cream/15 text-brand-cream/50 transition-colors hover:border-brand-teal hover:text-brand-teal" aria-label="Twitter">
                  <TwitterIcon className="size-4" />
                </Link>
                <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="grid h-10 w-10 place-items-center rounded-full border border-brand-cream/15 text-brand-cream/50 transition-colors hover:border-brand-teal hover:text-brand-teal" aria-label="WhatsApp">
                  <MessageCircle className="size-4" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
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
          <div className="lg:col-span-2">
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
          <div className="lg:col-span-4">
            <RevealOnScroll>
              <ColumnHeading>Get in touch</ColumnHeading>
            </RevealOnScroll>

            <RevealOnScroll delay={160}>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-3 text-sm text-brand-cream/60 transition-colors hover:text-brand-cream"
                >
                  <span className="mt-0.5 text-brand-teal transition-transform duration-300 group-hover:scale-110">
                    <Phone className="size-4" />
                  </span>
                  <span>
                    <span className="block font-medium text-brand-cream">{siteConfig.phone}</span>
                    <span className="text-xs">Sales &amp; support</span>
                  </span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-start gap-3 text-sm text-brand-cream/60 transition-colors hover:text-brand-cream"
                >
                  <span className="mt-0.5 text-brand-teal transition-transform duration-300 group-hover:scale-110">
                    <Mail className="size-4" />
                  </span>
                  <span>
                    <span className="block font-medium text-brand-cream">{siteConfig.email}</span>
                    <span className="text-xs">General enquiries</span>
                  </span>
                </a>

                <div className="group flex items-start gap-3 text-sm text-brand-cream/60">
                  <span className="mt-0.5 text-brand-teal">
                    <MapPin className="size-4" />
                  </span>
                  <span>
                    <span className="block font-medium text-brand-cream">{siteConfig.location}</span>
                    <span className="text-xs">Service coverage nationwide</span>
                  </span>
                </div>

                <div className="flex items-start gap-3 text-sm text-brand-cream/60">
                  <span className="mt-0.5 text-brand-teal">
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
      <div className="relative z-10 border-t border-brand-cream/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-brand-cream/40 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-brand-cream">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-brand-cream">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="transition-colors hover:text-brand-cream">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Watermark */}
      <div className="pointer-events-none select-none overflow-hidden leading-none">
        <span className="block translate-y-[0.12em] text-center text-[22vw] font-black tracking-tighter text-brand-cream/[0.03] lg:text-[16vw]">
          AMOLECK
        </span>
      </div>
    </footer>
  )
}

