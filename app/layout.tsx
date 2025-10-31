import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LuckyPocket - Web3 Social Lucky Pocket Platform",
  description: "Web3 social lucky pocket dapp on Base chain",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <DashboardHeader />
        {children}
      </body>
    </html>
  )
}
