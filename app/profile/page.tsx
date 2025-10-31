import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileStats } from "@/components/profile/profile-stats"
import { ProfileActivity } from "@/components/profile/profile-activity"

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <ProfileHeader />
        <ProfileStats />
        <ProfileActivity />
      </div>
    </div>
  )
}
