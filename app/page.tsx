import { Wallet, Sparkles, Users, TrendingUp, Gift, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="gradient-red rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center animate-pulse shadow-2xl">
            <Gift className="w-16 h-16 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">LuckyPocket</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Web3 Social Lucky Pocket on Base Chain
          </p>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 text-pretty leading-relaxed max-w-2xl mx-auto">
            Send lucky pockets, claim rewards, invite friends. Share joy and wealth in the Web3 world. Every share is
            full of surprises, every lucky pocket is the beginning of social connection.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="gradient-red text-white neomorph-hover rounded-full px-8 py-6 text-lg shadow-xl border-0"
              >
                <Wallet className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>

            <Link href="/explore">
              <Button
                size="lg"
                className="gradient-purple text-white neomorph-hover rounded-full px-8 py-6 text-lg shadow-xl border-0"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore Lucky Pockets
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Secure & Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-600" />
              <span>Instant Settlement</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-600" />
              <span>Social Interaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="neomorph rounded-3xl p-8 text-center neomorph-hover">
            <div className="gradient-red rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Create Lucky Pockets</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Support fixed amount and lucky draw modes, customize packet quantity and blessing messages
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Support USDC/USDT</li>
              <li>• VRF Random Algorithm</li>
              <li>• 7-day Validity</li>
            </ul>
          </div>

          <div className="neomorph rounded-3xl p-8 text-center neomorph-hover">
            <div className="gradient-purple rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Invite Rewards</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Invite friends to register and earn rewards, build your lucky pocket social network
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• $2 per referral</li>
              <li>• Boost claiming power</li>
              <li>• Permanent commission</li>
            </ul>
          </div>

          <div className="neomorph rounded-3xl p-8 text-center neomorph-hover">
            <div className="gradient-pink rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Leaderboards</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Multi-dimensional leaderboards showcasing your luck and generosity
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Lucky Board</li>
              <li>• Generous Board</li>
              <li>• Active Board</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="neomorph rounded-3xl p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Platform Stats</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">12.5K</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-2">45.2K</div>
              <div className="text-muted-foreground">Total Lucky Pockets</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-2">$2.8M</div>
              <div className="text-muted-foreground">Total Volume</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2">98.5%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Connect Wallet",
              desc: "Connect your Web3 wallet using RainbowKit",
              gradient: "gradient-red",
            },
            {
              step: "2",
              title: "Create Lucky Pocket",
              desc: "Set amount, quantity and blessing message",
              gradient: "gradient-purple",
            },
            { step: "3", title: "Share Link", desc: "Share with friends via Farcaster", gradient: "gradient-pink" },
            {
              step: "4",
              title: "Earn Rewards",
              desc: "Get extra rewards by inviting friends",
              gradient: "gradient-green",
            },
          ].map((item, i) => (
            <div key={i} className="neomorph rounded-2xl p-6 text-center">
              <div
                className={`${item.gradient} rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg`}
              >
                <span className="text-2xl font-bold text-white">{item.step}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="neomorph rounded-3xl p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join LuckyPocket, share joy and earn rewards in the Web3 world
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="gradient-red text-white neomorph-hover rounded-full px-12 py-6 text-lg shadow-xl border-0"
            >
              <Wallet className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="gradient-red rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold">LuckyPocket</span>
        </div>
        <p className="text-sm">Built on Base • Secure & Reliable • Open Source</p>
      </footer>
    </div>
  )
}
