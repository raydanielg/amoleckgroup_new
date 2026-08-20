import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/social-icons"
import { siteConfig, navLinks } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="text-lg font-bold tracking-tight">
              <span className="text-primary">AMOLECK</span>
            </span>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-2 flex gap-3">
              <Link href={siteConfig.social.facebook} className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <FacebookIcon className="size-5" />
              </Link>
              <Link href={siteConfig.social.instagram} className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <InstagramIcon className="size-5" />
              </Link>
              <Link href={siteConfig.social.linkedin} className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <LinkedinIcon className="size-5" />
              </Link>
              <Link href={siteConfig.social.twitter} className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <TwitterIcon className="size-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Services</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/services/physiotherapy" className="text-sm text-muted-foreground hover:text-primary">Physiotherapy</Link></li>
              <li><Link href="/services/medical" className="text-sm text-muted-foreground hover:text-primary">Medical Services</Link></li>
              <li><Link href="/equipment" className="text-sm text-muted-foreground hover:text-primary">Medical Equipment</Link></li>
              <li><Link href="/technology" className="text-sm text-muted-foreground hover:text-primary">Technology Solutions</Link></li>
              <li><Link href="/request-quote" className="text-sm text-muted-foreground hover:text-primary">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {siteConfig.location}
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
