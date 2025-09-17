import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parth Library - Fuel Your Focus. Empower Your Future.",
  description:
    "A serene and fully equipped study hub guided by Surendra Sir. Perfect for SSC, UPSC, Banking and competitive exam preparation.",
  keywords: "library in Garwar, study space in Ratsar, competitive exam preparation, SSC preparation, UPSC preparation",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
