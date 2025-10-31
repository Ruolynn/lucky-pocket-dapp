import { Copy, Users, DollarSign, TrendingUp, Share2, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function InvitePage() {
  const inviteCode = "LUCKY2024"
  const inviteLink = `https://luckypocket.app/invite/${inviteCode}`

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="neomorph">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Invite Friends</h1>
            <Link href="/dashboard">
              <Button variant="ghost" className="rounded-full">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="neomorph rounded-3xl p-12 text-center mb-8">
          <div className="neomorph-inset rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Gift className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Invite Friends, Share Rewards</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Earn $2 USDC for each friend you invite, and they get $2 too
          </p>

          {/* Invite Link */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="neomorph-inset rounded-full p-2 flex items-center gap-2">
              <Input value={inviteLink} readOnly className="border-0 bg-transparent text-center" />
              <Button className="neomorph-hover rounded-full">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="neomorph-hover rounded-full">
              <Share2 className="mr-2 h-5 w-5" />
              Share on Farcaster
            </Button>
            <Button size="lg" variant="outline" className="neomorph rounded-full bg-transparent">
              <Copy className="mr-2 h-5 w-5" />
              Copy Link
            </Button>
          </div>
        </div>

        {/* Rewards Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="neomorph rounded-2xl p-6 text-center">
            <div className="neomorph-inset rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">$2</h3>
            <p className="text-sm text-muted-foreground">Direct Referral Reward</p>
          </div>

          <div className="neomorph rounded-2xl p-6 text-center">
            <div className="neomorph-inset rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">0.5%</h3>
            <p className="text-sm text-muted-foreground">Tier 1 Commission</p>
          </div>

          <div className="neomorph rounded-2xl p-6 text-center">
            <div className="neomorph-inset rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-2">0.2%</h3>
            <p className="text-sm text-muted-foreground">Tier 2 Commission</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="neomorph border-0">
            <CardHeader>
              <CardTitle>My Referral Stats</CardTitle>
              <CardDescription>Real-time referral statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Direct Referrals</span>
                  <span className="text-2xl font-bold">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Indirect Referrals</span>
                  <span className="text-2xl font-bold">67</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Referral Rewards</span>
                  <span className="text-2xl font-bold text-primary">$46</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Commission Earnings</span>
                  <span className="text-2xl font-bold text-secondary">$128.50</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="neomorph border-0">
            <CardHeader>
              <CardTitle>Referral Leaderboard</CardTitle>
              <CardDescription>Top referrers this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { rank: 1, name: "Alice", count: 156 },
                  { rank: 2, name: "Bob", count: 142 },
                  { rank: 3, name: "Charlie", count: 128 },
                  { rank: 4, name: "David", count: 98 },
                  { rank: 5, name: "Eve", count: 87 },
                ].map((user) => (
                  <div key={user.rank} className="flex items-center justify-between neomorph-flat rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="neomorph-inset rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {user.rank}
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <span className="text-primary font-bold">{user.count} refs</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="neomorph rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">How to Earn Referral Rewards</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Share Link", desc: "Copy your unique referral link" },
              { step: "2", title: "Friend Registers", desc: "Friend signs up through your link" },
              { step: "3", title: "Get Rewards", desc: "Both get $2 USDC" },
              { step: "4", title: "Ongoing Earnings", desc: "Earn commission from friend's packets" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="neomorph-inset rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
