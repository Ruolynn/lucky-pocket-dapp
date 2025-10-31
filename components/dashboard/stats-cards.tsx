import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Gift, TrendingUp, Users } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "Wallet Balance",
      value: "12.5 ETH",
      change: "+2.5%",
      icon: Wallet,
      gradient: "gradient-blue",
      textColor: "text-white",
    },
    {
      title: "Sent Packets",
      value: "156",
      change: "+12",
      icon: Gift,
      gradient: "gradient-red",
      textColor: "text-white",
    },
    {
      title: "Received Packets",
      value: "243",
      change: "+18",
      icon: TrendingUp,
      gradient: "gradient-green",
      textColor: "text-white",
    },
    {
      title: "Followers",
      value: "1,234",
      change: "+45",
      icon: Users,
      gradient: "gradient-purple",
      textColor: "text-white",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="neomorph border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.gradient} rounded-2xl p-3 ${stat.textColor} shadow-lg`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.title}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
