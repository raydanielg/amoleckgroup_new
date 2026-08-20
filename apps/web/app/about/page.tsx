import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, HeartPulse, Stethoscope, Activity, Code2, Target, Eye, MapPin, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import { services, siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Amoleck Group — Who We Are",
  description: "Amoleck Group has supplied and serviced medical equipment in Kenya. Meet the team, our standards, and how we work.",
}

const serviceIcons: Record<string, typeof HeartPulse> = {
  heart: HeartPulse,
  stethoscope: Stethoscope,
  device: Activity,
  code: Code2,
}

const beliefs = [
  {
    title: "Specification before sales",
    description: "The right equipment for your ward is often not the most expensive one. We will tell you when to spend less.",
  },
  {
    title: "Local capability matters",
    description: "Imported equipment with no local technician is a machine with an expiry date.",
  },
  {
    title: "Training is part of the product",
    description: "Equipment your staff are afraid to touch is equipment you didn't buy.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight lg:text-5xl">
              We supply equipment we&apos;re willing to be called about at 2am.
            </h1>
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
          <FadeIn delay={0.15} className="flex flex-col justify-center gap-4">
            <p className="text-lg text-muted-foreground">
              Amoleck Group has supplied and serviced medical equipment in Kenya since [YEAR]. We started because facilities kept telling us the same story: the machine arrived, nobody installed it properly, and when it broke the supplier had moved on.
            </p>
            <p className="text-lg text-muted-foreground">
              So we built the company around the part everyone else treats as an afterthought — what happens after delivery.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* What We Believe */}
      <Section className="bg-muted/30">
        <FadeIn>
          <SectionHeader
            eyebrow="What we believe"
            title="Three principles we won't bend on."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {beliefs.map((belief) => (
            <FadeInItem key={belief.title}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{belief.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{belief.description}</p>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Section>

      {/* What We Do */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Our Divisions"
            title="Four services, one accountable supplier."
            description="You can take one of these or all four. What you cannot do is end up with three vendors blaming each other while a theatre sits idle."
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

      {/* Coverage */}
      <Section className="bg-muted/30">
        <FadeIn>
          <div className="rounded-2xl border border-border/40 p-8 lg:p-12">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-6 shrink-0 text-primary" />
              <div>
                <h2 className="text-2xl font-bold">Coverage</h2>
                <p className="mt-2 text-muted-foreground">
                  Head office in [CITY], with technicians covering [REGIONS]. Emergency callout available nationwide.
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
