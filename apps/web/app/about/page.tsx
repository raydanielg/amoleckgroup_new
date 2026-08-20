import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, HeartPulse, Stethoscope, Activity, Code2, Target, Eye, MapPin } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import { services, siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Amoleck Group Company Ltd — a Tanzanian company delivering innovative healthcare, medical, physiotherapy and technology solutions.",
}

const serviceIcons: Record<string, typeof HeartPulse> = {
  heart: HeartPulse,
  stethoscope: Stethoscope,
  device: Activity,
  code: Code2,
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight lg:text-5xl">
              Who We Are
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Amoleck Group Company Ltd is a Tanzanian company committed to delivering innovative healthcare, medical, physiotherapy and technology solutions. We serve clinics, hospitals, organizations, and individuals across Tanzania and beyond.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Amoleck Group office"
                className="size-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-center gap-6">
            <div>
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                <Target className="size-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-2 text-muted-foreground">
                To deliver innovative healthcare and technology solutions that improve lives, transform healthcare delivery, and empower organizations to achieve excellence.
              </p>
            </div>
            <div>
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                <Eye className="size-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="mt-2 text-muted-foreground">
                To be the leading provider of integrated healthcare, medical equipment, and technology solutions in Tanzania and East Africa.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Divisions"
            title="What We Do"
            description="Four core divisions delivering comprehensive solutions to our clients."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? HeartPulse
            return (
              <FadeInItem key={service.slug}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                    <Link
                      href={service.cta.href}
                      className={cn(buttonVariants({ variant: "link", size: "sm" }), "mt-3 px-0")}
                    >
                      Learn More
                      <ArrowRight className="size-4" />
                    </Link>
                  </CardContent>
                </Card>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </Section>

      <Section>
        <FadeIn>
          <div className="rounded-2xl border border-border/40 p-8 lg:p-12">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-6 shrink-0 text-primary" />
              <div>
                <h2 className="text-2xl font-bold">Based in {siteConfig.location}</h2>
                <p className="mt-2 text-muted-foreground">
                  We are proudly based in Dar es Salaam, Tanzania, serving clients across the country and the East African region. Our local presence ensures we understand the unique healthcare and technology needs of our communities.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <QuoteCTA />
    </>
  )
}
