import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and articles on healthcare, physiotherapy, medical equipment, and technology from Amoleck Group.",
}

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">Blog</Badge>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Insights &amp; Articles
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Stay informed with the latest insights on healthcare, physiotherapy, medical equipment, and technology.
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
              <h2 className="text-2xl font-bold">Blog Coming Soon</h2>
              <p className="mt-4 text-muted-foreground">
                We&apos;re working on bringing you insightful articles about healthcare, technology, and innovation. Check back soon for updates.
              </p>
              <Link
                href="/request-quote"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                Request a Quote
                <ArrowRight className="size-4" />
              </Link>
            </CardContent>
          </Card>
        </FadeIn>
      </Section>

      <QuoteCTA />
    </>
  )
}
