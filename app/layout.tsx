import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import Script from "next/script"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sagelancer - Complete Digital Solutions | UI/UX, Web & App Development",
  description:
    "From stunning UI/UX to high-performance websites and mobile apps, Sagelancer delivers end-to-end digital solutions for startups and established businesses.",
  keywords:
    "UI/UX design, website development, FlutterFlow, no-code, app development, graphic design, digital solutions",
  authors: [{ name: "Sagelancer" }],
  creator: "Sagelancer",
  publisher: "Sagelancer",
  metadataBase: new URL("https://sagelancer.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sagelancer - Complete Digital Solutions",
    description:
      "From stunning UI/UX to high-performance websites and mobile apps, we deliver end-to-end digital solutions.",
    url: "https://sagelancer.com",
    siteName: "Sagelancer",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Sagelancer Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagelancer - Complete Digital Solutions",
    description:
      "From stunning UI/UX to high-performance websites and mobile apps, we deliver end-to-end digital solutions.",
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Structured Data */}
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sagelancer",
              "description": "Complete digital solutions from UI/UX design to FlutterFlow development",
              "url": "https://sagelancer.com",
              "logo": "https://sagelancer.com/logo-full.png",
              "foundingDate": "2019",
              "founder": {
                "@type": "Person",
                "name": "Sebastine Edmund"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hello@sagelancer.com"
              },
              "sameAs": [
                "https://twitter.com/sagelancer",
                "https://linkedin.com/company/sagelancer"
              ],
              "services": [
                "UI/UX Design",
                "Website Development", 
                "Mobile App Development",
                "Graphic Design",
                "FlutterFlow Development"
              ]
            }
          `}
        </Script>

        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
