# Amoleck Motion Kit

A complete animation layer for the site. **Zero new npm packages** — no Framer
Motion, no GSAP, no `npm install` at all. Everything is React + CSS + the
IntersectionObserver the browser already ships.

Nothing here changes your colours. Every effect draws with `currentColor` or a
single `--mo-accent` variable, so the palette you have today is the palette you
keep.

---

## 1. Wire it up (three edits, ~2 minutes)

### a) Import the stylesheet

At the very top of `apps/web/app/globals.css`:

```css
@import "../components/motion/motion.css";
```

> If your globals.css starts with `@import "tailwindcss";`, put the motion
> import on the line **after** it.

### b) Mount the persistent layer

In `apps/web/app/layout.tsx`, inside `<body>`:

```tsx
import { MotionProvider, PageTransition } from "@/components/motion";

// ...

<body className={/* your existing classes */}>
  <MotionProvider />          {/* scroll bar, custom cursor, back-to-top */}
  <SiteNavbar />
  <PageTransition>{children}</PageTransition>
  <SiteFooter />
</body>
```

`MotionProvider` takes flags if you want less: `<MotionProvider cursor={false} />`.

### c) Pick your accent (optional but recommended)

Anywhere in `globals.css`, point the kit at a colour you already use:

```css
:root {
  --mo-accent: var(--primary);              /* Tailwind v4 / shadcn v4 */
  /* --mo-accent: hsl(var(--primary));      ← if you are on shadcn v3   */
  --mo-accent-soft: color-mix(in oklab, var(--mo-accent) 22%, transparent);
  --mo-accent-faint: color-mix(in oklab, var(--mo-accent) 10%, transparent);
}
```

Leave this out and everything still works — but the scroll-progress bar, the
custom cursor and the back-to-top ring all fall back to your body text colour,
which usually means black. Setting `--mo-accent` is what makes them brand-coloured.

> Both import styles are verified against a real `next build`: the
> `@import` line in `globals.css` shown above, or
> `import "@/components/motion/motion.css";` in `app/layout.tsx`. Use whichever
> you prefer.

**Global speed dial:** `--mo-speed: 1` in `:root`. Set `1.4` for a slower,
more cinematic feel, or `0.75` to make the whole site snappier. One number,
every animation.

---

## 2. Cheat sheet

| Import | What it does | Where it shines |
| --- | --- | --- |
| `<Reveal>` | Fade + glide in on scroll | Wrap **every** block on every page |
| `<Stagger>` | Reveals children one after another | Card grids, feature lists, nav items |
| `<TextReveal text="…" />` | Heading arrives word by word | Every `<h1>` and `<h2>` |
| `<Typewriter words={[…]} />` | Types and deletes on a loop | Hero subheading |
| `<Counter to={500} suffix="+" />` | Number counts up when seen | Stats band |
| `<ShinyText>` / `<GradientText>` | Light sweeps across letters | Logotype, hero keyword |
| `<TiltCard>` | Leans in 3D toward the cursor | Featured equipment, service cards |
| `<SpotlightCard>` | Glow follows the pointer | Dense card grids (cheaper than tilt) |
| `<GlowCard>` | Highlight laps the border | The one card you want to sell |
| `<FlipCard front back />` | Flips on hover/focus | Team members, spec sheets |
| `<MagneticButton>` | Pulls toward the cursor | Primary CTA only |
| `<RippleButton>` | Ripple from the click point | Forms, secondary buttons |
| `<ShimmerButton>` | Light sweeps the surface | "Request a quote" |
| `<ArrowLink>` | Arrow slides on hover | "Learn more" links |
| `<Parallax speed={0.3}>` | Drifts against the scroll | Hero art, decorative shapes |
| `<ScrollScale>` | Grows toward viewport centre | Large images |
| `<ParallaxImage src="…" />` | Background image drifts in frame | Section banners |
| `<StickyStack>` | Cards pin and stack while scrolling | Process / "how it works" |
| `<Marquee>` / `<TickerStrip>` | Endless ticker | Partner logos, certifications |
| `<AuroraBackground>` | Soft drifting colour fields | Hero, CTA band |
| `<GridBackground>` / `<DotGrid>` | Technical grid, drifting | Equipment, technology |
| `<BeamField>` | Light shafts falling | Dark sections |
| `<ParticleField>` | Slow floating motes | Hero, footer |
| `<BlobField>` | Big organic morphing shapes | Hero |
| `<SectionGlow>` | One pool of light | Behind a heading or CTA |
| `<NoiseOverlay>` | Whisper of film grain | Over any gradient |
| `<AnimatedDivider>` | Hairline draws itself | Between sections |

