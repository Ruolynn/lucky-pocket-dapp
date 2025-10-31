"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "Jan", sent: 12, received: 18 },
  { date: "Feb", sent: 19, received: 24 },
  { date: "Mar", sent: 15, received: 21 },
  { date: "Apr", sent: 25, received: 30 },
  { date: "May", sent: 22, received: 28 },
  { date: "Jun", sent: 30, received: 35 },
  { date: "Jul", sent: 28, received: 32 },
]

export function ActivityChart() {
  return (
    <Card className="neomorph border-0">
      <CardHeader>
        <CardTitle>Activity Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            sent: {
              label: "Sent",
              color: "rgb(239, 68, 68)",
            },
            received: {
              label: "Received",
              color: "rgb(34, 197, 94)",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(239, 68, 68)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="rgb(239, 68, 68)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorReceived" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(34, 197, 94)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="rgb(34, 197, 94)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgb(203, 213, 225)" opacity={0.3} />
              <XAxis dataKey="date" stroke="rgb(100, 116, 139)" />
              <YAxis stroke="rgb(100, 116, 139)" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="sent"
                stroke="rgb(239, 68, 68)"
                fillOpacity={1}
                fill="url(#colorSent)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="received"
                stroke="rgb(34, 197, 94)"
                fillOpacity={1}
                fill="url(#colorReceived)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
