import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { QuoteCTA } from "@/components/quote-cta"

export const metadata: Metadata = {
  title: "Insights — Amoleck Group",
  description: "Practical guidance on equipment selection, servicing and clinic setup from our biomedical team.",
}

const articleIdeas = [
  "How to specify equipment for a ward that has unstable power",
  "What a service contract should include (and what to refuse)",
  "Five questions to ask before signing an equipment tender",
  "Setting up a physiotherapy clinic in Kenya: a realistic equipment budget",
  "Preventive maintenance schedules: what to do monthly, quarterly and annually",
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Insights from our biomedical team"
        subtitle="Practical notes on choosing, installing and maintaining medical equipment in Kenya. Written by the people who do the installations."
      />

      <Section>
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl rounded-2xl border border-border p-12 text-center">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-brand-teal/10">
              <FileText className="size-8 text-brand-teal" />
            </div>
            <h2 className="text-2xl font-semibold">First articles are on the way</h2>
            <p className="mt-4 text-muted-foreground">
              In the meantime, our team is happy to answer equipment questions directly.
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "mt-8 rounded-full")}
            >
              Contact us
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150} className="mt-12">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-lg font-semibold">Topics we&apos;re working on</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {articleIdeas.map((idea) => (
                <li key={idea} className="flex items-start gap-3 rounded-xl border border-border p-4 text-sm text-muted-foreground">
                  <FileText className="mt-0.5 size-4 shrink-0 text-brand-teal" />
                  {idea}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </Section>

      <QuoteCTA />
    </>
  )
}
