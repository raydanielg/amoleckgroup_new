import Link from "next/link"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-muted/30">
      <RevealOnScroll className="mx-auto max-w-lg px-4 text-center">
        <p className="text-5xl font-semibold text-primary sm:text-6xl">404</p>
        <h1 className="mt-3 text-xl font-semibold text-foreground sm:mt-4 sm:text-2xl">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
          That page has moved or never existed. Try the{" "}
          <Link href="/equipment" className="font-semibold text-primary underline">
            equipment catalogue
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-primary underline">
            contact us
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/equipment"
            className={cn(buttonVariants({ size: "sm" }), "rounded-md")}
          >
            Equipment catalogue
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-md")}
          >
            Contact us
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  )
}
