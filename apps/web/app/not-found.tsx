import Link from "next/link"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-brand-ink">
      <RevealOnScroll className="mx-auto max-w-lg px-4 text-center">
        <p className="text-6xl font-semibold text-brand-teal">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-brand-cream">Page not found</h1>
        <p className="mt-4 text-brand-cream/50">
          That page has moved or never existed. Try the{" "}
          <Link href="/equipment" className="font-semibold text-brand-teal underline">
            equipment catalogue
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-brand-teal underline">
            contact us
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/equipment"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
          >
            Equipment catalogue
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full border-brand-cream/20 bg-transparent text-brand-cream hover:bg-brand-cream/10 hover:text-brand-cream")}
          >
            Contact us
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  )
}
