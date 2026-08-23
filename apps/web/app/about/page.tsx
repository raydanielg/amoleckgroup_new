import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, HeartPulse, Stethoscope, Activity, Code2, MapPin, CheckCircle2 } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
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
      <PageHero
        label="About Us"
        title="We supply equipment we're willing to be called about at 2am."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Amoleck Group office"
                className="size-full object-cover"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150} className="flex flex-col justify-center gap-4">
            <p className="text-lg text-muted-foreground text-pretty">
              Amoleck Group has supplied and serviced medical equipment in Kenya since [YEAR]. We started because facilities kept telling us the same story: the machine arrived, nobody installed it properly, and when it broke the supplier had moved on.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              So we built the company around the part everyone else treats as an afterthought — what happens after delivery.
            </p>
          </RevealOnScroll>
        </div>
      </Section>

      {/* What We Believe */}
      <Section className="bg-muted/30">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="What we believe"
            title="Three principles we won't bend on."
          />
        </RevealOnScroll>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {beliefs.map((belief, idx) => (
            <RevealOnScroll key={belief.title} delay={idx * 80}>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-border p-6">
                <CheckCircle2 className="size-5 text-brand-teal" />
                <h3 className="text-lg font-semibold">{belief.title}</h3>
                <p className="text-sm text-muted-foreground">{belief.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* What We Do */}
      <Section>
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Our Divisions"
            title="Four services, one accountable supplier."
            description="You can take one of these or all four. What you cannot do is end up with three vendors blaming each other while a theatre sits idle."
          />
        </RevealOnScroll>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.icon] ?? HeartPulse
            return (
              <RevealOnScroll key={service.slug} delay={idx * 80}>
                <Link
                  href={service.cta.href}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/30 hover:shadow-lg hover:shadow-brand-teal/5"
                >
                  <Icon className="size-6 text-brand-teal transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-teal">
                    Learn More
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealOnScroll>
            )
          })}
        </div>
      </Section>

      {/* Coverage */}
      <Section className="bg-muted/30">
        <RevealOnScroll>
          <div className="rounded-2xl border border-border p-8 lg:p-12">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-6 shrink-0 text-brand-teal" />
              <div>
                <h2 className="text-2xl font-semibold">Coverage</h2>
                <p className="mt-2 text-muted-foreground">
                  Head office in [CITY], with technicians covering [REGIONS]. Emergency callout available nationwide.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Section>

      <QuoteCTA />
    </>
  )
}
