import type { Metadata } from "next"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Amoleck Group Company Ltd website.",
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms & Conditions"
      />

      <Section>
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
            <p className="text-sm">Last updated: {new Date().getFullYear()}</p>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Acceptance of Terms</h2>
              <p className="mt-2">
                By accessing and using the {siteConfig.name} website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Use of Website</h2>
              <p className="mt-2">
                You agree to use this website for lawful purposes only. You must not use it in any way that could damage, disable, or impair the website or interfere with another user&apos;s use.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="mt-2">
                All content on this website, including text, graphics, logos, and images, is the property of {siteConfig.name} or its content suppliers and is protected by copyright and intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Quotation Requests</h2>
              <p className="mt-2">
                Quotation requests submitted through our website are subject to review and approval. We reserve the right to decline any request. Quotations are valid for 30 days unless otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Product Information</h2>
              <p className="mt-2">
                We strive to provide accurate product information. However, we do not warrant that product descriptions, specifications, or other content is error-free. Contact us for confirmation of any product details.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="mt-2">
                {siteConfig.name} shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or any information contained herein.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Changes to Terms</h2>
              <p className="mt-2">
                We reserve the right to update these Terms and Conditions at any time. Continued use of the website after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p className="mt-2">
                If you have questions about these Terms and Conditions, please contact us at {siteConfig.email} or {siteConfig.phone}.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </Section>
    </>
  )
}
