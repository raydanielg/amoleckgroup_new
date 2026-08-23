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
  description: "Browse diagnostic, therapy, mobility and clinical equipment available for supply and installation in Kenya.",
}

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        label="Medical Equipment"
        title="Equipment catalogue"
        subtitle="A selection of what we supply. Not everything is listed — if you don't see it, ask. We source across diagnostic, therapy, surgical, ward and laboratory categories."
      />

      {equipmentCategories.map((category, catIdx) => (
        <Section key={category.slug} className={catIdx % 2 === 1 ? "bg-muted/30" : ""}>
          <div id={category.slug} className="scroll-mt-20">
            <RevealOnScroll>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-teal">Equipment Category</span>
              <h2 className="mt-4 text-2xl font-semibold">{category.name}</h2>
              <p className="mt-2 text-muted-foreground">{category.description}</p>
            </RevealOnScroll>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product, idx) => (
                <RevealOnScroll key={product.name} delay={idx * 80}>
                  <div className="group h-full overflow-hidden rounded-2xl border border-border">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={category.image}
                        alt={product.name}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                      <div className="my-4 h-px bg-border" />
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Specifications
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {product.specs.map((spec) => (
                          <li key={spec} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="size-3.5 text-brand-teal" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/request-quote"
                        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-4 w-full rounded-full")}
                      >
                        Request price
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
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
