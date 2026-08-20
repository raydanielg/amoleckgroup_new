import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export function QuoteCTA({
  title = "Let's equip your facility properly.",
  description = "Tell us what you need — a single device, a full department fit-out, or a service contract for equipment you already own. You will get a written quote, not a sales call.",
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 lg:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/request-quote"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            Request a Quote
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            )}
          >
            <Phone className="size-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
