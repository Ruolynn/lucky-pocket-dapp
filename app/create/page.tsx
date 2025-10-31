import { CreatePocketForm } from "@/components/create/create-pocket-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CreatePage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link href="/dashboard">
          <Button variant="ghost" className="neomorph-flat rounded-full mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Create Lucky Pocket</h1>
            <p className="text-muted-foreground text-lg">Set packet parameters and share surprises with friends</p>
          </div>

          <CreatePocketForm />
        </div>
      </div>
    </div>
  )
}
