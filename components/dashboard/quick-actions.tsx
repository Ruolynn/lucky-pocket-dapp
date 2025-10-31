import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Send, Download } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  return (
    <Card className="neomorph border-0">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Link href="/create" className="block">
          <Button
            className="w-full gradient-red text-white neomorph-hover rounded-full justify-start shadow-lg border-0"
            size="lg"
          >
            <Plus className="mr-2 h-5 w-5" />
            Create Packet
          </Button>
        </Link>

        <Button
          className="w-full gradient-purple text-white neomorph-hover rounded-full justify-start shadow-lg border-0"
          size="lg"
        >
          <Send className="mr-2 h-5 w-5" />
          Send Packet
        </Button>

        <Button
          className="w-full gradient-green text-white neomorph-hover rounded-full justify-start shadow-lg border-0"
          size="lg"
        >
          <Download className="mr-2 h-5 w-5" />
          Withdraw Earnings
        </Button>
      </CardContent>
    </Card>
  )
}
