"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Gift, Search, TrendingUp, Users, Clock, Sparkles } from "lucide-react"
import { useState } from "react"

export default function ClaimPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const availablePockets = [
    {
      id: 1,
      creator: "0x1234...5678",
      amount: "100 USDC",
      remaining: 8,
      total: 10,
      type: "Random",
      message: "Happy New Year! 🎉",
      expiresIn: "2h 30m",
    },
    {
      id: 2,
      creator: "0xabcd...efgh",
      amount: "50 USDT",
      remaining: 15,
      total: 20,
      type: "Fixed",
      message: "Welcome to LuckyPocket!",
      expiresIn: "5h 15m",
    },
    {
      id: 3,
      creator: "0x9876...4321",
      amount: "200 USDC",
      remaining: 3,
      total: 5,
      type: "Random",
      message: "Good luck everyone! 🍀",
      expiresIn: "1h 45m",
    },
  ]

  const recentClaims = [
    { user: "0x1111...2222", amount: "12.5 USDC", time: "2 min ago" },
    { user: "0x3333...4444", amount: "8.3 USDT", time: "5 min ago" },
    { user: "0x5555...6666", amount: "15.7 USDC", time: "8 min ago" },
    { user: "0x7777...8888", amount: "10.0 USDT", time: "12 min ago" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Claim Lucky Pockets
          </h1>
          <p className="text-muted-foreground">Discover and claim available lucky pockets from the community</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 neomorph">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by address, message, or amount..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 neomorph-inset"
                />
              </div>
              <Button className="glass-button">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="neomorph">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full neomorph-inset bg-gradient-to-br from-red-500 to-pink-500">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Available</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="neomorph">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full neomorph-inset bg-gradient-to-br from-green-500 to-emerald-500">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold">$2,450</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="neomorph">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full neomorph-inset bg-gradient-to-br from-purple-500 to-pink-500">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="neomorph">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full neomorph-inset bg-gradient-to-br from-orange-500 to-red-500">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Your Claims</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Lucky Pockets */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Available Lucky Pockets</h2>
            <div className="space-y-4">
              {availablePockets.map((pocket) => (
                <Card key={pocket.id} className="neomorph hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-2 rounded-full neomorph-inset bg-gradient-to-br from-red-500 to-pink-500">
                            <Gift className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-mono text-sm">{pocket.creator}</span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              pocket.type === "Random"
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                            }`}
                          >
                            {pocket.type}
                          </span>
                        </div>
                        <p className="text-lg font-semibold mb-1">{pocket.message}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {pocket.expiresIn}
                          </span>
                          <span>
                            {pocket.remaining}/{pocket.total} remaining
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                          {pocket.amount}
                        </p>
                        <Button className="mt-2 glass-button bg-gradient-to-r from-red-500 to-pink-500 text-white">
                          Claim Now
                        </Button>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 neomorph-inset">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500"
                        style={{ width: `${(pocket.remaining / pocket.total) * 100}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Claims */}
          <div>
            <Card className="neomorph">
              <CardHeader>
                <CardTitle>Recent Claims</CardTitle>
                <CardDescription>Latest lucky pocket claims</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentClaims.map((claim, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg neomorph-flat">
                      <div>
                        <p className="font-mono text-sm">{claim.user}</p>
                        <p className="text-xs text-muted-foreground">{claim.time}</p>
                      </div>
                      <p className="font-semibold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                        {claim.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="neomorph mt-6">
              <CardHeader>
                <CardTitle>How to Claim</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full neomorph-inset bg-gradient-to-br from-red-500 to-pink-500 text-white flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>Browse available lucky pockets</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full neomorph-inset bg-gradient-to-br from-red-500 to-pink-500 text-white flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>Click "Claim Now" on your choice</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full neomorph-inset bg-gradient-to-br from-red-500 to-pink-500 text-white flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>Confirm the transaction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full neomorph-inset bg-gradient-to-br from-red-500 to-pink-500 text-white flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <span>Receive your reward instantly!</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
