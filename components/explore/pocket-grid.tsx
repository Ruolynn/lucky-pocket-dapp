import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gift, Users, Clock } from "lucide-react"
import Image from "next/image"

const pockets = [
  {
    id: 1,
    creator: "Alice.eth",
    avatar: "/diverse-avatars.png",
    title: "Spring Festival Mega Packet",
    amount: "2.5 ETH",
    claimed: 45,
    total: 100,
    category: "Festival",
    time: "1 hour ago",
    gradient: "gradient-red",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    id: 2,
    creator: "Bob.base",
    avatar: "/diverse-avatars.png",
    title: "Project Launch Celebration",
    amount: "1.8 ETH",
    claimed: 23,
    total: 50,
    category: "Celebration",
    time: "3 hours ago",
    gradient: "gradient-purple",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 3,
    creator: "Carol.eth",
    avatar: "/diverse-avatars.png",
    title: "Community Rewards",
    amount: "3.2 ETH",
    claimed: 67,
    total: 150,
    category: "Rewards",
    time: "5 hours ago",
    gradient: "gradient-green",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    creator: "David.base",
    avatar: "/diverse-avatars.png",
    title: "Thank You Packet",
    amount: "0.8 ETH",
    claimed: 12,
    total: 30,
    category: "Thanks",
    time: "8 hours ago",
    gradient: "gradient-pink",
    badgeColor: "bg-pink-100 text-pink-700",
  },
  {
    id: 5,
    creator: "Eve.eth",
    avatar: "/diverse-avatars.png",
    title: "Weekend Surprise",
    amount: "1.5 ETH",
    claimed: 34,
    total: 80,
    category: "Surprise",
    time: "12 hours ago",
    gradient: "gradient-orange",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    id: 6,
    creator: "Frank.base",
    avatar: "/diverse-avatars.png",
    title: "New Product Launch",
    amount: "2.0 ETH",
    claimed: 56,
    total: 120,
    category: "Event",
    time: "1 day ago",
    gradient: "gradient-blue",
    badgeColor: "bg-blue-100 text-blue-700",
  },
]

export function PocketGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {pockets.map((pocket) => (
        <Card key={pocket.id} className="neomorph border-0 neomorph-hover cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={pocket.avatar || "/placeholder.svg"}
                alt={pocket.creator}
                width={40}
                height={40}
                className="rounded-full neomorph-inset"
              />
              <div className="flex-1">
                <div className="font-semibold">{pocket.creator}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {pocket.time}
                </div>
              </div>
              <Badge className={`rounded-full ${pocket.badgeColor} border-0`}>{pocket.category}</Badge>
            </div>

            <h3 className="text-xl font-bold mb-4">{pocket.title}</h3>

            <div className="neomorph-flat rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Gift className="h-5 w-5" />
                  <span>Total Amount</span>
                </div>
                <div
                  className={`text-2xl font-bold ${pocket.gradient.includes("red") ? "text-red-600" : pocket.gradient.includes("green") ? "text-green-600" : pocket.gradient.includes("purple") ? "text-purple-600" : pocket.gradient.includes("pink") ? "text-pink-600" : pocket.gradient.includes("orange") ? "text-orange-600" : "text-blue-600"}`}
                >
                  {pocket.amount}
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>
                    {pocket.claimed}/{pocket.total} Claimed
                  </span>
                </div>
                <span className="text-sm font-medium">{Math.round((pocket.claimed / pocket.total) * 100)}%</span>
              </div>

              <div className="neomorph-inset rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full ${pocket.gradient} rounded-full`}
                  style={{ width: `${(pocket.claimed / pocket.total) * 100}%` }}
                />
              </div>
            </div>

            <Button
              className={`w-full ${pocket.gradient} text-white neomorph-hover rounded-full border-0 shadow-lg`}
              size="lg"
            >
              Claim Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
