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
      />

      <Section>
        <RevealOnScroll>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-teal">Sections</span>
          <h2 className="mt-4 text-2xl font-semibold">What we supply</h2>
          <p className="mt-2 text-muted-foreground">Treatment & assessment · Electrotherapy · Exercise & rehabilitation · Mobility & support · Consumables</p>
        </RevealOnScroll>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {physiotherapyServices.map((service, idx) => (
            <RevealOnScroll key={service} delay={idx * 80}>
              <div className="group flex h-full flex-col gap-3 rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/30 hover:shadow-lg hover:shadow-brand-teal/5">
                <CheckCircle2 className="size-5 text-brand-teal transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-semibold">{service}</h3>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="grid gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                alt="Rehabilitation facility"
                className="size-full object-cover"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150} className="flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-semibold">Personalized Treatment Plans</h2>
            <p className="text-muted-foreground">
              Every patient receives a thorough assessment and a personalized treatment plan. We combine hands-on therapy, exercise programs, and modern equipment to achieve the best outcomes.
            </p>
            <ul className="flex flex-col gap-2">
              {["Individual assessment and diagnosis", "Customized rehabilitation programs", "Modern equipment and facilities", "Ongoing progress evaluation", "Home exercise guidance"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 text-brand-teal" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/request-quote"
              className={cn(buttonVariants({ size: "lg" }), "mt-4 w-fit rounded-full")}
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
