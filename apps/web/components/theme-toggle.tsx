"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@workspace/ui/lib/utils"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border sm:h-11 sm:w-11"
        )}
        aria-hidden
      />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border transition-colors hover:bg-muted sm:h-11 sm:w-11"
      )}
    >
      {isDark ? (
        <Sun className="size-5 transition-transform duration-300" />
      ) : (
        <Moon className="size-5 transition-transform duration-300" />
      )}
    </button>
  )
}
