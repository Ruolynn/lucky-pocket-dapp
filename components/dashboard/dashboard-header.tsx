"use client"

import { Button } from "@/components/ui/button"
import { Wallet, Bell, Settings, Sparkles } from "lucide-react"
import Link from "next/link"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="gradient-red rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold">LuckyPocket</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link href="/create">
              <Button className="gradient-red text-white rounded-full shadow-lg border-0 font-semibold">Create</Button>
            </Link>
            <Link href="/claim">
              <Button className="gradient-purple text-white rounded-full shadow-lg border-0 font-semibold">
                Claim
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="gradient-blue text-white rounded-full shadow-lg border-0 font-semibold">
                Dashboard
              </Button>
            </Link>
            <Link href="/explore">
              <Button className="gradient-pink text-white rounded-full shadow-lg border-0 font-semibold">
                Explore
              </Button>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="neomorph-flat rounded-full">
              <Bell className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="neomorph-flat rounded-full">
              <Settings className="h-5 w-5" />
            </Button>

            <Button className="gradient-green text-white rounded-full shadow-lg border-0">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
