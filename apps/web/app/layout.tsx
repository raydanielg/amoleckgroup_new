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
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Amoleck",
    "healthcare Tanzania",
    "physiotherapy Dar es Salaam",
    "medical equipment Tanzania",
    "healthcare technology",
    "rehabilitation equipment",
    "Amoleck Group",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "https://amoleck.co.tz",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
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
