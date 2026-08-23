import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Mail, MapPin } from "lucide-react"
import { LinkedinIcon } from "@/components/social-icons"
import { Section, SectionHeader } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { QuoteCTA } from "@/components/quote-cta"
import { teamMembers, siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Our Team & Leadership — Amoleck Group",
  description:
    "Meet the Amoleck Group leadership team: Amos Paschal (CEO), Ezra Daniel (CTO), Newton Nyema (CIO), and Salome Thadeus (Sales Manager). Experienced professionals in medical equipment supply and healthcare technology in Tanzania.",
  keywords: [
    "Amoleck Group team",
    "Amoleck leadership",
    "Amos Paschal CEO",
    "Ezra Daniel CTO",
    "Newton Nyema CIO",
    "Salome Thadeus sales manager",
    "medical equipment team Tanzania",
    "healthcare technology leaders East Africa",
    "biomedical equipment directors",
  ],
  openGraph: {
    title: "Our Team & Leadership — Amoleck Group",
    description:
      "Meet the leadership team behind Amoleck Group's medical equipment supply, installation and servicing across Tanzania.",
    type: "website",
  },
  alternates: {
    canonical: "/about/team",
  },
}

export default function TeamPage() {
  const teamJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Team & Leadership — Amoleck Group",
    description:
      "Meet the Amoleck Group leadership team: experienced professionals in medical equipment supply, healthcare technology and biomedical engineering in Tanzania.",
    mainEntity: {
      "@type": "Organization",
      name: "Amoleck Group",
      url: "https://afyavifaa.co.tz",
      description:
        "Supply, installation and servicing of medical, physiotherapy and diagnostic equipment for hospitals and clinics across Tanzania.",
      member: teamMembers.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.title,
        description: m.bio,
        email: m.email,
        image: m.image,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      <PageHero
        label="Our Team"
        title="The people who pick up the phone at 2am."
        subtitle="Our leadership team brings decades of combined experience in medical equipment supply, healthcare technology and biomedical engineering across East Africa."
      />

      {/* Team Grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {teamMembers.map((member, idx) => (
            <RevealOnScroll key={member.name} delay={idx * 120}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:flex-row">
                {/* Image */}
                <div className="relative aspect-[4/5] shrink-0 overflow-hidden bg-muted sm:aspect-auto sm:w-2/5">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.title} at Amoleck Group`}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent sm:bg-gradient-to-r" />
                  <div className="absolute bottom-0 left-0 right-0 flex gap-2 p-4">
                    <a
                      href={member.linkedin}
                      className="flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="size-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="size-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center gap-3 p-5 sm:p-6 lg:p-8">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                      {member.role}
                    </span>
                    <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{member.name}</h2>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{member.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    Contact {member.name.split(" ")[0]}
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Values strip */}
      <Section className="bg-muted/30">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="How we work"
            title="Built on accountability, not promises."
          />
        </RevealOnScroll>
        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-3">
          {[
            {
              title: "Direct access",
              description: "You get a named contact for your account — not a ticket number.",
            },
            {
              title: "Technical first",
              description: "Our team includes biomedical engineers, not just salespeople.",
            },
            {
              title: "On-site when needed",
              description: "We travel to your facility for assessments, installations and callouts.",
            },
          ].map((item, idx) => (
            <RevealOnScroll key={item.title} delay={idx * 80}>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-border p-5 sm:p-6">
                <div className="size-2 rounded-full bg-primary" />
                <h3 className="text-base font-semibold sm:text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Contact prompt */}
      <Section>
        <RevealOnScroll>
          <div className="rounded-2xl border border-border p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-primary sm:size-6" />
                <div>
                  <h2 className="text-xl font-semibold sm:text-2xl">Talk to our team</h2>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Based in {siteConfig.location}. We respond to all enquiries within two working hours.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:px-6 sm:py-3"
              >
                Get in touch
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </Section>

      <QuoteCTA />
    </>
  )
}
