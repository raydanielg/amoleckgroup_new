import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Package } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import { equipmentCategories } from "@/lib/data"

export const metadata: Metadata = {
  title: "Medical Equipment Supply",
  description: "Supply of medical equipment, physiotherapy equipment, rehabilitation equipment, and modern healthcare devices by Amoleck Group.",
}

export default function ServiceEquipmentPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="secondary" className="mb-4">
                <Package className="size-3.5" />
                Medical Equipment
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Medical Equipment Supply
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                We supply a wide range of medical equipment, physiotherapy equipment, rehabilitation equipment, and modern healthcare devices from trusted brands.
              </p>
              <Link
                href="/equipment"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                Browse Equipment
                <ArrowRight className="size-4" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe611db5902?w=800&q=80"
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
          <SectionHeader
            eyebrow="Categories"
            title="Equipment Categories"
            description="Browse our equipment categories and request a quote for what you need."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {equipmentCategories.map((cat) => (
            <FadeInItem key={cat.slug}>
              <Card className="h-full overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-semibold">{cat.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
                  <Link
                    href={`/equipment#${cat.slug}`}
                    className={cn(buttonVariants({ variant: "link", size: "sm" }), "mt-3 px-0")}
                  >
                    View Products
                    <ArrowRight className="size-4" />
                  </Link>
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
