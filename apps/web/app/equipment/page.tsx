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
  title: "Equipment Catalogue — Amoleck Group",
  description: "Browse diagnostic, therapy, mobility and clinical equipment available for supply and installation in Tanzania.",
}

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        label="Medical Equipment"
        title="Equipment catalogue"
        subtitle="A selection of what we supply. Not everything is listed — if you don't see it, ask. We source across diagnostic, therapy, surgical, ward and laboratory categories."
        bgImage="/images/gtte 8.jpg"
      />

      {equipmentCategories.map((category, catIdx) => (
        <Section key={category.slug} className={catIdx % 2 === 1 ? "bg-muted/30" : ""}>
          <div id={category.slug} className="scroll-mt-20">
            <RevealOnScroll>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Equipment Category</span>
              <h2 className="mt-3 text-xl font-semibold sm:mt-4 sm:text-2xl">{category.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">{category.description}</p>
            </RevealOnScroll>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-5">
              {category.products.map((product, idx) => (
                <RevealOnScroll key={product.name} delay={idx * 80}>
                  <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-5">
                    <h3 className="text-sm font-semibold text-foreground sm:text-base">{product.name}</h3>
                    <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{product.description}</p>
                    <div className="my-3 h-px bg-border" />
                    <ul className="flex flex-1 flex-col gap-1.5">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="size-3 shrink-0 text-primary" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/request-quote"
                      className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-4 w-full rounded-md")}
                    >
                      Request price
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <QuoteCTA />
    </>
  )
}
