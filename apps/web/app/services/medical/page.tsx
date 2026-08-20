import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Stethoscope } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"

export const metadata: Metadata = {
  title: "Medical Services",
  description: "Comprehensive general medical care, specialist services, health assessments, and wellness counseling at Amoleck Group.",
}

const medicalServices = [
  "General medical care",
  "Specialist services",
  "Health assessment",
  "Counseling & wellness",
]

export default function ServiceMedicalPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="secondary" className="mb-4">Medical Services</Badge>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Medical Services
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Comprehensive general medical care, specialist services, health assessments, and wellness counseling delivered by experienced healthcare professionals.
              </p>
              <Link
                href="/request-quote"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                Request a Quote
                <ArrowRight className="size-4" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                  alt="Medical services"
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
            description="Comprehensive medical services for individuals and organizations."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2" stagger={0.1}>
          {medicalServices.map((service) => (
            <FadeInItem key={service}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Stethoscope className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{service}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Professional {service.toLowerCase()} provided by our experienced medical team.
                  </p>
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
