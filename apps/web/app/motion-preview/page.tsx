"use client";

/* ============================================================================
   /motion-preview  —  a live showroom.

   Run `npm run dev` and open http://localhost:3000/motion-preview to see every
   animation running inside your own theme, with your own colours, in light and
   dark mode.

   This route is for you, not for customers. Delete the folder when you are
   done, or leave it — it is not linked from anywhere.
   ========================================================================== */

import Link from "next/link";
import {
  CTABand,
  FAQ,
  FeatureGrid,
  Hero,
  LogoWall,
  ProcessSteps,
  Section,
  SectionHeading,
  StatsBand,
  TestimonialWall,
} from "@/components/blocks/sections";
import {
  AnimatedDivider,
  Counter,
  FlipCard,
  GlowCard,
  GradientText,
  MagneticButton,
  Marquee,
  Reveal,
  RippleButton,
  ShinyText,
  SpotlightCard,
  Stagger,
  StickyStack,
  TextReveal,
  TiltCard,
  Typewriter,
} from "@/components/motion";

const boxIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 8v8a2 2 0 0 1-1 1.7l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.7l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8z" />
    <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
  </svg>
);

const services = [
  {
    title: "Medical Equipment",
    description:
      "Diagnostic, surgical, ward and laboratory equipment — sourced from manufacturers we represent directly.",
    href: "/services/medical",
    icon: boxIcon,
  },
  {
    title: "Physiotherapy Solutions",
    description:
      "Complete rehabilitation setups: therapy tables, electrotherapy, exercise and mobility equipment.",
    href: "/services/physiotherapy",
    icon: boxIcon,
  },
  {
    title: "Healthcare Technology",
    description:
      "Clinical systems and diagnostic integration, configured around the equipment you already own.",
    href: "/services/technology",
    icon: boxIcon,
  },
];

const catalogue = [
  { title: "Patient Monitors", description: "Multi-parameter bedside and transport monitors.", tag: "Diagnostics", icon: boxIcon },
  { title: "Therapy Tables", description: "Hydraulic and electric treatment couches.", tag: "Physio", icon: boxIcon },
  { title: "Ultrasound", description: "Portable and cart-based diagnostic imaging.", tag: "Imaging", icon: boxIcon },
  { title: "Electrotherapy", description: "TENS, ultrasound therapy and shortwave units.", tag: "Physio", icon: boxIcon },
  { title: "Autoclaves", description: "Benchtop and floor-standing sterilisers.", tag: "Theatre", icon: boxIcon },
  { title: "Mobility Aids", description: "Wheelchairs, walkers and transfer equipment.", tag: "Mobility", icon: boxIcon },
];

const steps = [
  { title: "Tell us the need", description: "A call or the quote form. Describe the department, the budget range and the timeline." },
  { title: "We specify", description: "We recommend equipment that fits the room, the power supply and the staff you have." },
  { title: "Written quote", description: "Full specification, landed price, lead time and warranty terms in one document." },
  { title: "Delivery & installation", description: "We deliver, install, commission and train your staff on site." },
  { title: "We stay", description: "Preventive maintenance, calibration and callout under a service contract." },
];

const faqs = [
  { question: "Do you install what you supply?", answer: "Yes. Commissioning, calibration and staff training are part of the quoted price, not a separate line item added afterwards." },
  { question: "How long do spare parts take?", answer: "We hold stock for the equipment we supply, so most faults are resolved in days rather than months. Lead times are stated in every quote." },
  { question: "Do you service equipment you did not sell?", answer: "Often, yes. Send us the make and model and we will tell you honestly whether we can support it." },
  { question: "Can you work with a tender process?", answer: "We respond to tenders regularly and can supply full technical specifications and compliance documentation." },
];

