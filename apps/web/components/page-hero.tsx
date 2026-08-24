import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function PageHero({
  label,
  title,
  subtitle,
  bgImage,
}: {
  label: string
  title: React.ReactNode
  subtitle?: string
  bgImage?: string
}) {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-12 sm:py-16 lg:py-24">
      {bgImage && (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.15]"
            style={{ backgroundImage: `url('${bgImage}')` }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70" aria-hidden />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {label}
            </span>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
