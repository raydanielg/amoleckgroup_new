import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { QuoteCTA } from "@/components/quote-cta"
import { equipmentCategories } from "@/lib/data"

export const metadata: Metadata = {
  title: "Equipment Supply & Fit-Out — Amoleck Group",
  description: "From a single device to a full department fit-out, with warranty, training and service cover included.",
}

export default function ServiceEquipmentPage() {
  return (
    <>
      <PageHero
        label="Equipment Supply"
        title="From one device to a full department fit-out."
        subtitle="Tell us the room and the budget and we will come back with a specification that fits both. We supply from manufacturers we represent directly, so the warranty you're quoted is the warranty you get."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <RevealOnScroll>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe611db5902?w=800&q=80"
                  alt="Medical equipment"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/equipment"
                  className={cn(buttonVariants({ size: "sm" }), "w-fit rounded-md")}
                >
                  Browse equipment
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
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Good fit for</span>
            <h2 className="mt-3 text-xl font-semibold sm:mt-4 sm:text-2xl">When to call us</h2>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {["New clinic setups", "Department expansions", "Equipment replacement cycles", "Tender responses"].map((item, idx) => (
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

      <Section>
        <RevealOnScroll>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Categories</span>
          <h2 className="mt-3 text-xl font-semibold sm:mt-4 sm:text-2xl">Equipment Categories</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">Browse our equipment categories and request a quote for what you need.</p>
        </RevealOnScroll>
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {equipmentCategories.map((cat, idx) => (
            <RevealOnScroll key={cat.slug} delay={idx * 80}>
              <Link
                href={`/equipment#${cat.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-semibold sm:text-lg">{cat.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View Products
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <QuoteCTA />
    </>
  )
}
