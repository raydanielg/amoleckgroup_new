import type { Metadata } from "next"
import { Shield, FileText, Lock, Eye, Link2, UserCheck, Mail } from "lucide-react"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Amoleck Group Company Ltd website.",
}

const sections = [
  {
    icon: FileText,
    title: "Introduction",
    body: `${siteConfig.name} ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.`,
  },
  {
    icon: Eye,
    title: "Information We Collect",
    body: "We may collect personal information such as your name, email address, phone number, company name, and location when you submit a quote request or contact form. We also collect non-personal information such as browser type and pages visited for analytics purposes.",
  },
  {
    icon: Shield,
    title: "How We Use Your Information",
    body: "",
    list: [
      "To respond to your inquiries and quotation requests",
      "To provide information about our products and services",
      "To improve our website and services",
      "To send updates and communications (with your consent)",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    body: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.",
  },
  {
    icon: Link2,
    title: "Third-Party Links",
    body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.",
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    body: "You have the right to access, update, or delete your personal information. You may also opt out of receiving communications from us at any time.",
  },
  {
    icon: Mail,
    title: "Contact Us",
    body: `If you have questions about this Privacy Policy, please contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information when you interact with our website and services."
        bgImage="/images/gtte 8.jpg"
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <RevealOnScroll>
            <div className="mb-10 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Last updated: {new Date().getFullYear()}</p>
                <p className="text-xs text-muted-foreground">Your privacy matters to us.</p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {sections.map((section, idx) => {
              const Icon = section.icon
              return (
                <RevealOnScroll key={section.title} delay={idx * 80}>
                  <div className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-primary/50 tabular-nums">0{idx + 1}</span>
                          <h2 className="text-base font-semibold text-foreground sm:text-lg">{section.title}</h2>
                        </div>
                        {section.body && (
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{section.body}</p>
                        )}
                        {section.list && (
                          <ul className="mt-3 flex flex-col gap-2">
                            {section.list.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </Section>
    </>
  )
}
