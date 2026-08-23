import type { Metadata } from "next"
import { ArrowRight, Code2, Smartphone, Globe, Cpu, Server, Briefcase } from "lucide-react"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { QuoteCTA } from "@/components/quote-cta"
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
      />

      <Section>
        <RevealOnScroll>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-teal">What we do</span>
          <h2 className="mt-4 text-2xl font-semibold">Our technology services</h2>
          <p className="mt-2 text-muted-foreground">Clinical systems, diagnostic integration and technical support.</p>
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

      <Section className="bg-muted/30">
        <div className="grid gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-9546f8936333?w=800&q=80"
                alt="Clinical technology"
                className="size-full object-cover"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150} className="flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-semibold">We support what we didn&apos;t supply</h2>
            <p className="text-muted-foreground">
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
                  <ArrowRight className="size-4 text-brand-teal" />
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
