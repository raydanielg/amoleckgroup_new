import Link from "next/link"
import {
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Activity,
  Code2,
  Users,
  Shield,
  Headset,
  CheckCircle2,
  Package,
} from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { Marquee, AnimatedCounter } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import {
  services,
  equipmentCategories,
  howItWorksService,
  whyChooseUs,
  technologyCards,
  tickerItems,
  statsNumbers,
  teamMembers,
} from "@/lib/data"

const serviceIcons: Record<string, typeof HeartPulse> = {
  heart: HeartPulse,
  stethoscope: Stethoscope,
  device: Activity,
  code: Code2,
}

const whyIcons: Record<string, typeof Users> = {
  users: Users,
  device: Activity,
  heart: HeartPulse,
  shield: Shield,
  bulb: Code2,
  support: Headset,
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-primary sm:text-xs">
                We Take Care of Your Health
              </span>
              <h1 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:mt-5 sm:text-4xl lg:text-5xl">
                Medical equipment that keeps working after the invoice is paid.
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty sm:mt-4 sm:text-base lg:text-lg">
                We supply, install and service medical, diagnostic and rehabilitation equipment across Tanzania — with certified technicians, genuine warranty, and support that answers the phone.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
                <Link
                  href="/request-quote"
                  className={cn(buttonVariants({ size: "sm" }), "group w-full rounded-md sm:w-auto")}
                >
                  Request a quote
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/equipment"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "w-full rounded-md sm:w-auto"
                  )}
                >
                  Browse equipment
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-border bg-muted/30 py-4 sm:py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 sm:gap-x-8 sm:px-6 lg:px-8">
          {tickerItems.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
            >
              <span className="size-1 rounded-full bg-primary/60" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <Section>
        <RevealOnScroll>
          <SectionHeader
            eyebrow="What we do"
            title="Four services, one accountable supplier."
            description="Most facilities juggle a separate vendor for supply, another for installation, and a third who never shows up for repairs. We do all three."
          />
        </RevealOnScroll>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
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
                </Link>
              </RevealOnScroll>
            )
          })}
        </div>
      </Section>

      {/* Why Facilities Stay With Us */}
      <Section className="bg-muted/30">
        <RevealOnScroll>
          <div className="mb-10 max-w-2xl sm:mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Why facilities stay with us
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground text-balance sm:mt-5 sm:text-3xl lg:text-4xl">
              Buying equipment is easy. Keeping it running is the hard part.
            </h2>
          </div>
        </RevealOnScroll>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {whyChooseUs.map((item, idx) => {
            const Icon = whyIcons[item.icon] ?? Users
            return (
              <RevealOnScroll key={item.title} delay={idx * 80}>
                <div className="group flex h-full items-start gap-4 rounded-xl border border-border bg-card p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <Icon className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </Section>

      {/* Numbers */}
      <Section>
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {statsNumbers.map((stat, idx) => (
            <RevealOnScroll key={stat.label} delay={idx * 80}>
              <div className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  className="text-2xl font-semibold tabular-nums text-primary sm:text-4xl lg:text-5xl"
                />
                <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-muted/30">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Our Team"
            title="The people behind the equipment."
            description="A small, senior team that has been specifying, installing and servicing medical equipment across Tanzania since 2015."
            align="center"
          />
        </RevealOnScroll>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <RevealOnScroll key={member.name} delay={idx * 80}>
              <Link
                href="/about/team"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">{member.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">{member.title}</p>
                  <p className="line-clamp-3 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="/about/team"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "group rounded-md")}
          >
            Meet the full team
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* Equipment Preview */}
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Equipment Catalogue
            </span>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
              A selection of what we supply.
            </h2>
            <p className="mt-3 text-base text-muted-foreground text-pretty sm:mt-4 sm:text-lg">
              Not everything is listed — if you don&apos;t see it, ask. We source across diagnostic, therapy, surgical, ward and laboratory categories.
            </p>
            <Link
              href="/equipment"
              className={cn(buttonVariants({ size: "sm" }), "group mt-6 rounded-md sm:mt-8")}
            >
              Browse equipment
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {equipmentCategories.slice(0, 4).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/equipment#${cat.slug}`}
                  className="group relative aspect-square overflow-hidden rounded-2xl"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-background sm:text-sm">
                    {cat.name}
                  </p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <RevealOnScroll>
          <SectionHeader
            eyebrow="How we work"
            title="From phone call to running equipment."
            align="center"
          />
        </RevealOnScroll>
        <div className="relative mt-10 sm:mt-16">
          <div className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">
            {howItWorksService.map((item, idx) => (
              <RevealOnScroll key={item.step} delay={idx * 80}>
                <div className="group flex flex-col items-center text-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110 sm:size-14 sm:text-lg">
                    {item.step}
                  </div>
                  <h3 className="mt-3 text-xs font-semibold sm:mt-4 sm:text-sm">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* Technology */}
      <Section className="bg-muted/30">
        <RevealOnScroll>
          <div className="mb-10 max-w-3xl sm:mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Healthcare Technology
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground text-balance sm:mt-5 sm:text-3xl lg:text-4xl">
              Technology that talks to the equipment you already own.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground text-pretty sm:mt-4 sm:text-base lg:text-lg">
              Clinical systems, diagnostic integration and technical support. We configure around your existing estate rather than asking you to replace it.
            </p>
            <Link
              href="/technology"
              className={cn(buttonVariants({ size: "sm" }), "group mt-6 rounded-md sm:mt-8")}
            >
              Explore technology
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealOnScroll>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {technologyCards.map((tech, idx) => (
            <RevealOnScroll key={tech.title} delay={idx * 80}>
              <div className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <h3 className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-lg">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <QuoteCTA />
    </>
  )
}
