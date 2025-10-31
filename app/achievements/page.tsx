import { Trophy, Star, Zap, Crown, Award, Target, Gift, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      icon: Gift,
      title: "First Packet",
      description: "Send your first lucky pocket",
      progress: 100,
      unlocked: true,
      reward: "Exclusive Badge",
      color: "text-primary",
    },
    {
      id: 2,
      icon: Star,
      title: "Lucky Star",
      description: "Claim your first lucky pocket",
      progress: 100,
      unlocked: true,
      reward: "Lucky Title",
      color: "text-secondary",
    },
    {
      id: 3,
      icon: Zap,
      title: "Streak Master",
      description: "Send packets for 3 consecutive days",
      progress: 66,
      unlocked: false,
      reward: "Exclusive Cover",
      color: "text-accent",
    },
    {
      id: 4,
      icon: Crown,
      title: "Generous Ambassador",
      description: "Send a total of $100",
      progress: 37,
      unlocked: false,
      reward: "Golden Badge",
      color: "text-chart-4",
    },
    {
      id: 5,
      icon: Target,
      title: "King of Luck",
      description: "Get best luck 10 times",
      progress: 30,
      unlocked: false,
      reward: "King Title",
      color: "text-chart-5",
    },
    {
      id: 6,
      icon: Users,
      title: "Social Expert",
      description: "Invite 10 people to register",
      progress: 20,
      unlocked: false,
      reward: "Expert Badge",
      color: "text-primary",
    },
    {
      id: 7,
      icon: Award,
      title: "Hundred Master",
      description: "Send a total of $1000",
      progress: 8,
      unlocked: false,
      reward: "Master Title",
      color: "text-secondary",
    },
    {
      id: 8,
      icon: Trophy,
      title: "Legendary King",
      description: "Complete all achievements",
      progress: 28,
      unlocked: false,
      reward: "Legendary NFT",
      color: "text-accent",
    },
  ]

  const unlockedCount = achievements.filter((a) => a.unlocked).length
  const totalCount = achievements.length

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="neomorph">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Achievements</h1>
            <Link href="/dashboard">
              <Button variant="ghost" className="rounded-full">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <div className="neomorph rounded-3xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">My Achievements</h2>
              <p className="text-muted-foreground">
                Unlocked {unlockedCount}/{totalCount} achievements
              </p>
            </div>
            <div className="neomorph-inset rounded-full w-20 h-20 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-primary" />
            </div>
          </div>
          <Progress value={(unlockedCount / totalCount) * 100} className="h-3" />
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <Card
                key={achievement.id}
                className={`neomorph border-0 ${achievement.unlocked ? "neomorph-hover" : "opacity-75"}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`neomorph-inset rounded-full w-16 h-16 flex items-center justify-center ${achievement.color}`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    {achievement.unlocked && (
                      <div className="neomorph-flat rounded-full px-3 py-1 text-xs font-bold text-primary">
                        Unlocked
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-bold">{achievement.progress}%</span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Reward</span>
                      <span className="font-bold text-primary">{achievement.reward}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Share Section */}
        <div className="neomorph rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Show Off Your Achievements</h3>
          <p className="text-muted-foreground mb-6">Share on Farcaster and let friends see your honors</p>
          <Button size="lg" className="neomorph-hover rounded-full">
            <Trophy className="mr-2 h-5 w-5" />
            Share Achievements
          </Button>
        </div>
      </div>
    </div>
  )
}
