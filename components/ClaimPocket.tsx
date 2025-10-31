'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Gift, Sparkles, Clock, CheckCircle2 } from 'lucide-react'

interface ClaimPocketProps {
  pocketId: string
  creator: string
  totalAmount: string
  remaining: string
  expiresAt: string
}

export default function ClaimPocket({
  pocketId,
  creator,
  totalAmount,
  remaining,
  expiresAt,
}: ClaimPocketProps) {
  const handleClaim = () => {
    // Handle pocket claiming
    console.log('Claiming pocket:', pocketId)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
          <Gift className="w-10 h-10 text-white" />
        </div>
        <CardTitle className="text-2xl">Lucky Pocket</CardTitle>
        <CardDescription>
          From {creator.slice(0, 6)}...{creator.slice(-4)}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-background-light/50 border border-border">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-secondary-400" />
              <span className="text-sm text-gray-400">Total Amount</span>
            </div>
            <span className="text-lg font-semibold text-white">{totalAmount} ETH</span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-background-light/50 border border-border">
            <div className="flex items-center space-x-2">
              <Gift className="w-5 h-5 text-primary-400" />
              <span className="text-sm text-gray-400">Remaining</span>
            </div>
            <span className="text-lg font-semibold text-white">{remaining} ETH</span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-background-light/50 border border-border">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-accent-400" />
              <span className="text-sm text-gray-400">Expires</span>
            </div>
            <span className="text-sm text-gray-300">{expiresAt}</span>
          </div>
        </div>

        <Button
          onClick={handleClaim}
          variant="primary"
          size="lg"
          className="w-full"
        >
          <CheckCircle2 className="w-5 h-5 mr-2" />
          Claim Lucky Pocket
        </Button>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Pocket ID: {pocketId.slice(0, 10)}...{pocketId.slice(-8)}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

