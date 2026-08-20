import Link from "next/link"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/social-icons"
import { siteConfig, navLinks } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-foreground text-background">
      <div className="relative mx-auto max-w-7xl px-4 pt-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <span className="text-2xl font-bold tracking-tight text-background">
              AMOLECK
            </span>
            <p className="max-w-sm text-sm text-background/60">
              {siteConfig.description}
            </p>
            <Link
              href="/request-quote"
              className="group mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-background transition-colors hover:text-primary"
            >
              Request a quote
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <div className="mt-4 flex gap-4">
              <Link href={siteConfig.social.facebook} className="text-background/50 transition-colors hover:text-primary" aria-label="Facebook">
                <FacebookIcon className="size-4" />
              </Link>
              <Link href={siteConfig.social.instagram} className="text-background/50 transition-colors hover:text-primary" aria-label="Instagram">
                <InstagramIcon className="size-4" />
              </Link>
              <Link href={siteConfig.social.linkedin} className="text-background/50 transition-colors hover:text-primary" aria-label="LinkedIn">
                <LinkedinIcon className="size-4" />
              </Link>
              <Link href={siteConfig.social.twitter} className="text-background/50 transition-colors hover:text-primary" aria-label="Twitter">
                <TwitterIcon className="size-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/40">Company</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/40">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-background/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {siteConfig.location}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-background">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-background">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 py-6 sm:flex-row">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-background/40 transition-colors hover:text-background">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-background/40 transition-colors hover:text-background">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden leading-none">
        <span className="block translate-y-[0.12em] text-center text-[22vw] font-black tracking-tighter text-background/5 lg:text-[16vw]">
          AMOLECK
        </span>
      </div>
    </footer>
  )
}

