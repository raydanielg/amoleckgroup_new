import Link from "next/link"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { FadeIn } from "@/components/animations"

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <FadeIn className="mx-auto max-w-lg px-4 text-center">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
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
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Equipment catalogue
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Contact us
          </Link>
        </div>
      </FadeIn>
    </section>
  )
}
