import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
  canonicalUrl?: string
  structuredData?: object
}

export default function SEOHead({
  title = "Sagelancer - Complete Digital Solutions | UI/UX, Web & App Development",
  description = "From stunning UI/UX to high-performance websites and mobile apps, Sagelancer delivers end-to-end digital solutions for startups and established businesses.",
  keywords = "UI/UX design, website development, FlutterFlow, no-code, app development, graphic design, digital solutions, startup development",
  ogImage = "/logo-full.png",
  ogUrl = "https://sagelancer.com",
  canonicalUrl,
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title.includes("Sagelancer") ? title : `${title} | Sagelancer`

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sagelancer",
    description: description,
    url: "https://sagelancer.com",
    logo: "https://sagelancer.com/logo-full.png",
    foundingDate: "2019",
    founder: {
      "@type": "Person",
      name: "Sebastine Edmund",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@sagelancer.com",
    },
    sameAs: [
      "https://twitter.com/sagelancer",
      "https://linkedin.com/company/sagelancer",
      "https://instagram.com/sagelancer",
    ],
    services: [
      "UI/UX Design",
      "Website Development",
      "Mobile App Development",
      "Graphic Design",
      "FlutterFlow Development",
    ],
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sagelancer" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sagelancer" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData),
        }}
      />

      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#2CA35B" />
      <meta name="msapplication-TileColor" content="#2CA35B" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
    </Head>
  )
}
