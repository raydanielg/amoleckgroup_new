import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/animations"
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
      <section className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">Blog</Badge>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Insights from our biomedical team
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Practical notes on choosing, installing and maintaining medical equipment in Kenya. Written by the people who do the installations.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <FadeIn>
          <Card className="mx-auto max-w-2xl text-center">
            <CardContent className="pt-12 pb-12">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
                <FileText className="size-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">First articles are on the way</h2>
              <p className="mt-4 text-muted-foreground">
                In the meantime, our team is happy to answer equipment questions directly.
              </p>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                Contact us
                <ArrowRight className="size-4" />
              </Link>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn className="mt-12">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-lg font-semibold">Topics we&apos;re working on</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {articleIdeas.map((idea) => (
                <li key={idea} className="flex items-start gap-3 rounded-lg border border-border/40 p-4 text-sm text-muted-foreground">
                  <FileText className="mt-0.5 size-4 shrink-0 text-primary" />
                  {idea}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      <QuoteCTA />
    </>
  )
}