### CSS classes (no import needed, just add to `className`)

`mo-lift` `mo-press` `mo-zoom-media` `mo-underline` `mo-arrow`
`mo-sweep-border` `mo-glass` `mo-shimmer-surface` `mo-spotlight`
`mo-float` `mo-float-x` `mo-float-slow` `mo-spin-slow` `mo-glow-pulse`
`mo-pop-in` `mo-bounce-soft` `mo-live-dot` `mo-shine` `mo-gradient-text`
`mo-divider` `mo-d-1` … `mo-d-5`

The two you will use constantly: **`mo-lift`** on every card, **`mo-underline`**
on every nav and footer link.

---

## 3. Page-by-page recipes

### `components/site-navbar.tsx`

```tsx
"use client";
import { useScrolled, useScrollDirection } from "@/components/motion";

const scrolled = useScrolled(24);
const direction = useScrollDirection();

<header
  className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
    scrolled ? "mo-glass border-b py-2 shadow-sm" : "py-5"
  } ${direction === "down" ? "-translate-y-full" : "translate-y-0"}`}
>
```

Then add `mo-underline` to each nav link, and `data-active="true"` on the one
matching the current route so its underline stays lit.

### `app/page.tsx` — home

```tsx
<section className="relative overflow-hidden">
  <AuroraBackground intensity={0.2} />
  <ParticleField count={22} />
  <NoiseOverlay />

  <div className="relative z-10">
    <Reveal direction="down" duration={800}>
      <span className="badge"><span className="mo-live-dot" /> Trusted since …</span>
    </Reveal>

    <h1>
      <TextReveal text="Medical equipment you can rely on" by="word" step={60} />
    </h1>

    <Reveal delay={420}>
      <p>We supply <Typewriter words={["hospitals", "clinics", "physios"]} /> across Kenya.</p>
    </Reveal>

    <Reveal delay={560} direction="zoom">
      <MagneticButton as={Link} href="/request-quote" className="btn-primary">
        Request a quote
      </MagneticButton>
    </Reveal>
  </div>
</section>

<TickerStrip items={["Certified technicians", "Nationwide delivery", "24/7 support"]} />

<Stagger step={110} className="grid gap-6 md:grid-cols-3">
  {services.map((s) => (
    <TiltCard key={s.title} className="mo-lift rounded-2xl border p-6">
      …
    </TiltCard>
  ))}
</Stagger>

{/* stats band */}
<Stagger step={140} className="grid grid-cols-2 md:grid-cols-4 gap-8">
  <div><Counter to={500} suffix="+" /><p>Devices installed</p></div>
  <div><Counter to={12} suffix=" yrs" /><p>Experience</p></div>
  <div><Counter to={98} suffix="%" /><p>Uptime</p></div>
  <div><Counter to={24} suffix="/7" separator="" /><p>Support</p></div>
