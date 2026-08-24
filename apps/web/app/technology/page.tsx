import type { Metadata } from "next"
import { ArrowRight, Code2, Smartphone, Globe, Cpu, Server, Briefcase } from "lucide-react"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { QuoteCTA } from "@/components/quote-cta"
import { NetworkAnimation } from "@/components/network-animation"
import { technologyCards } from "@/lib/data"

export const metadata: Metadata = {
  title: "Healthcare Technology — Amoleck Group",
  description: "Modern clinical technology, integrated properly and supported locally.",
}

const techIcons: typeof Code2[] = [Code2, Cpu, Briefcase, Smartphone, Globe, Server]

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        label="Healthcare Technology"
        title="Modern clinical technology, supported locally."
        subtitle="Advanced equipment is only an advantage if someone nearby can service it. We supply technology we can support — and we support technology we didn't supply."
        bgImage="/images/gtte 8.jpg"
      />

      {/* Network animation hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <NetworkAnimation className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Connected Healthcare
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground text-balance sm:mt-6 sm:text-3xl lg:text-4xl">
                Every device, every system, every data point — <span className="text-primary">connected.</span>
              </h2>
              <p className="mt-4 text-sm text-muted-foreground text-pretty sm:mt-5 sm:text-base lg:text-lg">
                We integrate clinical systems so your equipment talks to each other, your data flows where it needs to, and your team has the support to keep it all running.
              </p>
              <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <a
                  href="#what-we-do"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  Explore services
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="/request-quote"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Request a quote
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Section className="scroll-mt-20">
        <RevealOnScroll>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">What we do</span>
          <h2 id="what-we-do" className="mt-3 scroll-mt-20 text-xl font-semibold sm:mt-4 sm:text-2xl">Our technology services</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">Clinical systems, diagnostic integration and technical support.</p>
        </RevealOnScroll>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {technologyCards.map((tech, idx) => {
            const Icon = techIcons[idx % techIcons.length]!
            return (
              <RevealOnScroll key={tech.title} delay={idx * 80}>
                <div className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-5">
                  <Icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-sm font-semibold sm:text-base">{tech.title}</h3>
                  <p className="text-xs text-muted-foreground sm:text-sm">{tech.description}</p>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/27155.jpg"
                alt="Clinical technology"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150} className="flex flex-col justify-center gap-4">
            <h2 className="text-xl font-semibold sm:text-2xl">We support what we didn&apos;t supply</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              If you have equipment from another supplier and need integration, configuration or technical support, we can help. We work around your existing estate rather than asking you to replace it.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Equipment integration with existing systems",
                "Diagnostic data handling and routing",
                "Systems configuration and staff onboarding",
                "Ongoing technical support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </Section>

      <QuoteCTA />
    </>
  )
}
