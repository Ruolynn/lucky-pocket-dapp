import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

const trendingUsers = [
  {
    id: 1,
    name: "Alice.eth",
    avatar: "/diverse-avatars.png",
    pockets: 156,
    followers: 2340,
  },
  {
    id: 2,
    name: "Bob.base",
    avatar: "/diverse-avatars.png",
    pockets: 142,
    followers: 1890,
  },
  {
    id: 3,
    name: "Carol.eth",
    avatar: "/diverse-avatars.png",
    pockets: 128,
    followers: 1650,
  },
  {
    id: 4,
    name: "David.base",
    avatar: "/diverse-avatars.png",
    pockets: 115,
    followers: 1420,
  },
  {
    id: 5,
    name: "Eve.eth",
    avatar: "/diverse-avatars.png",
    pockets: 98,
    followers: 1230,
  },
]

export function TrendingUsers() {
  return (
    <Card className="neomorph border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Trending Users
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {trendingUsers.map((user, index) => (
          <div key={user.id} className="neomorph-flat rounded-2xl p-4 neomorph-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <Image
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  width={48}
                  height={48}
                  className="rounded-full neomorph-inset"
                />
                <div className="absolute -top-1 -left-1 neomorph-inset rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{user.name}</div>
                <div className="text-sm text-muted-foreground">{user.pockets} packets</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{user.followers.toLocaleString()} followers</span>
              <Button size="sm" variant="outline" className="neomorph rounded-full bg-transparent">
                Follow
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
