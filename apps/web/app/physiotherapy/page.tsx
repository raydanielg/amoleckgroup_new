import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { QuoteCTA } from "@/components/quote-cta"
import { physiotherapyServices } from "@/lib/data"

export const metadata: Metadata = {
  title: "Physiotherapy Equipment — Amoleck Group",
  description: "Therapy tables, electrotherapy, exercise and mobility equipment for rehabilitation clinics.",
}

export default function PhysiotherapyPage() {
  return (
    <>
      <PageHero
        label="Physiotherapy Equipment"
        title="Everything a physiotherapy practice needs to open its doors."
        subtitle="Whether you're setting up a single treatment room or a full rehabilitation department, we supply the equipment, install it, and train your team on it."
        bgImage="/images/gtte 8.jpg"
      />

      <Section>
        <RevealOnScroll>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Sections</span>
          <h2 className="mt-3 text-xl font-semibold sm:mt-4 sm:text-2xl">What we supply</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">Treatment & assessment · Electrotherapy · Exercise & rehabilitation · Mobility & support · Consumables</p>
        </RevealOnScroll>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {physiotherapyServices.map((service, idx) => (
            <RevealOnScroll key={service} delay={idx * 80}>
              <div className="group flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-5">
                <CheckCircle2 className="size-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-sm font-semibold sm:text-base">{service}</h3>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/equipment/equipment-rehabilitation-interior-physiotherapy-clinic.jpg"
                alt="Rehabilitation facility"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150} className="flex flex-col justify-center gap-4">
            <h2 className="text-xl font-semibold sm:text-2xl">Personalized Treatment Plans</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
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
              className={cn(buttonVariants({ size: "sm" }), "mt-4 w-fit rounded-md")}
            >
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </Section>

      <QuoteCTA
        title="Planning a new clinic?"
        description="Send us the floor plan and we'll specify it — equipment, layout and installation."
      />
    </>
  )
}
