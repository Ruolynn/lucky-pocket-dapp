'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { Search, Gift } from 'lucide-react'

export default function ClaimPocketForm() {
  const { address } = useAccount()
  const [pocketId, setPocketId] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Claiming pocket:', pocketId)
    // TODO: Implement smart contract interaction
  }

  return (
    <div className="bg-[rgba(255,255,255,0.7)] border border-[rgba(233,212,255,0.4)] rounded-3xl px-8 py-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label htmlFor="pocketId" className="text-sm text-[#2d3748]">
            Pocket ID or Link
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#718096]" />
            <input
              id="pocketId"
              type="text"
              placeholder="0x..."
              value={pocketId}
              onChange={(e) => setPocketId(e.target.value)}
              required
              className="w-full bg-[rgba(250,245,255,0.5)] border border-[rgba(233,212,255,0.5)] rounded-2xl h-14 pl-12 pr-4 text-base text-[#718096] focus:outline-none focus:border-[rgba(152,16,250,0.6)]"
            />
          </div>
        </div>

        {/* Pocket Info Preview (once ID is entered) */}
        {pocketId && (
          <div className="border border-[rgba(252,206,232,0.4)] rounded-2xl p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#718096] mb-1">Creator</p>
                <p className="text-sm text-[#2d3748] font-medium">0x1234...5678</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#718096] mb-1">Total Amount</p>
                <p className="text-sm text-[#2d3748] font-medium">10.0 ETH</p>
              </div>
            </div>
            <div className="flex items-start justify-between pt-4 border-t border-[rgba(253,165,213,0.4)]">
              <div>
                <p className="text-sm text-[#718096] mb-1">Remaining</p>
                <p className="text-base text-[#2d3748] font-semibold">7.5 ETH</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#718096] mb-1">Expires In</p>
                <p className="text-base text-[#2d3748] font-semibold">2 days</p>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={!address || !pocketId}
          className="w-full bg-gradient-to-r from-[rgba(194,122,255,0.7)] to-[rgba(251,100,182,0.7)] border border-[rgba(255,255,255,0.3)] rounded-2xl h-14 flex items-center justify-center text-white text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity gap-2"
        >
          <Gift className="w-5 h-5" />
          Claim Now
        </button>
      </form>
    </div>
  )
}

