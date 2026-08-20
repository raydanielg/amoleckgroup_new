import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import { physiotherapyServices } from "@/lib/data"

export const metadata: Metadata = {
  title: "Physiotherapy Services",
  description: "Professional physiotherapy assessment, rehabilitation, pain management, and sports rehabilitation at Amoleck Group.",
}

export default function ServicePhysiotherapyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="secondary" className="mb-4">Physiotherapy</Badge>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Physiotherapy Services
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Professional physiotherapy assessment, rehabilitation, pain management, and sports rehabilitation services tailored to your needs.
              </p>
              <Link
                href="/physiotherapy"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                <Calendar className="size-4" />
                Book an Appointment
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
          <SectionHeader
            eyebrow="Our Services"
            title="What We Offer"
            description="Comprehensive physiotherapy services for all ages and conditions."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {physiotherapyServices.map((service) => (
            <FadeInItem key={service}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{service}</h3>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Section>

      <QuoteCTA />
    </>
  )
}
