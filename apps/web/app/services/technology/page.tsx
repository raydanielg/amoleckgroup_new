import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code2, Smartphone, Globe, Cpu, Server, Briefcase } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import { technologyCards } from "@/lib/data"

export const metadata: Metadata = {
  title: "Technology Solutions",
  description: "Software development, digital healthcare solutions, IT consulting, and business technology solutions by Amoleck Group.",
}

const techIcons: typeof Code2[] = [Code2, Cpu, Briefcase, Smartphone, Globe, Server]

export default function ServiceTechnologyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">Technology Solutions</Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight lg:text-5xl">
              Technology Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-background/70">
              Software development, digital healthcare solutions, IT consulting, and business technology solutions designed to drive your organization forward.
            </p>
            <Link
              href="/technology"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "mt-8")}
            >
              Explore Technology
              <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Our Services"
            title="What We Build"
            description="From custom software to healthcare systems, we deliver technology that drives results."
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
