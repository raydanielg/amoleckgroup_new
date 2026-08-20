import Link from "next/link"
import {
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Activity,
  Code2,
  Users,
  Shield,
  Headset,
  CheckCircle2,
  Package,
  Wrench,
} from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem, GlowOrb, Marquee, AnimatedCounter } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import {
  siteConfig,
  services,
  equipmentCategories,
  howItWorksService,
  whyChooseUs,
  technologyCards,
  tickerItems,
  statsNumbers,
} from "@/lib/data"

const serviceIcons: Record<string, typeof HeartPulse> = {
  heart: HeartPulse,
  stethoscope: Stethoscope,
  device: Activity,
  code: Code2,
}

const whyIcons: Record<string, typeof Users> = {
  users: Users,
  device: Activity,
  heart: HeartPulse,
  shield: Shield,
  bulb: Code2,
  support: Headset,
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <GlowOrb
          className="absolute -left-24 top-10 -z-10 size-72 rounded-full bg-primary/25 blur-3xl"
          duration={9}
        />
        <GlowOrb
          className="absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-primary/15 blur-3xl"
          duration={11}
          delayOffset={1.5}
        />
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="secondary" className="mb-4 gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Replies within 2 working hours
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Medical equipment that keeps working after the invoice is paid.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                We supply, install and service medical, diagnostic and rehabilitation equipment across Kenya — with certified technicians, genuine warranty, and support that answers the phone.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/request-quote"
                  className={cn(buttonVariants({ size: "lg" }), "group")}
                >
                  Request a quote
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/equipment"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  Browse equipment
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="group aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                      alt="Medical equipment installation"
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="group aspect-square overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80"
                      alt="Diagnostic equipment"
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="group aspect-square overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
                      alt="Rehabilitation equipment"
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="group aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1587854692152-cbe611db5902?w=600&q=80"
                      alt="Clinical technology"
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ticker Strip */}
      <div className="border-b border-border/40 bg-muted/30 py-3">
        <Marquee className="mx-auto max-w-7xl" speed={26}>
          {tickerItems.map((item) => (
            <span key={item} className="flex items-center gap-6 text-xs font-medium text-muted-foreground">
              {item}
              <span className="text-primary/40">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* What We Do Section */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="What we do"
            title="Four services, one accountable supplier."
            description="Most facilities juggle a separate vendor for supply, another for installation, and a third who never shows up for repairs. We do all three."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? HeartPulse
            return (
              <FadeInItem key={service.slug}>
                <Card className="group h-full border-border/40 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                  <CardHeader>
                    <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </Section>

      {/* Why Facilities Stay With Us */}
      <Section className="bg-muted/30">
        <FadeIn>
          <SectionHeader
            eyebrow="Why facilities stay with us"
            title="Buying equipment is easy. Keeping it running is the hard part."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2" stagger={0.1}>
          {whyChooseUs.map((item) => {
            const Icon = whyIcons[item.icon] ?? Users
            return (
              <FadeInItem key={item.title}>
                <div className="group flex items-start gap-4 rounded-xl border border-border/40 bg-background p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                    <Icon className="size-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </Section>

      {/* Numbers Section */}
      <Section>
        <FadeIn>
          <FadeInStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {statsNumbers.map((stat) => (
              <FadeInItem key={stat.label}>
                <div className="group rounded-2xl border border-transparent p-6 text-center transition-all duration-300 hover:border-primary/20 hover:bg-primary/5">
                  <AnimatedCounter
                    value={stat.value}
                    className="text-4xl font-bold text-primary transition-transform duration-300 group-hover:scale-110 lg:text-5xl"
                  />
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </FadeIn>
      </Section>

      {/* Equipment Preview Section */}
      <Section className="bg-muted/30">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">
              <Package className="size-3.5" />
              Equipment Catalogue
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              A selection of what we supply.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Not everything is listed — if you don&apos;t see it, ask. We source across diagnostic, therapy, surgical, ward and laboratory categories.
            </p>
            <Link
              href="/equipment"
              className={cn(buttonVariants({ size: "lg" }), "group mt-6")}
            >
              Browse equipment
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {equipmentCategories.slice(0, 4).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/equipment#${cat.slug}`}
                  className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:from-black/80" />
                  <p className="absolute bottom-3 left-3 right-3 flex items-center gap-1 text-sm font-medium text-white">
                    {cat.name}
                    <ArrowRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="How we work"
            title="From phone call to running equipment."
          />
        </FadeIn>
        <FadeInStagger className="relative mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5" stagger={0.1}>
          <div className="pointer-events-none absolute inset-x-0 top-7 -z-10 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          {howItWorksService.map((item, idx) => (
            <FadeInItem key={item.step} hover={false}>
              <div className="group flex flex-col items-center text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                  {item.step}
                </div>
                <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                {idx < howItWorksService.length - 1 && (
                  <ArrowRight className="mt-3 hidden size-4 text-muted-foreground lg:block" />
                )}
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Section>

      {/* Technology Section */}
      <Section className="bg-muted/30">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-8 text-center text-background lg:p-16">
            <GlowOrb
              className="absolute -left-10 -top-10 size-64 rounded-full bg-primary/30 blur-3xl"
              duration={7}
            />
            <GlowOrb
              className="absolute -bottom-16 -right-10 size-72 rounded-full bg-primary/20 blur-3xl"
              duration={9}
              delayOffset={1}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative">
              <Badge variant="secondary" className="mb-4">
                Healthcare Technology
              </Badge>
              <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight lg:text-4xl">
                Technology that talks to the equipment you already own.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-background/70 lg:text-lg">
                Clinical systems, diagnostic integration and technical support. We configure around your existing estate rather than asking you to replace it.
              </p>
              <Link
                href="/technology"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "group mt-8")}
              >
                Explore technology
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {technologyCards.map((tech) => (
            <FadeInItem key={tech.title}>
              <Card className="group h-full border-border/40 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">{tech.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Section>

      {/* CTA */}
      <QuoteCTA />
    </>
  )
}
