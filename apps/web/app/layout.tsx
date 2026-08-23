import type { Metadata } from "next"
import { Geist, Geist_Mono, Roboto } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { siteConfig } from "@/lib/data"
import { cn } from "@workspace/ui/lib/utils"

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://afyavifaa.co.tz"),
  title: {
    default: "Amoleck Group — Medical Equipment & Healthcare Technology in Tanzania",
    template: "%s — Amoleck Group",
  },
  description: siteConfig.description,
  keywords: [
    "Amoleck Group",
    "medical equipment Tanzania",
    "physiotherapy equipment Tanzania",
    "diagnostic equipment",
    "hospital equipment supply",
    "biomedical servicing",
    "medical equipment installation",
    "healthcare technology East Africa",
    "medical equipment suppliers Tanzania",
    "clinic fit-out Tanzania",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: "Amoleck Group — Medical Equipment & Healthcare Technology in Tanzania",
    description: siteConfig.description,
    url: "https://afyavifaa.co.tz",
    siteName: siteConfig.name,
    locale: "en_TZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amoleck Group — Medical Equipment & Healthcare Technology in Tanzania",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Amoleck Group",
  url: "https://afyavifaa.co.tz",
  description: "Supply, installation and servicing of medical, physiotherapy and diagnostic equipment for hospitals and clinics across Tanzania.",
  email: "info@afyavifaa.co.tz",
  telephone: "+255 626 371 854",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TZ",
    addressRegion: "Dar es Salaam",
  },
  sameAs: [
    "https://facebook.com/amoleck",
    "https://instagram.com/amoleck",
    "https://linkedin.com/company/amoleck",
    "https://twitter.com/amoleck",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", roboto.variable)}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <ThemeProvider>
          <div className="flex min-h-svh flex-col">
            <SiteNavbar />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
