"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export function trackFormSubmission(formType: string) {
  trackEvent("form_submit", "engagement", formType)
}

export function trackButtonClick(buttonName: string, location: string) {
  trackEvent("click", "button", `${buttonName}_${location}`)
}

export function trackPageView(pageName: string) {
  trackEvent("page_view", "navigation", pageName)
}

export function trackProjectView(projectName: string) {
  trackEvent("project_view", "portfolio", projectName)
}

export function trackServiceInterest(serviceName: string) {
  trackEvent("service_interest", "services", serviceName)
}
