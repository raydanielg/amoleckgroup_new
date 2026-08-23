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
      <PageHero
        label="Medical Equipment"
        title="Medical equipment, specified and supported properly."
        subtitle="We procure, install, commission and maintain equipment for wards, theatres, laboratories and diagnostic units. Every installation includes calibration, staff training and a documented handover."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <RevealOnScroll>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                  alt="Medical equipment"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/request-quote"
                  className={cn(buttonVariants({ size: "sm" }), "w-fit rounded-md")}
                >
                  Request a quote
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
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">What&apos;s included</span>
            <h2 className="mt-3 text-xl font-semibold sm:mt-4 sm:text-2xl">Full-service delivery</h2>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {includedItems.map((item, idx) => (
                <RevealOnScroll key={item} delay={idx * 50}>
                  <div className="flex items-center gap-3 rounded-xl border border-border p-4">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
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
