import type { Metadata } from "next"
import { FileText, Globe, Briefcase, ShoppingCart, Package, AlertTriangle, RefreshCw, Mail } from "lucide-react"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Amoleck Group Company Ltd website.",
}

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    body: `By accessing and using the ${siteConfig.name} website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.`,
  },
  {
    icon: Globe,
    title: "Use of Website",
    body: "You agree to use this website for lawful purposes only. You must not use it in any way that could damage, disable, or impair the website or interfere with another user's use.",
  },
  {
    icon: Briefcase,
    title: "Intellectual Property",
    body: `All content on this website, including text, graphics, logos, and images, is the property of ${siteConfig.name} or its content suppliers and is protected by copyright and intellectual property laws.`,
  },
  {
    icon: ShoppingCart,
    title: "Quotation Requests",
    body: "Quotation requests submitted through our website are subject to review and approval. We reserve the right to decline any request. Quotations are valid for 30 days unless otherwise stated.",
  },
  {
    icon: Package,
    title: "Product Information",
    body: "We strive to provide accurate product information. However, we do not warrant that product descriptions, specifications, or other content is error-free. Contact us for confirmation of any product details.",
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    body: `${siteConfig.name} shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or any information contained herein.`,
  },
  {
    icon: RefreshCw,
    title: "Changes to Terms",
    body: "We reserve the right to update these Terms and Conditions at any time. Continued use of the website after changes constitutes acceptance of the new terms.",
  },
  {
    icon: Mail,
    title: "Contact Us",
    body: `If you have questions about these Terms and Conditions, please contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        subtitle="The terms that govern your use of our website and the services we provide."
        bgImage="/images/gtte 8.jpg"
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <RevealOnScroll>
            <div className="mb-10 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Last updated: {new Date().getFullYear()}</p>
                <p className="text-xs text-muted-foreground">Please read these terms carefully.</p>
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
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{section.body}</p>
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
