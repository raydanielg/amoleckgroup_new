import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, HeartPulse, Stethoscope, Activity, Code2, CheckCircle2 } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import { services } from "@/lib/data"

export const metadata: Metadata = {
  title: "Our Services — Amoleck Group",
  description: "Equipment supply, physiotherapy solutions, healthcare technology and biomedical servicing, under one contract.",
}

const serviceIcons: Record<string, typeof HeartPulse> = {
  heart: HeartPulse,
  stethoscope: Stethoscope,
  device: Activity,
  code: Code2,
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">Services</Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight lg:text-5xl">
              Four services. One accountable supplier.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              You can take one of these or all four. What you cannot do is end up with three vendors blaming each other while a theatre sits idle.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <FadeInStagger className="grid gap-6 md:grid-cols-2" stagger={0.15}>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? HeartPulse
            return (
              <FadeInItem key={service.slug}>
                <Card className="h-full overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="size-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-col gap-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="size-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.cta.href}
                      className={cn(buttonVariants({ variant: "link", size: "sm" }), "mt-4 px-0")}
                    >
                      {service.cta.label}
                      <ArrowRight className="size-4" />
                    </Link>
                  </CardContent>
                </Card>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </Section>

      <QuoteCTA />
    </>
  )
}
