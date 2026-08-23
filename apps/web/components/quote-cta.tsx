import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function QuoteCTA({
  title = "Let's equip your facility properly.",
  description = "Tell us what you need — a single device, a full department fit-out, or a service contract for equipment you already own. You will get a written quote, not a sales call.",
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground text-balance lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground text-pretty lg:text-lg">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/request-quote"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
            >
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full"
              )}
            >
              <Phone className="size-4" />
              Contact Us
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
