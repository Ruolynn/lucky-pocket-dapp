import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock } from "lucide-react"

const recentPockets = [
  {
    id: 1,
    title: "Happy New Year Packet",
    amount: "0.5 ETH",
    claimed: 12,
    total: 20,
    status: "active",
    time: "2 hours ago",
    iconGradient: "gradient-red",
    progressGradient: "gradient-red",
    amountColor: "text-red-600",
  },
  {
    id: 2,
    title: "Birthday Wishes",
    amount: "0.3 ETH",
    claimed: 8,
    total: 10,
    status: "active",
    time: "5 hours ago",
    iconGradient: "gradient-purple",
    progressGradient: "gradient-purple",
    amountColor: "text-purple-600",
  },
  {
    id: 3,
    title: "Thank You Packet",
    amount: "0.2 ETH",
    claimed: 15,
    total: 15,
    status: "completed",
    time: "1 day ago",
    iconGradient: "gradient-green",
    progressGradient: "gradient-green",
    amountColor: "text-green-600",
  },
  {
    id: 4,
    title: "Weekend Bonus",
    amount: "1.0 ETH",
    claimed: 45,
    total: 50,
    status: "active",
    time: "2 days ago",
    iconGradient: "gradient-orange",
    progressGradient: "gradient-orange",
    amountColor: "text-orange-600",
  },
]

export function RecentPockets() {
  return (
    <Card className="neomorph border-0">
      <CardHeader>
        <CardTitle>Recent Packets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPockets.map((pocket) => (
            <div key={pocket.id} className="neomorph-flat rounded-2xl p-4 neomorph-hover cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`${pocket.iconGradient} rounded-2xl p-2 shadow-lg`}>
                    <Gift className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{pocket.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {pocket.time}
                    </div>
                  </div>
                </div>
                <Badge
                  className={`rounded-full border-0 ${
                    pocket.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {pocket.status === "active" ? "Active" : "Completed"}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className={`text-2xl font-bold ${pocket.amountColor}`}>{pocket.amount}</div>
                <div className="text-sm text-muted-foreground">
                  {pocket.claimed}/{pocket.total} Claimed
                </div>
              </div>

              <div className="mt-3 neomorph-inset rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full ${pocket.progressGradient} rounded-full`}
                  style={{ width: `${(pocket.claimed / pocket.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
