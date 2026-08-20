# UI Guide — navbar, sections, and the live preview

This sits on top of `components/motion/README.md`. That file documents the raw
animation primitives; this one documents the finished pieces built from them.

Everything here was verified with a real `next build` and screenshotted in a
browser before being handed over — the layout, the animations and the colour
inheritance all work.

---

## What you now have

```
apps/web/
├── lib/
│   └── site-config.ts              ← ALL your details live here. Edit this first.
├── components/
│   ├── motion/                     ← animation primitives (see its own README)
│   ├── nav/site-navbar.tsx         ← new animated navbar
│   ├── footer/site-footer.tsx      ← new animated footer
│   └── blocks/sections.tsx         ← Hero, StatsBand, FeatureGrid, FAQ, CTABand…
└── app/
    └── motion-preview/page.tsx     ← live showroom of everything
```

Your original `components/site-navbar.tsx` and `components/site-footer.tsx` are
untouched. Swap the imports when you're happy with the replacements, then delete
the old ones.

---

## Step 1 — see it running

```bash
npm run dev
```

Open **http://localhost:3000/motion-preview**.

That page renders every block and every effect using *your* theme tokens. Scroll
it, hover the cards, click the ripple button, move your mouse near the magnetic
button, toggle dark mode. Decide what you want where before you touch a real page.

The route isn't linked from anywhere. Delete `app/motion-preview/` when you're
done, or keep it as a reference.

---

## Step 2 — fill in `lib/site-config.ts`

Five fields are marked `// TODO`:

| Field | What it is |
|---|---|
| `contact.phone` / `phoneHref` | Displayed number, and the `tel:` link |
| `contact.whatsapp` | Your `wa.me/…` link |
| `contact.email` | Public enquiries address |
| `contact.address` | Office lines plus a Google Maps URL |
| `foundedYear` | Drives the "years serving Kenya" counter |

Also review `social` (placeholder URLs), `credentials` (only claim what's true),
and `ticker`.

Both the navbar and footer read from this file, so you edit these once.

---

## Step 3 — swap the navbar and footer

In `app/layout.tsx`:

```tsx
import "./globals.css";
import { MotionProvider, PageTransition } from "@/components/motion";
import { SiteNavbar } from "@/components/nav/site-navbar";
import { SiteFooter } from "@/components/footer/site-footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionProvider />
        <SiteNavbar />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
```

Don't forget the CSS import and `--mo-accent` — see the motion README, section 1.

---

## The navbar

- Transparent and roomy at the top; frosts, shrinks and gains a border once you scroll.
- Slides out of the way on scroll down, returns instantly on scroll up.
- A utility bar with your phone and email folds away as soon as you scroll.
- **Services** opens a panel with a one-line blurb per sub-service, items staggering in.
- The current route keeps its underline lit.
- Mobile becomes a full-screen panel: items slide in one after another, body scroll locks, Escape closes it, and a "Request a quote" button is pinned to the bottom.

Add or remove links by editing `site.mainNav`. Any item with a `children` array
automatically gets the dropdown treatment.

---

## The footer

Four bands: a closing call to action, a scrolling value-prop ticker, four columns
(brand + counters + social, Services, Explore, Contact), and a legal bar.

The two counters animate from zero when they scroll into view. `500+` is
hard-coded in `site-footer.tsx` — search for `to={500}` and change it, or delete
that block if you'd rather not publish a number.

---

## The section blocks

Import from `@/components/blocks/sections`.

| Block | Use it for |
|---|---|
| `<Section background="aurora \| grid \| beams \| particles \| glow">` | The shell for any section — handles container, padding and ambient background |
| `<SectionHeading eyebrow title description>` | Every section's header. The title arrives word by word |
| `<Hero>` | Page hero with a typewriter, badge, two CTAs and a parallax media slot |
| `<StatsBand stats={[…]}>` | A row of counters that animate on scroll |
| `<FeatureGrid items={[…]}>` | Service / equipment cards. ≤3 items get 3D tilt, more get the lighter spotlight |
| `<ProcessSteps steps={[…]}>` | Numbered zig-zag timeline with a drawn spine |
| `<LogoWall items={[…]}>` | Scrolling band of partner or manufacturer names |
| `<FAQ items={[…]}>` | Accordion that animates its height properly |
| `<TestimonialWall items={[…]}>` | Quote cards — **real quotes only** |
| `<CTABand>` | The closer. Put one at the bottom of every page |

### Example: rebuilding a services page

```tsx
import { CTABand, FeatureGrid, Section, SectionHeading } from "@/components/blocks/sections";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <main>
      <Section background="glow">
        <SectionHeading
          eyebrow="What we do"
          title="Four services. One accountable supplier."
          description="You can take one of these or all four."
        />
        <div className="mt-14">
          <FeatureGrid items={services} columns={3} />
        </div>
      </Section>

      <CTABand
        title="Ready to equip your facility?"
        primaryCta={{ label: "Request a quote", href: "/request-quote" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
      />
    </main>
  );
}
```

`FeatureGrid` expects `{ title, description, href?, icon?, tag? }` per item — map
your existing `lib/data.ts` shapes into that.

---

## Things to watch

**Two ambient layers per section is the ceiling.** `Section` already picks a
sensible combination for each `background` value. Adding a third costs frames on
mid-range phones for no visual gain.

**Testimonials must be real.** The preview page ships obvious `[Placeholder]`
text on purpose. Publish real, permitted quotes with a name, role and facility —
or delete the section. An invented endorsement is the one thing on this site that
could actually cost you.

**Numbers must be real.** Same rule. Three honest figures beat four inflated ones.

**Accessibility is handled, but don't undo it.** Every background is `aria-hidden`
and `pointer-events: none`; `TextReveal` keeps a full `aria-label`; and
`prefers-reduced-motion` collapses the entire kit to a static page. Keep
`aria-hidden` on anything decorative you add.

**Performance.** The preview page — the heaviest thing here, with every effect on
screen at once — builds to 6.5 kB with 121 kB first-load JS. A normal page will
be lighter. There are no animation libraries: no Framer Motion, no GSAP, nothing
added to `package.json`.