export default function MotionPreviewPage() {
  return (
    <main>
      {/* ---------------------------------------------------------------- */}
      <Hero
        badge="Preview — every animation, your palette"
        title="Medical equipment that keeps working after the invoice is paid."
        descriptionBefore="We supply, install and service equipment for"
        rotatingWords={["hospitals", "clinics", "physio practices", "laboratories"]}
        descriptionAfter="across Kenya."
        primaryCta={{ label: "Request a quote", href: "/request-quote" }}
        secondaryCta={{ label: "Browse equipment", href: "/equipment" }}
        media={
          <div className="mo-sweep-border rounded-3xl border border-border bg-muted/40 p-10 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Hero media slot
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Drop an <code className="rounded bg-background px-1.5 py-0.5">
                &lt;Image&gt;
              </code>{" "}
              here. It inherits the parallax and scroll-scale automatically.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { v: 500, s: "+", l: "Installs" },
                { v: 47, s: "", l: "Counties" },
                { v: 24, s: "/7", l: "Support" },
              ].map((stat) => (
                <div key={stat.l}>
                  <div className="text-2xl font-semibold tabular-nums text-primary">
                    <Counter to={stat.v} suffix={stat.s} separator="" />
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* ---------------------------------------------------------------- */}
      <StatsBand
        stats={[
          { value: 11, suffix: "+", label: "Years serving Kenya" },
          { value: 500, suffix: "+", label: "Installations" },
          { value: 47, label: "Counties covered" },
          { value: 24, suffix: "/7", label: "Emergency support" },
        ]}
      />

      {/* ---------------------------------------------------------------- */}
      <Section background="glow">
        <SectionHeading
          eyebrow="What we do"
          title="Four services. One accountable supplier."
          description="Most facilities juggle one vendor for supply, another for installation, and a third who never shows up for repairs. We do all three."
        />
        <div className="mt-14">
          <FeatureGrid items={services} columns={3} />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section background="grid" muted>
        <SectionHeading
          eyebrow="Catalogue"
          title="A selection of what we supply."
          description="Six-plus cards switch from 3D tilt to the lighter spotlight treatment automatically."
        />
        <div className="mt-14">
          <FeatureGrid items={catalogue} columns={3} />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section background="particles">
        <SectionHeading
          eyebrow="How we work"
          title="Five steps, no surprises."
          align="center"
        />
        <div className="mt-16">
          <ProcessSteps steps={steps} />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <LogoWall
        title="Manufacturers we represent"
        items={[
          "PLACEHOLDER ONE",
          "PLACEHOLDER TWO",
          "PLACEHOLDER THREE",
          "PLACEHOLDER FOUR",
          "PLACEHOLDER FIVE",
        ]}
      />

      {/* ---------------------------------------------------------------- */}
      <Section background="beams">
        <SectionHeading
          eyebrow="Scroll story"
          title="Cards that pin and stack as you scroll."
          description="StickyStack turns a plain list into something worth scrolling through."
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <StickyStack top="16vh" gap={26}>
            {steps.slice(0, 4).map((step, index) => (
              <div
                key={step.title}
                className="mo-glass rounded-3xl border border-border p-10 shadow-lg"
              >
                <span className="text-6xl font-semibold tabular-nums text-primary/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </StickyStack>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section muted>
        <SectionHeading
          eyebrow="Questions"
          title="Things facilities ask before they buy."
        />
        <div className="mt-14">
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section>
        <SectionHeading
          eyebrow="⚠ Replace with real quotes"
          title="What clients say."
          description="These are placeholders. Publish only real, permitted quotes — or delete the section."
        />
        <div className="mt-14">
          <TestimonialWall
            items={[
              { quote: "[Placeholder — replace with a real customer quote before publishing.]", name: "[Name]", role: "[Role]", facility: "[Facility]" },
              { quote: "[Placeholder — replace with a real customer quote before publishing.]", name: "[Name]", role: "[Role]", facility: "[Facility]" },
              { quote: "[Placeholder — replace with a real customer quote before publishing.]", name: "[Name]", role: "[Role]", facility: "[Facility]" },
            ]}
          />
        </div>
      </Section>

      {/* ================================================================ */}
      {/* Component lab                                                     */}
      {/* ================================================================ */}

      <Section background="aurora" muted>
        <SectionHeading
          eyebrow="Component lab"
          title="Every effect, in one place."
          description="Hover, click and scroll through these to decide what goes where."
        />

        <AnimatedDivider className="my-14" />

        {/* Text effects */}
        <Reveal>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Text
          </h3>
        </Reveal>

        <Stagger step={90} className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background/70 p-7 backdrop-blur">
            <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
              TextReveal — by word
            </p>
            <p className="text-2xl font-semibold">
              <TextReveal text="Arrives one word at a time." by="word" />
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background/70 p-7 backdrop-blur">
            <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
              TextReveal — by character
            </p>
            <p className="text-2xl font-semibold">
              <TextReveal text="Letter by letter." by="char" />
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background/70 p-7 backdrop-blur">
            <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
              ShinyText / GradientText
            </p>
            <p className="text-2xl font-semibold">
              <ShinyText>A highlight sweeps across.</ShinyText>
            </p>
            <p className="mt-2 text-2xl font-semibold">
              <GradientText>Gradient that pans slowly.</GradientText>
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background/70 p-7 backdrop-blur">
            <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
              Typewriter + Counter
            </p>
            <p className="text-2xl font-semibold">
              We supply{" "}
              <span className="text-primary">
                <Typewriter words={["hospitals", "clinics", "labs"]} />
              </span>
            </p>
            <p className="mt-2 text-2xl font-semibold tabular-nums">
              <Counter to={1250} suffix="+ devices" />
            </p>
          </div>
        </Stagger>

        <AnimatedDivider className="my-14" />

        {/* Cards */}
        <Reveal>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Surfaces — hover each one
          </h3>
        </Reveal>

        <Stagger step={90} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <TiltCard className="rounded-2xl border border-border bg-background/70 p-7 backdrop-blur">
            <p className="font-semibold">TiltCard</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Leans in 3D toward your cursor, with a moving glare.
            </p>
          </TiltCard>

          <SpotlightCard className="rounded-2xl border border-border bg-background/70 p-7 backdrop-blur">
            <p className="font-semibold">SpotlightCard</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A soft glow follows the pointer. Cheap enough for big grids.
            </p>
          </SpotlightCard>

          <GlowCard always className="rounded-2xl border border-border bg-background/70 p-7 backdrop-blur">
            <p className="font-semibold">GlowCard</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A highlight laps the border. This one is set to always-on.
            </p>
          </GlowCard>

          <FlipCard
            className="h-[168px]"
            front={
              <div className="grid h-full place-items-center rounded-2xl border border-border bg-background/70 p-7 text-center backdrop-blur">
                <p className="font-semibold">FlipCard — hover me</p>
              </div>
            }
            back={
              <div className="grid h-full place-items-center rounded-2xl border border-primary/40 bg-primary/10 p-7 text-center">
                <p className="text-sm text-muted-foreground">
                  The back face. Good for specs or a bio.
                </p>
              </div>
            }
          />
        </Stagger>

        <AnimatedDivider className="my-14" />

        {/* Buttons */}
        <Reveal>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Controls
          </h3>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              as={Link}
              href="/request-quote"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md"
            >
              Magnetic — move near me
            </MagneticButton>

            <RippleButton className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold">
              Ripple — click me
            </RippleButton>

            <button className="mo-lift rounded-full border border-border px-7 py-3.5 text-sm font-semibold">
              mo-lift
            </button>

            <button className="mo-sweep-border rounded-full border border-border px-7 py-3.5 text-sm font-semibold">
              mo-sweep-border
            </button>

            <span className="mo-float inline-flex rounded-full bg-muted px-5 py-2.5 text-sm">
              mo-float
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm">
              <span className="mo-live-dot text-primary" />
              mo-live-dot
            </span>
          </div>
        </Reveal>

        <AnimatedDivider className="my-14" />

        {/* Marquee */}
        <Reveal>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Marquee — hover to pause
          </h3>
        </Reveal>

        <Marquee speed={26} gap={40}>
          {["Certified technicians", "Nationwide delivery", "Genuine warranty", "24/7 support", "Service contracts"].map((label) => (
            <span
              key={label}
              className="mo-lift rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-medium backdrop-blur"
            >
              {label}
            </span>
          ))}
        </Marquee>

        <Marquee speed={30} reverse gap={40} className="mt-4">
          {["Installation included", "Staff training", "Calibration", "Spare parts in stock", "Tender support"].map((label) => (
            <span
              key={label}
              className="mo-lift rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-medium backdrop-blur"
            >
              {label}
            </span>
          ))}
        </Marquee>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <CTABand
        title="Let's equip your facility properly."
        description="Tell us what you need — a single device, a full department fit-out, or a service contract for equipment you already own."
        primaryCta={{ label: "Request a quote", href: "/request-quote" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
      />
    </main>
  );
}
