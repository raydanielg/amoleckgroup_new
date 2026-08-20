import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code2, Cpu, Briefcase, Smartphone, Globe, Server, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
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
      <section className="relative overflow-hidden border-b border-border/40 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">Healthcare Technology</Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight lg:text-5xl">
              Technology that talks to the equipment you already own.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-background/70">
              Clinical systems, diagnostic integration and technical support. We configure around your existing estate rather than asking you to replace it.
            </p>
            <Link
              href="/request-quote"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "mt-8")}
            >
              Request a quote
              <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Where we help</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {whereWeHelp.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-border/40 p-4">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-muted/30">
        <FadeIn>
          <SectionHeader
            eyebrow="What we build"
            title="Our technology services"
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {technologyCards.map((tech, idx) => {
            const Icon = techIcons[idx % techIcons.length]!
            return (
              <FadeInItem key={tech.title}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{tech.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </Section>

      <QuoteCTA />
    </>
  )
}
