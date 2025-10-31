import { Button } from "@/components/ui/button"
import { Settings, Share2 } from "lucide-react"
import Image from "next/image"

export function ProfileHeader() {
  return (
    <div className="neomorph rounded-3xl p-8 mb-8">
      <div className="flex items-start gap-6">
        <Image
          src="/abstract-profile.png"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full neomorph-inset"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Alice.eth</h1>
              <p className="text-muted-foreground">0x1234...5678</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="neomorph rounded-full bg-transparent">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="neomorph rounded-full bg-transparent">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Web3 Enthusiast | Lucky Pocket Expert | Sharing Joy 🎁
          </p>

          <div className="flex gap-8">
            <div>
              <div className="text-2xl font-bold text-primary">1,234</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">567</div>
              <div className="text-sm text-muted-foreground">Following</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">156</div>
              <div className="text-sm text-muted-foreground">Total Packets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
