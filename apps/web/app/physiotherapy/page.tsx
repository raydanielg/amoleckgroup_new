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
  title: "Physiotherapy & Rehabilitation",
  description: "Professional physiotherapy and rehabilitation services at Amoleck Group. Personalized care to help you recover, move better and live better.",
}

export default function PhysiotherapyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="secondary" className="mb-4">Physiotherapy</Badge>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Professional Physiotherapy &amp; Rehabilitation
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Personalized physiotherapy care designed to help you recover, move better and live better. Our experienced physiotherapists provide evidence-based treatment tailored to your needs.
              </p>
              <Link
                href="/contact"
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
                  alt="Physiotherapy session"
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
            title="Physiotherapy Services We Offer"
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

      <Section className="bg-muted/30">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                alt="Rehabilitation facility"
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-2xl font-bold">Personalized Treatment Plans</h2>
              <p className="text-muted-foreground">
                Every patient receives a thorough assessment and a personalized treatment plan. We combine hands-on therapy, exercise programs, and modern equipment to achieve the best outcomes.
              </p>
              <ul className="flex flex-col gap-2">
                {["Individual assessment and diagnosis", "Customized rehabilitation programs", "Modern equipment and facilities", "Ongoing progress evaluation", "Home exercise guidance"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/request-quote"
                className={cn(buttonVariants({ size: "lg" }), "mt-4 w-fit")}
              >
                Request a Quote
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>

      <QuoteCTA
        title="Ready to start your recovery?"
        description="Book a physiotherapy appointment today and take the first step towards better movement and better health."
      />
    </>
  )
}
