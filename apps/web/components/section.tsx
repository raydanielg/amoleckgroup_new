import { cn } from "@workspace/ui/lib/utils"
import type { ReactNode } from "react"

export function Section({
  children,
  className,
  containerClassName,
}: {
  children: ReactNode
  className?: string
  containerClassName?: string
}) {
  return (
    <section className={cn("py-20 lg:py-28", className)}>
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: "center" | "left"
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        "max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl",
        align === "center" && "mx-auto"
      )}>
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted-foreground text-pretty lg:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
