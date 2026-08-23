"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import { buttonVariants } from "@workspace/ui/components/button"
import { navLinks, siteConfig } from "@/lib/data"

export function SiteNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = prev }
  }, [open])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/95 backdrop-blur-md py-2"
            : "border-b border-transparent py-4"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex shrink-0 items-center gap-2.5">
            <span
              className={cn(
                "grid place-items-center rounded-xl bg-primary font-bold text-primary-foreground transition-all duration-500",
                scrolled ? "h-9 w-9 text-sm" : "h-11 w-11 text-base"
              )}
            >
              A
            </span>
            <span
              className={cn(
                "font-semibold tracking-tight transition-all duration-500",
                scrolled ? "text-base" : "text-lg"
              )}
            >
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-3 right-3 h-px bg-brand-teal transition-all duration-300",
                      active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/request-quote"
              className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex rounded-full")}
            >
              Request a Quote
            </Link>

            <button
              type="button"
              onClick={() => setOpen(v => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-border bg-background transition-transform duration-500",
            open ? "translate-x-0" : "translate-x-full"
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <div className="flex-1 overflow-y-auto px-6 pb-8 pt-24">
            <nav className="flex flex-col">
              {navLinks.map((link, index) => {
                const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`))
                return (
                  <div
                    key={link.href}
                    style={{
                      transform: open ? "none" : "translateX(28px)",
                      opacity: open ? 1 : 0,
                      transition: `transform 520ms cubic-bezier(0.22,1,0.36,1) ${index * 55}ms, opacity 520ms ease ${index * 55}ms`,
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block border-b border-border py-4 text-lg font-medium transition-colors",
                        active ? "text-brand-teal" : "hover:text-brand-teal"
                      )}
                    >
                      {link.label}
                    </Link>
                  </div>
                )
              })}
            </nav>

            <div
              className="mt-8 space-y-3 text-sm"
              style={{
                opacity: open ? 1 : 0,
                transition: "opacity 500ms ease 380ms",
              }}
            >
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 font-medium text-foreground"
              >
                <Phone className="size-4 text-brand-teal" />
                {siteConfig.phone}
              </a>
              <Link
                href="/request-quote"
                className={cn(buttonVariants({ className: "mt-4 w-full rounded-full" }))}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
