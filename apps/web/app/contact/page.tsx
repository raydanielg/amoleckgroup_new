import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/social-icons"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact Amoleck Group",
  description: "Talk to our team about equipment, servicing or a site visit. We reply within two working hours.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Talk to someone who knows the equipment."
        subtitle="Call, email, or send the form. Enquiries received during working hours get a reply within two hours."
        bgImage="/images/gtte 8.jpg"
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Contact Information */}
          <RevealOnScroll>
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-border p-6 sm:p-8">
              <div>
                <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
                <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
              </div>

              <div className="h-px bg-border" />

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-primary">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-primary">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.hours}</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <p className="mb-3 text-sm font-medium">Connect with us</p>
                <div className="flex gap-3">
                  <a href={siteConfig.social.facebook} className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary" aria-label="Facebook">
                    <FacebookIcon className="size-4" />
                  </a>
                  <a href={siteConfig.social.instagram} className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary" aria-label="Instagram">
                    <InstagramIcon className="size-4" />
                  </a>
                  <a href={siteConfig.social.linkedin} className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary" aria-label="LinkedIn">
                    <LinkedinIcon className="size-4" />
                  </a>
                  <a href={siteConfig.social.twitter} className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary" aria-label="Twitter">
                    <TwitterIcon className="size-4" />
                  </a>
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary" aria-label="WhatsApp">
                    <MessageCircle className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact Form */}
          <RevealOnScroll delay={150}>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </Section>

      {/* Map */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Find us</span>
                <h2 className="mt-2 text-xl font-semibold sm:text-2xl">Visit our office</h2>
                <p className="mt-1 text-sm text-muted-foreground">Goba Kwa Ndambi, Dar es Salaam, Tanzania</p>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Goba+Kwa+Ndambi+Dar+es+Salaam+Tanzania"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                <Navigation className="size-4" />
                Open in Google Maps
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Goba+Kwa+Ndambi+Dar+es+Salaam+Tanzania&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amoleck Group Location - Goba Kwa Ndambi, Dar es Salaam"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
