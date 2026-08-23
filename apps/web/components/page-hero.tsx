import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function PageHero({
  label,
  title,
  subtitle,
}: {
  label: string
  title: React.ReactNode
  subtitle?: string
}) {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {label}
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                {subtitle}
              </p>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
