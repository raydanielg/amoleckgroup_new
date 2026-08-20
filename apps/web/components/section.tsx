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
    <section className={cn("py-16 lg:py-24", className)}>
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8", containerClassName)}>
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
  align = "center",
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
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted-foreground lg:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
