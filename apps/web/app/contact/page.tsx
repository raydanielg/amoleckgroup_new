import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/social-icons"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/animations"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact Amoleck Group",
  description: "Talk to our team about equipment, servicing or a site visit. We reply within two working hours.",
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">Contact</Badge>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Talk to someone who knows the equipment.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Call, email, or send the form. Enquiries received during working hours get a reply within two hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <FadeIn>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
                  <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                </div>

                <Separator />

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

                <Separator />

                <div>
                  <p className="mb-3 text-sm font-medium">Connect with us</p>
                  <div className="flex gap-3">
                    <a href={siteConfig.social.facebook} className="flex size-10 items-center justify-center rounded-lg border border-border hover:bg-accent" aria-label="Facebook">
                      <FacebookIcon className="size-5" />
                    </a>
                    <a href={siteConfig.social.instagram} className="flex size-10 items-center justify-center rounded-lg border border-border hover:bg-accent" aria-label="Instagram">
                      <InstagramIcon className="size-5" />
                    </a>
                    <a href={siteConfig.social.linkedin} className="flex size-10 items-center justify-center rounded-lg border border-border hover:bg-accent" aria-label="LinkedIn">
                      <LinkedinIcon className="size-5" />
                    </a>
                    <a href={siteConfig.social.twitter} className="flex size-10 items-center justify-center rounded-lg border border-border hover:bg-accent" aria-label="Twitter">
                      <TwitterIcon className="size-5" />
                    </a>
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} className="flex size-10 items-center justify-center rounded-lg border border-border hover:bg-accent" aria-label="WhatsApp">
                      <MessageCircle className="size-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.15}>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <div className="mt-2 flex items-center gap-2 text-sm text-primary">
                  <span className="size-2 rounded-full bg-primary" />
                  We reply within 2 working hours
                </div>
              </CardHeader>
              <CardContent>
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
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="size-4" />
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Map */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-border/40">
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
          </FadeIn>
        </div>
      </section>
    </>
  )
}
