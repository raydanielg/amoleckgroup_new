import type { Metadata } from "next"
import { Code2, Cpu, Briefcase, Smartphone, Globe, Server, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { QuoteCTA } from "@/components/quote-cta"
import { technologyCards } from "@/lib/data"

export const metadata: Metadata = {
  title: "Healthcare Technology — Amoleck Group",
  description: "Clinical systems, diagnostic integration and technical support that keeps your equipment talking to each other.",
}

const techIcons: typeof Code2[] = [Code2, Cpu, Briefcase, Smartphone, Globe, Server]

const whereWeHelp = [
  "Equipment integration",
  "Diagnostic data handling",
  "Systems configuration",
  "Staff onboarding",
  "Ongoing technical support",
]

export default function ServiceTechnologyPage() {
  return (
    <>
      <PageHero
        label="Healthcare Technology"
        title="Technology that talks to the equipment you already own."
        subtitle="Clinical systems, diagnostic integration and technical support. We configure around your existing estate rather than asking you to replace it."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <RevealOnScroll>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-teal">Where we help</span>
            <h2 className="mt-4 text-2xl font-semibold">Our capabilities</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {whereWeHelp.map((item, idx) => (
                <RevealOnScroll key={item} delay={idx * 50}>
                  <div className="flex items-center gap-3 rounded-xl border border-border p-4">
                    <CheckCircle2 className="size-5 shrink-0 text-brand-teal" />
                    <span className="text-sm">{item}</span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <RevealOnScroll>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-teal">What we build</span>
          <h2 className="mt-4 text-2xl font-semibold">Our technology services</h2>
        </RevealOnScroll>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyCards.map((tech, idx) => {
            const Icon = techIcons[idx % techIcons.length]!
            return (
              <RevealOnScroll key={tech.title} delay={idx * 80}>
                <div className="group flex h-full flex-col gap-3 rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/30 hover:shadow-lg hover:shadow-brand-teal/5">
                  <Icon className="size-6 text-brand-teal transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </Section>

      <QuoteCTA />
    </>
  )
}
