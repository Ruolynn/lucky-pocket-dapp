import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { ActivityChart } from "@/components/dashboard/activity-chart"
import { RecentPockets } from "@/components/dashboard/recent-pockets"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  return (
    <div className="min-h-screen liquid-glass-bg">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="space-y-8">
          <StatsCards />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ActivityChart />
            </div>
            <div>
              <QuickActions />
            </div>
          </div>

          <RecentPockets />
        </div>
      </div>
    </div>
  )
}
