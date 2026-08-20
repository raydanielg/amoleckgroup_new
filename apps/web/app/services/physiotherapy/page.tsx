import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
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
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="secondary" className="mb-4">Physiotherapy Solutions</Badge>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Complete rehabilitation setups, ready to treat.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Therapy tables, electrotherapy units, exercise equipment, mobility aids and assessment tools — plus the training your practitioners need to use them from day one.
              </p>
              <Link
                href="/physiotherapy"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                Browse physiotherapy equipment
                <ArrowRight className="size-4" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                  alt="Physiotherapy"
                  className="size-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Typical clinic package</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {clinicPackage.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-border/40 p-4">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      <QuoteCTA />
    </>
  )
}
