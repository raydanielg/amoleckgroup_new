import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Package, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import { equipmentCategories } from "@/lib/data"

export const metadata: Metadata = {
  title: "Equipment Catalogue — Amoleck Group",
  description: "Browse diagnostic, therapy, mobility and clinical equipment available for supply and installation in Kenya.",
}

export default function EquipmentPage() {
  return (
    <>
      <section className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">
              <Package className="size-3.5" />
              Medical Equipment
            </Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight lg:text-5xl">
              Equipment catalogue
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A selection of what we supply. Not everything is listed — if you don&apos;t see it, ask. We source across diagnostic, therapy, surgical, ward and laboratory categories.
            </p>
            <Link
              href="/request-quote"
              className={cn(buttonVariants({ size: "lg" }), "mt-8")}
            >
              Request a quote
              <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {equipmentCategories.map((category, catIdx) => (
        <Section key={category.slug} className={catIdx % 2 === 1 ? "bg-muted/30" : ""}>
          <div id={category.slug} className="scroll-mt-20">
            <FadeIn>
              <SectionHeader
                eyebrow="Equipment Category"
                title={category.name}
                description={category.description}
                align="left"
              />
            </FadeIn>
            <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {category.products.map((product) => (
                <FadeInItem key={product.name}>
                  <Card className="h-full overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={category.image}
                        alt={product.name}
                        className="size-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                      <Separator className="my-4" />
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Specifications
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {product.specs.map((spec) => (
                          <li key={spec} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="size-3.5 text-primary" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/request-quote"
                        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-4 w-full")}
                      >
                        Request price
                        <ArrowRight className="size-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </Section>
      ))}

      <QuoteCTA />
    </>
  )
}
