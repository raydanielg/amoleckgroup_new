import type { Metadata } from "next"
import { Section } from "@/components/section"
import { PageHero } from "@/components/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Amoleck Group Company Ltd website.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
      />

      <Section>
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
            <p className="text-sm">Last updated: {new Date().getFullYear()}</p>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
              <p className="mt-2">
                {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
              <p className="mt-2">
                We may collect personal information such as your name, email address, phone number, company name, and location when you submit a quote request or contact form. We also collect non-personal information such as browser type and pages visited for analytics purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
              <ul className="mt-2 flex flex-col gap-2">
                <li>- To respond to your inquiries and quotation requests</li>
                <li>- To provide information about our products and services</li>
                <li>- To improve our website and services</li>
                <li>- To send updates and communications (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
              <p className="mt-2">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Third-Party Links</h2>
              <p className="mt-2">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Your Rights</h2>
              <p className="mt-2">
                You have the right to access, update, or delete your personal information. You may also opt out of receiving communications from us at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p className="mt-2">
                If you have questions about this Privacy Policy, please contact us at {siteConfig.email} or {siteConfig.phone}.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </Section>
    </>
  )
}
