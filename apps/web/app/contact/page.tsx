import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/social-icons"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
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
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <RevealOnScroll>
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-border p-8">
              <div>
                <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
                <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
              </div>

              <div className="h-px bg-border" />

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                    <Phone className="size-5 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-brand-teal">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                    <Mail className="size-5 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-brand-teal">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                    <MapPin className="size-5 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                    <Clock className="size-5 text-brand-teal" />
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
                  <a href={siteConfig.social.facebook} className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-brand-teal hover:text-brand-teal" aria-label="Facebook">
                    <FacebookIcon className="size-4" />
                  </a>
                  <a href={siteConfig.social.instagram} className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-brand-teal hover:text-brand-teal" aria-label="Instagram">
                    <InstagramIcon className="size-4" />
                  </a>
                  <a href={siteConfig.social.linkedin} className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-brand-teal hover:text-brand-teal" aria-label="LinkedIn">
                    <LinkedinIcon className="size-4" />
                  </a>
                  <a href={siteConfig.social.twitter} className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-brand-teal hover:text-brand-teal" aria-label="Twitter">
                    <TwitterIcon className="size-4" />
                  </a>
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-brand-teal hover:text-brand-teal" aria-label="WhatsApp">
                    <MessageCircle className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact Form */}
          <RevealOnScroll delay={150}>
            <div className="flex flex-col gap-6 rounded-2xl border border-border p-8">
              <div>
                <h3 className="text-lg font-semibold">Send Us a Message</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-brand-teal">
                  <span className="size-2 rounded-full bg-brand-teal" />
                  We reply within 2 working hours
                </div>
              </div>
              <form className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-name">Full name</Label>
                    <Input id="contact-name" placeholder="John Doe" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-facility">Facility / organisation</Label>
                    <Input id="contact-facility" placeholder="Your facility" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input id="contact-phone" type="tel" placeholder="+255 7XX XXX XXX" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-need">What do you need?</Label>
                  <Input id="contact-need" placeholder="Equipment, servicing, site visit..." />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" placeholder="Your message..." rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full">
                  <Send className="size-4" />
                  Send message
                </Button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Map */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.7103836!2d39.2641!3d-6.8160!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnNTcuNiJTIDM5wrAxNSc1MC44IkU!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amoleck Group Location"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
