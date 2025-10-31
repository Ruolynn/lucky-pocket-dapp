import { ExploreHeader } from "@/components/explore/explore-header"
import { PocketGrid } from "@/components/explore/pocket-grid"
import { TrendingUsers } from "@/components/explore/trending-users"

export default function ExplorePage() {
  return (
    <div className="min-h-screen">
      <ExploreHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <PocketGrid />
          </div>
          <div>
            <TrendingUsers />
          </div>
        </div>
      </div>
    </div>
  )
}
