import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, HeartPulse, Stethoscope, Activity, Code2, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
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
      <PageHero
        label="Services"
        title="Four services. One accountable supplier."
        subtitle="You can take one of these or all four. What you cannot do is end up with three vendors blaming each other while a theatre sits idle."
      />

      <Section>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.icon] ?? HeartPulse
            return (
              <RevealOnScroll key={service.slug} delay={idx * 100}>
                <div className="group h-full overflow-hidden rounded-2xl border border-border">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5 sm:p-6">
                    <Icon className="size-5 text-primary sm:size-6" />
                    <h3 className="mt-3 text-base font-semibold sm:text-lg">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="size-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.cta.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      {service.cta.label}
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </Section>

      <QuoteCTA />
    </>
  )
}
