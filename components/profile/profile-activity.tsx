import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "sent",
    title: "Sent packet to community",
    amount: "0.5 ETH",
    time: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "received",
    title: "Received from Bob.base",
    amount: "0.08 ETH",
    time: "5 hours ago",
    status: "completed",
  },
  {
    id: 3,
    type: "sent",
    title: "Birthday packet",
    amount: "0.3 ETH",
    time: "1 day ago",
    status: "completed",
  },
  {
    id: 4,
    type: "received",
    title: "Received from Carol.eth",
    amount: "0.12 ETH",
    time: "2 days ago",
    status: "completed",
  },
  {
    id: 5,
    type: "sent",
    title: "Thank you packet",
    amount: "0.2 ETH",
    time: "3 days ago",
    status: "completed",
  },
]

export function ProfileActivity() {
  return (
    <Card className="neomorph border-0">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="neomorph-flat rounded-2xl p-4 neomorph-hover">
              <div className="flex items-center gap-4">
                <div
                  className={`neomorph-inset rounded-full p-3 ${
                    activity.type === "sent" ? "text-primary" : "text-secondary"
                  }`}
                >
                  {activity.type === "sent" ? (
                    <ArrowUpRight className="h-5 w-5" />
                  ) : (
                    <ArrowDownLeft className="h-5 w-5" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="font-semibold mb-1">{activity.title}</div>
                  <div className="text-sm text-muted-foreground">{activity.time}</div>
                </div>

                <div className="text-right">
                  <div className={`text-lg font-bold ${activity.type === "sent" ? "text-primary" : "text-secondary"}`}>
                    {activity.type === "sent" ? "-" : "+"}
                    {activity.amount}
                  </div>
                  <Badge variant="secondary" className="rounded-full text-xs">
                    Completed
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
