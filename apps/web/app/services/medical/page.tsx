import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Stethoscope } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"

export const metadata: Metadata = {
  title: "Medical Equipment Services — Amoleck Group",
  description: "Procurement, installation, commissioning and maintenance of hospital and clinical equipment.",
}

const includedItems = [
  "Site assessment",
  "Specification",
  "Procurement",
  "Delivery",
  "Installation & commissioning",
  "Staff training",
  "Warranty registration",
  "Scheduled maintenance",
]

export default function ServiceMedicalPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="secondary" className="mb-4">Medical Equipment</Badge>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Medical equipment, specified and supported properly.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                We procure, install, commission and maintain equipment for wards, theatres, laboratories and diagnostic units. Every installation includes calibration, staff training and a documented handover.
              </p>
              <Link
                href="/request-quote"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                Request a quote
                <ArrowRight className="size-4" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                  alt="Medical equipment"
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
            <h2 className="text-2xl font-bold">What&apos;s included</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {includedItems.map((item) => (
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