</Stagger>
```

### `app/services/**` and `app/equipment` — card grids

```tsx
<Stagger step={90} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => (
    <SpotlightCard key={item.id} className="mo-lift group rounded-2xl border p-6">
      <div className="mo-zoom-media rounded-xl">
        <img src={item.image} alt="" />
      </div>
      <h3>{item.title}</h3>
      <ArrowLink as={Link} href={item.href}>Learn more</ArrowLink>
    </SpotlightCard>
  ))}
</Stagger>
```

Use `SpotlightCard` for grids of six or more, `TiltCard` for three or fewer.

### `app/technology` — lean technical

```tsx
<section className="relative overflow-hidden">
  <GridBackground size={44} intensity={0.1} />
  <BeamField count={8} />
  <div className="relative z-10">…</div>
</section>
```

### `app/physiotherapy` / `app/services/physiotherapy` — the process

```tsx
<StickyStack top="14vh" gap={28}>
  {steps.map((step, i) => (
    <div key={i} className="mo-glass rounded-3xl border p-10">
      <span className="text-6xl opacity-20">{String(i + 1).padStart(2, "0")}</span>
      <h3>{step.title}</h3>
    </div>
  ))}
</StickyStack>
```

### `app/about` — story + numbers

`<Reveal direction="left">` the text column, `<Reveal direction="right">` the
image column, and put the image inside `<ScrollScale>` so it breathes as you
pass it. Team photos work well as `<FlipCard>` (portrait on the front, role and
bio on the back).

### `app/contact` and `app/request-quote` — forms

```tsx
<Stagger step={70} className="grid gap-5">
  <input className="mo-press transition focus:scale-[1.01]" … />
  <textarea … />
</Stagger>

<RippleButton type="submit" className="btn-primary">Send</RippleButton>
```

Add `<span className="mo-live-dot" /> We reply within 2 hours` above the form —
small touch, big trust signal.

### `app/blog` — post cards

`<Stagger>` the list; each card gets `mo-lift` plus a `mo-zoom-media` wrapper
around the thumbnail. Titles get `mo-underline`.

### `app/privacy-policy` and `app/terms` — long text

Keep it calm. One `<Reveal>` per `<h2>` section, nothing else. These pages
should feel fast and readable, not showy.

### `components/quote-cta.tsx` — the closer

```tsx
<GlowCard always speed={4} className="relative overflow-hidden rounded-3xl border p-12">
  <SectionGlow y="30%" intensity={0.22} />
  <div className="relative z-10">
    <TextReveal as="h2" text="Ready to equip your facility?" />
    <ShimmerButton as={Link} href="/request-quote" className="btn-primary mt-6">
      Get your quote
    </ShimmerButton>
  </div>
</GlowCard>
```

### `components/site-footer.tsx`

`mo-underline` on every link, `mo-lift` on the social icons, and a
`<ParticleField count={14} />` behind it for a quiet, expensive finish.

### Between any two sections

```tsx
<AnimatedDivider className="my-16" />
```

---

## 4. Notes worth knowing

**Server vs client.** Each file carries its own `"use client"`, so you can
import from `@/components/motion` inside a server component without adding a
directive to your page. But if you call a hook (`useScrolled`, `useInView`)
directly in a page, that page needs `"use client"` at the top.

**The `as` prop.** `Reveal`, `MagneticButton`, `RippleButton`, `ShimmerButton`
and `ArrowLink` accept `as={Link}` or `as="a"`. The component you pass must
forward refs — Next's `<Link>` does, and so do all plain HTML tags.

**Backgrounds need a stage.** Every background component is
`position: absolute; inset: 0`. Give the parent `relative overflow-hidden`, and
put your content in a sibling with `relative z-10`.

**Don't stack everything.** Two ambient layers per section is the ceiling —
e.g. Aurora + Noise, or Grid + Beams. Three starts to look busy and costs
frames on mid-range phones.

**Performance.** No JavaScript animation loops except the custom cursor and the
scroll listeners, which are all `requestAnimationFrame`-throttled and passive.
Reveals are pure CSS transitions driven by one IntersectionObserver each, and
each observer disconnects after it fires. `will-change` is dropped once a
reveal finishes so the compositor isn't holding layers forever.

**Accessibility.** `prefers-reduced-motion: reduce` collapses the entire kit:
no transforms, no loops, no cursor, no typewriter — just the finished page,
instantly. `TextReveal` keeps an `aria-label` with the full string so screen
readers never hear it letter by letter. Every background is `aria-hidden` and
`pointer-events: none`.

**Touch devices.** Tilt, magnetic pull and the custom cursor switch themselves
off on coarse pointers. Reveals, counters, marquees and parallax stay on.

---

## 5. Files

```
components/motion/
├── motion.css        keyframes, utility classes, reduced-motion guard
├── use-motion.ts     hooks: useInView, useScrolled, useScrollProgress, …
├── reveal.tsx        Reveal, Stagger, InViewFlag, AnimatedDivider
├── text.tsx          TextReveal, Typewriter, ShinyText, GradientText, Counter
├── cards.tsx         TiltCard, SpotlightCard, GlowCard, FlipCard
├── buttons.tsx       MagneticButton, RippleButton, ShimmerButton, ArrowLink
├── parallax.tsx      Parallax, ParallaxImage, ScrollScale, StickyStack
├── marquee.tsx       Marquee, TickerStrip
├── backgrounds.tsx   Aurora, Grid, DotGrid, Beams, Particles, Blobs, Noise, Glow
├── chrome.tsx        ScrollProgress, PageTransition, CustomCursor, ScrollToTop
└── index.ts          barrel — import everything from "@/components/motion"
```
