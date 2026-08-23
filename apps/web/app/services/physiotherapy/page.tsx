import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { QuoteCTA } from "@/components/quote-cta"

export const metadata: Metadata = {
  title: "Physiotherapy Solutions — Amoleck Group",
  description: "Rehabilitation equipment, clinic setup and practitioner training for physiotherapy practices in Kenya.",
}

const clinicPackage = [
  "Treatment couches",
  "Electrotherapy (TENS, ultrasound, shortwave)",
  "Exercise & gym equipment",
  "Gait and mobility aids",
  "Assessment tools",
  "Consumables supply",
]

export default function ServicePhysiotherapyPage() {
  return (
    <>
      <PageHero
        label="Physiotherapy Solutions"
        title="Complete rehabilitation setups, ready to treat."
        subtitle="Therapy tables, electrotherapy units, exercise equipment, mobility aids and assessment tools — plus the training your practitioners need to use them from day one."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                  alt="Physiotherapy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/physiotherapy"
                  className={cn(buttonVariants({ size: "lg" }), "w-fit rounded-full")}
                >
                  Browse physiotherapy equipment
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <RevealOnScroll>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-teal">Typical clinic package</span>
            <h2 className="mt-4 text-2xl font-semibold">Everything you need to open</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {clinicPackage.map((item, idx) => (
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

      <QuoteCTA />
    </>
  )
}
