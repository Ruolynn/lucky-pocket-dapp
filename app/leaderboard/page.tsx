import { Trophy, TrendingUp, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function LeaderboardPage() {
  const luckyLeaders = [
    { rank: 1, name: "Alice", amount: "$88.88", avatar: "A", badge: "👑" },
    { rank: 2, name: "Bob", amount: "$66.66", avatar: "B", badge: "🥈" },
    { rank: 3, name: "Charlie", amount: "$55.55", avatar: "C", badge: "🥉" },
    { rank: 4, name: "David", amount: "$44.44", avatar: "D" },
    { rank: 5, name: "Eve", amount: "$33.33", avatar: "E" },
    { rank: 6, name: "Frank", amount: "$28.88", avatar: "F" },
    { rank: 7, name: "Grace", amount: "$22.22", avatar: "G" },
    { rank: 8, name: "Henry", amount: "$18.88", avatar: "H" },
    { rank: 9, name: "Iris", amount: "$16.66", avatar: "I" },
    { rank: 10, name: "Jack", amount: "$12.34", avatar: "J" },
  ]

  const generousLeaders = [
    { rank: 1, name: "David", amount: "$5,000", avatar: "D", badge: "💎" },
    { rank: 2, name: "Eve", amount: "$3,500", avatar: "E", badge: "🥈" },
    { rank: 3, name: "Frank", amount: "$2,800", avatar: "F", badge: "🥉" },
    { rank: 4, name: "Alice", amount: "$2,200", avatar: "A" },
    { rank: 5, name: "Bob", amount: "$1,800", avatar: "B" },
  ]

  const activeLeaders = [
    { rank: 1, name: "Grace", count: 450, avatar: "G", badge: "⚡" },
    { rank: 2, name: "Henry", count: 380, avatar: "H", badge: "🥈" },
    { rank: 3, name: "Iris", count: 320, avatar: "I", badge: "🥉" },
    { rank: 4, name: "Jack", count: 280, avatar: "J" },
    { rank: 5, name: "Alice", count: 250, avatar: "A" },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="neomorph">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="neomorph-inset rounded-full w-10 h-10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-2xl font-bold">Leaderboard</h1>
            </div>
            <Link href="/dashboard">
              <Button variant="ghost" className="rounded-full">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="neomorph rounded-2xl p-6 text-center">
            <div className="neomorph-inset rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-1">Lucky Board</div>
            <p className="text-sm text-muted-foreground">Highest single claim</p>
          </div>
          <div className="neomorph rounded-2xl p-6 text-center">
            <div className="neomorph-inset rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Crown className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold mb-1">Generous Board</div>
            <p className="text-sm text-muted-foreground">Total amount sent</p>
          </div>
          <div className="neomorph rounded-2xl p-6 text-center">
            <div className="neomorph-inset rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-1">Active Board</div>
            <p className="text-sm text-muted-foreground">Participation count</p>
          </div>
        </div>

        {/* Leaderboard Tabs */}
        <Tabs defaultValue="lucky" className="space-y-6">
          <TabsList className="neomorph grid w-full grid-cols-3 p-2 rounded-full">
            <TabsTrigger value="lucky" className="rounded-full">
              Lucky
            </TabsTrigger>
            <TabsTrigger value="generous" className="rounded-full">
              Generous
            </TabsTrigger>
            <TabsTrigger value="active" className="rounded-full">
              Active
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lucky">
            <Card className="neomorph border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Lucky Board - This Week
                </CardTitle>
                <CardDescription>Luckiest claimers with highest single amounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {luckyLeaders.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center justify-between neomorph-flat rounded-xl p-4 ${
                        user.rank <= 3 ? "neomorph-hover" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`neomorph-inset rounded-full w-12 h-12 flex items-center justify-center font-bold ${
                            user.rank === 1 ? "text-primary text-xl" : ""
                          }`}
                        >
                          {user.rank}
                        </div>
                        <div className="neomorph-inset rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          {user.avatar}
                        </div>
                        <div>
                          <div className="font-bold flex items-center gap-2">
                            {user.name}
                            {user.badge && <span>{user.badge}</span>}
                          </div>
                          <div className="text-sm text-muted-foreground">Best claim</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary">{user.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="generous">
            <Card className="neomorph border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-secondary" />
                  Generous Board - This Month
                </CardTitle>
                <CardDescription>Most generous senders by total amount</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {generousLeaders.map((user) => (
                    <div
                      key={user.rank}
                      className="flex items-center justify-between neomorph-flat rounded-xl p-4 neomorph-hover"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`neomorph-inset rounded-full w-12 h-12 flex items-center justify-center font-bold ${
                            user.rank === 1 ? "text-secondary text-xl" : ""
                          }`}
                        >
                          {user.rank}
                        </div>
                        <div className="neomorph-inset rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          {user.avatar}
                        </div>
                        <div>
                          <div className="font-bold flex items-center gap-2">
                            {user.name}
                            {user.badge && <span>{user.badge}</span>}
                          </div>
                          <div className="text-sm text-muted-foreground">Total sent</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-secondary">{user.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active">
            <Card className="neomorph border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Active Board - Real-time
                </CardTitle>
                <CardDescription>Most active users by participation count</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activeLeaders.map((user) => (
                    <div
                      key={user.rank}
                      className="flex items-center justify-between neomorph-flat rounded-xl p-4 neomorph-hover"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`neomorph-inset rounded-full w-12 h-12 flex items-center justify-center font-bold ${
                            user.rank === 1 ? "text-accent text-xl" : ""
                          }`}
                        >
                          {user.rank}
                        </div>
                        <div className="neomorph-inset rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          {user.avatar}
                        </div>
                        <div>
                          <div className="font-bold flex items-center gap-2">
                            {user.name}
                            {user.badge && <span>{user.badge}</span>}
                          </div>
                          <div className="text-sm text-muted-foreground">Participations</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-accent">{user.count} times</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Your Ranking */}
        <div className="neomorph rounded-3xl p-8 mt-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Your Ranking</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">#12</div>
              <div className="text-muted-foreground">Lucky Board</div>
              <div className="text-sm text-muted-foreground mt-1">Claim $5 more to reach top 10!</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">#8</div>
              <div className="text-muted-foreground">Generous Board</div>
              <div className="text-sm text-muted-foreground mt-1">$200 away from top 5</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">#15</div>
              <div className="text-muted-foreground">Active Board</div>
              <div className="text-sm text-muted-foreground mt-1">20 more participations for top 10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
