"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MagneticButton,
  ShimmerButton,
  cx,
  useScrollDirection,
  useScrolled,
} from "@/components/motion";
import { site } from "@/lib/site-config";

/* ============================================================================
   SiteNavbar

   Behaviour:
     • Transparent and roomy at the top of the page.
     • Frosts, shrinks and gains a border once you scroll.
     • Slides away when you scroll down, returns the moment you scroll up.
     • The link for the current route keeps its underline lit.
     • "Services" opens an animated panel with a blurb per sub-service.
     • On mobile it becomes a full-screen menu whose items stagger in.

   Colours come entirely from your theme tokens, so it matches whatever palette
   the site already uses, in light and dark.
   ========================================================================== */

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300"
      style={{ transform: open ? "rotate(180deg)" : "none" }}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNavbar() {
  const pathname = usePathname() || "/";
  const scrolled = useScrolled(28);
  const direction = useScrollDirection(120);

  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimer = React.useRef<number | undefined>(undefined);

  // Close everything on navigation.
  React.useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  React.useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  // Escape closes the mobile menu and any open dropdown.
  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMobileOpen(false);
      setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const hidden = direction === "down" && !mobileOpen && !openMenu;

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Utility bar — phone and email, folds away as soon as you scroll.  */}
      {/* ---------------------------------------------------------------- */}
      <div
        className={cx(
          "hidden overflow-hidden border-b border-border bg-muted/40 transition-all duration-500 lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-muted-foreground lg:px-8">
          <span className="inline-flex items-center gap-2">
            <span className="mo-live-dot text-primary" />
            Replies within 2 working hours
          </span>
          <div className="flex items-center gap-6">
            <a
              href={site.contact.phoneHref}
              className="mo-underline transition-colors hover:text-foreground"
            >
              {site.contact.phone}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="mo-underline transition-colors hover:text-foreground"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Main bar                                                          */}
      {/* ---------------------------------------------------------------- */}
      <header
        className={cx(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "mo-glass border-b border-border py-2 shadow-sm"
            : "border-b border-transparent py-4",
          hidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
          {/* Logo ------------------------------------------------------- */}
          <Link
            href="/"
            className="group inline-flex shrink-0 items-center gap-2.5"
            aria-label={site.name}
          >
            <span
              className={cx(
                "grid place-items-center rounded-xl bg-primary font-bold text-primary-foreground transition-all duration-500",
                scrolled ? "h-9 w-9 text-sm" : "h-11 w-11 text-base",
              )}
            >
              A
            </span>
            <span
              className={cx(
                "font-semibold tracking-tight transition-all duration-500",
                scrolled ? "text-base" : "text-lg",
              )}
            >
              {site.name}
            </span>
          </Link>

          {/* Desktop nav ------------------------------------------------ */}
          <nav className="hidden items-center gap-1 xl:flex">
            {site.mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              const hasChildren = "children" in item;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-active={active ? "true" : undefined}
                    className={cx(
                      "mo-underline rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              const open = openMenu === item.label;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(item.label);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={item.href}
                    data-active={active ? "true" : undefined}
                    aria-expanded={open}
                    onFocus={() => setOpenMenu(item.label)}
                    className={cx(
                      "mo-underline inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                    <ChevronIcon open={open} />
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    className={cx(
                      "absolute left-1/2 top-full z-50 w-[30rem] -translate-x-1/2 pt-3 transition-all duration-300",
                      open
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0",
                    )}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="mo-glass overflow-hidden rounded-2xl border border-border p-2 shadow-xl">
                      {item.children.map((child, index) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                          style={{
                            transitionDelay: open ? `${index * 45}ms` : "0ms",
                            transform: open ? "none" : "translateY(6px)",
                            opacity: open ? 1 : 0,
                            transitionProperty: "transform, opacity, background-color",
                            transitionDuration: "380ms",
                          }}
                        >
                          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </span>
                          <span>
                            <span className="block text-sm font-semibold">
                              {child.label}
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                              {child.blurb}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA ------------------------------------------------ */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <MagneticButton
              as={Link}
              href="/request-quote"
              strength={9}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md"
            >
              Request a quote
            </MagneticButton>
          </div>

          {/* Mobile toggle ---------------------------------------------- */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="relative z-50 grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border xl:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex h-4 w-5 flex-col justify-between">
              <span
                className="h-0.5 w-full origin-left rounded bg-foreground transition-all duration-300"
                style={{
                  transform: mobileOpen ? "rotate(45deg) translate(1px, -1px)" : "none",
                }}
              />
              <span
                className="h-0.5 w-full rounded bg-foreground transition-all duration-300"
                style={{
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? "translateX(-10px)" : "none",
                }}
              />
              <span
                className="h-0.5 w-full origin-left rounded bg-foreground transition-all duration-300"
                style={{
                  transform: mobileOpen ? "rotate(-45deg) translate(1px, 1px)" : "none",
                }}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Mobile menu                                                       */}
      {/* ---------------------------------------------------------------- */}
      <div
        className={cx(
          "fixed inset-0 z-40 xl:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={cx(
            "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-400",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Panel */}
        <div
          className={cx(
            "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-border bg-background transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <div className="flex-1 overflow-y-auto px-6 pb-8 pt-24">
            <nav className="flex flex-col">
              {site.mainNav.map((item, index) => {
                const active = isActive(pathname, item.href);
                const hasChildren = "children" in item;

                return (
                  <div
                    key={item.href}
                    style={{
                      transform: mobileOpen ? "none" : "translateX(28px)",
                      opacity: mobileOpen ? 1 : 0,
                      transition: `transform 520ms cubic-bezier(0.22,1,0.36,1) ${index * 55}ms, opacity 520ms ease ${index * 55}ms`,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cx(
                        "block border-b border-border py-4 text-lg font-medium transition-colors",
                        active ? "text-primary" : "hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <div className="flex flex-col gap-1 border-b border-border py-3 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Contact block */}
            <div
              className="mt-8 space-y-3 text-sm"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transition: "opacity 500ms ease 380ms",
              }}
            >
              <a
                href={site.contact.phoneHref}
                className="block font-medium text-foreground"
              >
                {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="block text-muted-foreground"
              >
                {site.contact.email}
              </a>
            </div>
          </div>

          {/* Sticky CTA */}
          <div className="border-t border-border p-6">
            <ShimmerButton
              as={Link}
              href="/request-quote"
              className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              Request a quote
            </ShimmerButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteNavbar;
