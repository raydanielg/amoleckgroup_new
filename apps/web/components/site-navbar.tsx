"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import { Button, buttonVariants } from "@workspace/ui/components/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@workspace/ui/components/sheet"
import { navLinks, siteConfig } from "@/lib/data"

export function SiteNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-primary">AMOLECK</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/request-quote"
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            Request a Quote
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <span className="text-primary">AMOLECK</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-primary",
                      pathname === link.href ? "bg-accent text-primary" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <SheetClose
                  render={
                    <Link
                      href="/request-quote"
                      className={cn(buttonVariants({ className: "mt-4" }))}
                    />
                  }
                >
                  Request a Quote
                </SheetClose>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="mt-2 flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground"
                >
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
