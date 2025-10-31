"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import Link from "next/link"

export function ExploreHeader() {
  return (
    <div className="border-b border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Explore Packets</h1>
            <p className="text-muted-foreground">Discover exciting lucky pockets in the community</p>
          </div>

          <Link href="/dashboard">
            <Button variant="outline" className="neomorph rounded-full bg-transparent">
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search packets..." className="neomorph-inset border-0 pl-12 rounded-full h-12" />
          </div>

          <Button variant="outline" className="neomorph rounded-full px-6 bg-transparent">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>
    </div>
  )
}
