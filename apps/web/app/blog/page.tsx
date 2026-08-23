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
  "Setting up a physiotherapy clinic in Tanzania: a realistic equipment budget",
  "Preventive maintenance schedules: what to do monthly, quarterly and annually",
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Insights from our biomedical team"
        subtitle="Practical notes on choosing, installing and maintaining medical equipment in Tanzania. Written by the people who do the installations."
      />

      <Section>
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl rounded-2xl border border-border p-5 text-center sm:p-12">
            <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-primary/10 sm:mb-6 sm:size-16">
              <FileText className="size-7 text-primary sm:size-8" />
            </div>
            <h2 className="text-xl font-semibold sm:text-2xl">First articles are on the way</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
              In the meantime, our team is happy to answer equipment questions directly.
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "sm" }), "mt-8 rounded-md")}
            >
              Contact us
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150} className="mt-10 sm:mt-12">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-base font-semibold sm:text-lg">Topics we&apos;re working on</h3>
            <ul className="mt-4 flex flex-col gap-2 sm:gap-3">
              {articleIdeas.map((idea) => (
                <li key={idea} className="flex items-start gap-3 rounded-xl border border-border p-4 text-sm text-muted-foreground">
                  <FileText className="mt-0.5 size-4 shrink-0 text-primary" />
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
