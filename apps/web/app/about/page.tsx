import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, HeartPulse, Stethoscope, Activity, Code2, MapPin, CheckCircle2, Mail } from "lucide-react"
import { LinkedinIcon } from "@/components/social-icons"
import { Section, SectionHeader } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { QuoteCTA } from "@/components/quote-cta"
import { services, siteConfig, teamMembers } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Amoleck Group — Leadership, Team & Healthcare Equipment Expertise",
  description: "Meet the Amoleck Group leadership team. We supply, install and service medical equipment, physiotherapy solutions and healthcare technology across Tanzania.",
  keywords: ["Amoleck Group", "medical equipment Tanzania", "healthcare technology East Africa", "biomedical engineers", "medical equipment suppliers", "physiotherapy equipment Tanzania", "Amos Paschal", "Ezra Daniel", "Newton Nyema", "Salome Thadeus"],
  openGraph: {
    title: "About Amoleck Group — Leadership & Team",
    description: "Meet the leadership team behind Amoleck Group's medical equipment supply, installation and servicing across Tanzania.",
    type: "website",
  },
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
        bgImage="/images/gtte 8.jpg"
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/amoleck.jpeg"
                alt="Amoleck Group office"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/90 p-4 shadow-lg backdrop-blur-sm">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">Since 2015</p>
                <p className="mt-1 text-sm font-semibold text-foreground">Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150} className="flex flex-col justify-center gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Our Story
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground text-balance sm:text-3xl">
              <span className="text-primary">Amoleck Group</span> has supplied and serviced medical equipment in Tanzania since 2015.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              We started because facilities kept telling us the same story: the machine arrived, nobody installed it properly, and when it broke the supplier had moved on.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              So we built the company around the part everyone else treats as an afterthought <span className="font-semibold text-foreground">what happens after delivery.</span>
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                Supply
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                Installation
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                Servicing
              </span>
            </div>
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
        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {beliefs.map((belief, idx) => (
            <RevealOnScroll key={belief.title} delay={idx * 80}>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-border p-5 sm:p-6">
                <CheckCircle2 className="size-5 text-primary" />
                <h3 className="text-base font-semibold sm:text-lg">{belief.title}</h3>
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
        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.icon] ?? HeartPulse
            return (
              <RevealOnScroll key={service.slug} delay={idx * 80}>
                <Link
                  href={service.cta.href}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <Icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-base font-semibold sm:text-lg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn More
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealOnScroll>
            )
          })}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-muted/30">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Our Leadership"
            title="Meet the team behind Amoleck Group."
            description="Experienced professionals committed to reliable medical equipment supply, installation and after-sales support."
          />
        </RevealOnScroll>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {teamMembers.map((member, idx) => (
            <RevealOnScroll key={member.name} delay={idx * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.title} at Amoleck Group`}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 flex translate-y-4 gap-2 px-4 pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={member.linkedin}
                      className="flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="size-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="size-4" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold sm:text-lg">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.title}</p>
                  <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="mt-10 text-center sm:mt-12">
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:px-6 sm:py-3"
          >
            View full team profiles
            <ArrowRight className="size-4" />
          </Link>
        </RevealOnScroll>
      </Section>

      {/* Coverage */}
      <Section>
        <RevealOnScroll>
          <div className="rounded-2xl border border-border p-6 sm:p-8 lg:p-12">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-6 shrink-0 text-primary" />
              <div>
                <h2 className="text-xl font-semibold sm:text-2xl">Coverage</h2>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  Head office in Dar es Salaam, with technicians covering Dar es Salaam, Arusha, Mwanza, Dodoma, Mbeya, and Zanzibar. Emergency callout available nationwide.
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
