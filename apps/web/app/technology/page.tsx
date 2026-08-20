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
  title: "Healthcare Technology — Amoleck Group",
  description: "Modern clinical technology, integrated properly and supported locally.",
}

const techIcons: typeof Code2[] = [Code2, Cpu, Briefcase, Smartphone, Globe, Server]

export default function TechnologyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">Healthcare Technology</Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight lg:text-5xl">
              Modern clinical technology, supported locally.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-background/70">
              Advanced equipment is only an advantage if someone nearby can service it. We supply technology we can support — and we support technology we didn&apos;t supply.
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
          <SectionHeader
            eyebrow="What we do"
            title="Our technology services"
            description="Clinical systems, diagnostic integration and technical support."
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

      <Section className="bg-muted/30">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-9546f8936333?w=800&q=80"
                alt="Clinical technology"
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-2xl font-bold">We support what we didn&apos;t supply</h2>
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
                    <ArrowRight className="size-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Section>

      <QuoteCTA />
    </>
  )
}
