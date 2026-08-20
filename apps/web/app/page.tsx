import Link from "next/link"
import {
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Activity,
  Code2,
  Users,
  Shield,
  Lightbulb,
  Headset,
  CheckCircle2,
  Package,
} from "lucide-react"
import { buttonVariants } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { Section, SectionHeader } from "@/components/section"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import {
  siteConfig,
  services,
  equipmentCategories,
  howItWorksService,
  howItWorksEquipment,
  whyChooseUs,
  technologyCards,
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
  bulb: Lightbulb,
  support: Headset,
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="secondary" className="mb-4">
                Healthcare • Technology • Innovation
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Advancing Healthcare Through{" "}
                <span className="text-primary">Innovation, Technology</span> &amp;{" "}
                <span className="text-primary">Professional Care</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                {siteConfig.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Explore Our Services
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/request-quote"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  Request a Quote
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                      alt="Healthcare services"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80"
                      alt="Medical equipment"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
                      alt="Rehabilitation"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-9546f8936333?w=600&q=80"
                      alt="Technology solutions"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Who We Are"
            title="About Amoleck"
            description="Amoleck Group Company Ltd is a Tanzanian company committed to delivering innovative healthcare, medical, physiotherapy and technology solutions."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? HeartPulse
            return (
              <FadeInItem key={service.slug}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
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

      {/* Services Section */}
      <Section className="bg-muted/30">
        <FadeIn>
          <SectionHeader
            eyebrow="What We Offer"
            title="Our Services"
            description="Comprehensive healthcare and technology solutions designed to meet your needs."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.15}>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? HeartPulse
            return (
              <FadeInItem key={service.slug}>
                <Card className="h-full overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="size-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-col gap-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="size-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.cta.href}
                      className={cn(buttonVariants({ variant: "link", size: "sm" }), "mt-4 px-0")}
                    >
                      {service.cta.label}
                      <ArrowRight className="size-4" />
                    </Link>
                  </CardContent>
                </Card>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </Section>

      {/* Medical Equipment Section */}
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">
              <Package className="size-3.5" />
              Medical Equipment
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Explore Modern Medical &amp; Physiotherapy Equipment
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Amoleck Group supplies a wide range of medical and physiotherapy equipment from trusted brands. Browse our catalog and request a quote for the equipment you need.
            </p>
            <Link
              href="/equipment"
              className={cn(buttonVariants({ size: "lg" }), "mt-6")}
            >
              Browse Equipment
              <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {equipmentCategories.slice(0, 4).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/equipment#${cat.slug}`}
                  className="group relative aspect-square overflow-hidden rounded-2xl"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white">
                    {cat.name}
                  </p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* How It Works - Service */}
      <Section className="bg-muted/30">
        <FadeIn>
          <SectionHeader
            eyebrow="Process"
            title="How It Works"
            description="Our simple process ensures you get the right solution, every time."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5" stagger={0.1}>
          {howItWorksService.map((item, idx) => (
            <FadeInItem key={item.step}>
              <div className="flex flex-col items-center text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
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

        {/* How It Works - Equipment */}
        <FadeIn className="mt-16">
          <h3 className="text-center text-xl font-semibold">Equipment Ordering Process</h3>
        </FadeIn>
        <FadeInStagger className="mt-8 grid gap-4 md:grid-cols-4 lg:grid-cols-7" stagger={0.08}>
          {howItWorksEquipment.map((item) => (
            <FadeInItem key={item.step}>
              <div className="flex flex-col items-center rounded-xl border border-border/40 bg-background p-4 text-center">
                <span className="text-xs font-bold text-primary">{item.step}</span>
                <h4 className="mt-2 text-xs font-semibold">{item.title}</h4>
                <p className="mt-1 text-[0.65rem] text-muted-foreground">{item.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Why Amoleck"
            title="Why Choose Amoleck?"
            description="We combine healthcare expertise with technology innovation to deliver exceptional value."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {whyChooseUs.map((item) => {
            const Icon = whyIcons[item.icon] ?? Users
            return (
              <FadeInItem key={item.title}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </Section>

      {/* Technology Section */}
      <Section className="bg-muted/30">
        <FadeIn>
          <div className="rounded-3xl bg-foreground p-8 text-center text-background lg:p-16">
            <Badge variant="secondary" className="mb-4">
              Technology
            </Badge>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight lg:text-4xl">
              Technology That Transforms Healthcare &amp; Business
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-background/70 lg:text-lg">
              We develop and implement innovative technology solutions that help organizations improve efficiency, accessibility and service delivery.
            </p>
            <Link
              href="/technology"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "mt-8")}
            >
              Explore Technology Solutions
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {technologyCards.map((tech) => (
            <FadeInItem key={tech.title}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold">{tech.title}</h3>
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
