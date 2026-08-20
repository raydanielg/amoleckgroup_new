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
    default: "Amoleck Group — Medical Equipment & Healthcare Technology in Kenya",
    template: "%s — Amoleck Group",
  },
  description: siteConfig.description,
  keywords: [
    "Amoleck Group",
    "medical equipment Kenya",
    "physiotherapy equipment Kenya",
    "diagnostic equipment",
    "hospital equipment supply",
    "biomedical servicing",
    "medical equipment installation",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: "Amoleck Group — Medical Equipment & Healthcare Technology in Kenya",
    description: siteConfig.description,
    url: "https://amoleck.co.tz",
    siteName: siteConfig.name,
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amoleck Group — Medical Equipment & Healthcare Technology in Kenya",
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
