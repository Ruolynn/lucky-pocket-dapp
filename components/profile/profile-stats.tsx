import { Card, CardContent } from "@/components/ui/card"
import { Gift, TrendingUp, Award, Zap } from "lucide-react"

export function ProfileStats() {
  const stats = [
    {
      icon: Gift,
      label: "Sent Packets",
      value: "156",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      label: "Received Packets",
      value: "243",
      color: "text-secondary",
    },
    {
      icon: Award,
      label: "Total Earnings",
      value: "12.5 ETH",
      color: "text-accent",
    },
    {
      icon: Zap,
      label: "Activity Score",
      value: "98%",
      color: "text-chart-5",
    },
  ]

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="neomorph border-0">
          <CardContent className="p-6 text-center">
            <div
              className={`neomorph-inset rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ${stat.color}`}
            >
              <stat.icon className="h-8 w-8" />
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
