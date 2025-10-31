"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Gift, Users, Coins, MessageSquare } from "lucide-react"

export function CreatePocketForm() {
  const [amount, setAmount] = useState("")
  const [quantity, setQuantity] = useState("")
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  return (
    <Card className="neomorph border-0">
      <CardContent className="p-8">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="flex items-center gap-2">
              <Gift className="h-4 w-4 text-primary" />
              Packet Title
            </Label>
            <Input
              id="title"
              placeholder="Give your packet a name..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="neomorph-inset border-0 rounded-2xl h-12"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="amount" className="flex items-center gap-2">
                <Coins className="h-4 w-4 text-secondary" />
                Total Amount (ETH)
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="neomorph-inset border-0 rounded-2xl h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity" className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" />
                Packet Quantity
              </Label>
              <Input
                id="quantity"
                type="number"
                placeholder="0"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="neomorph-inset border-0 rounded-2xl h-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-chart-5" />
              Blessing Message
            </Label>
            <Textarea
              id="message"
              placeholder="Write your blessing..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="neomorph-inset border-0 rounded-2xl min-h-[120px] resize-none"
            />
          </div>

          <div className="neomorph-flat rounded-2xl p-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Average per packet</span>
              <span className="font-semibold">
                {amount && quantity ? (Number.parseFloat(amount) / Number.parseInt(quantity)).toFixed(4) : "0.0000"} ETH
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Estimated Gas Fee</span>
              <span className="font-semibold">~0.002 ETH</span>
            </div>
            <div className="h-px bg-border my-3" />
            <div className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold text-primary">
                {amount ? (Number.parseFloat(amount) + 0.002).toFixed(4) : "0.0000"} ETH
              </span>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full neomorph-hover rounded-full text-lg py-6">
            Create Packet
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
