'use client'

import { useState } from 'react'
import { useAccount, useBalance } from 'wagmi'
import { Gift, Coins, Users, Clock, TrendingUp, Download, Zap } from 'lucide-react'

export default function CreatePocket() {
  const { address } = useAccount()
  const { data: balance } = useBalance({ address })
  
  const [amount, setAmount] = useState('')
  const [distributionMode, setDistributionMode] = useState<'random' | 'equal'>('random')
  const [recipients, setRecipients] = useState('10')
  const [expiration, setExpiration] = useState('24')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Creating pocket:', { amount, distributionMode, recipients, expiration })
    // TODO: Implement smart contract interaction
  }

  const handleMax = () => {
    if (balance?.value) {
      const maxAmount = Number(balance.formatted) - 0.001 // Leave some for gas
      setAmount(Math.max(0, maxAmount).toString())
    }
  }

  const calculatedAmount = amount && recipients
    ? (parseFloat(amount) / parseFloat(recipients)).toFixed(4)
    : '0.0000'

  const totalCost = amount && recipients
    ? (parseFloat(amount) + 0.002).toFixed(4)
    : '0.0000'

  return (
    <div className="bg-[rgba(255,255,255,0.7)] border border-[rgba(233,212,255,0.4)] rounded-3xl px-8 py-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#2d3748] mb-2">Create Lucky Pocket</h2>
        <p className="text-base text-[#718096]">Distribute tokens to multiple recipients on Base chain</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Total Amount */}
        <div className="space-y-3">
          <label htmlFor="amount" className="text-sm text-[#2d3748]">Total Amount</label>
          <div className="relative">
            <input
              id="amount"
              type="number"
              step="0.0001"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full bg-[rgba(250,245,255,0.5)] border border-[rgba(233,212,255,0.5)] rounded-2xl h-14 px-4 pr-32 text-base text-[#718096] focus:outline-none focus:border-[rgba(152,16,250,0.6)]"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="bg-[rgba(255,255,255,0.5)] border border-[rgba(255,255,255,0.6)] rounded-[20px] px-4 py-2 flex items-center gap-2">
                <span className="text-sm text-[#2d3748]">ETH</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#718096]">
              Balance: {balance ? parseFloat(balance.formatted).toFixed(4) : '0.0000'} ETH
            </span>
            <button
              type="button"
              onClick={handleMax}
              className="bg-[rgba(255,255,255,0.5)] border border-[rgba(255,255,255,0.6)] rounded-2xl px-4 py-2 text-sm font-semibold text-[#9810fa] hover:bg-[rgba(255,255,255,0.7)] transition-colors"
            >
              Max
            </button>
          </div>
        </div>

        {/* Distribution Mode */}
        <div className="space-y-3">
          <label className="text-sm text-[#2d3748]">Distribution Mode</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setDistributionMode('random')}
              className={`rounded-2xl p-6 border-2 transition-all ${
                distributionMode === 'random'
                  ? 'bg-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.6)]'
                  : 'bg-[rgba(255,255,255,0.3)] border-[rgba(255,255,255,0.4)]'
              }`}
            >
              <div className="flex flex-col items-start space-y-3">
                <TrendingUp className="w-6 h-6 text-[#2d3748]" />
                <span className="text-sm text-[#2d3748] font-medium">Random</span>
                <span className="text-xs text-[#718096]">Random amount per recipient</span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setDistributionMode('equal')}
              className={`rounded-2xl p-6 border-2 transition-all ${
                distributionMode === 'equal'
                  ? 'bg-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.6)]'
                  : 'bg-[rgba(255,255,255,0.3)] border-[rgba(255,255,255,0.4)]'
              }`}
            >
              <div className="flex flex-col items-start space-y-3">
                <Download className="w-6 h-6 text-[#2d3748]" />
                <span className="text-sm text-[#2d3748] font-medium">Equal</span>
                <span className="text-xs text-[#718096]">Same amount for everyone</span>
              </div>
            </button>
          </div>
        </div>

        {/* Number of Recipients */}
        <div className="space-y-3">
          <label htmlFor="recipients" className="text-sm text-[#2d3748]">Number of Recipients</label>
          <input
            id="recipients"
            type="number"
            min="1"
            placeholder="10"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            required
            className="w-full bg-[rgba(250,245,255,0.5)] border border-[rgba(233,212,255,0.5)] rounded-2xl h-14 px-4 text-base text-[#718096] focus:outline-none focus:border-[rgba(152,16,250,0.6)]"
          />
        </div>

        {/* Expiration */}
        <div className="space-y-3">
          <label htmlFor="expiration" className="text-sm text-[#2d3748]">Expiration (Hours)</label>
          <input
            id="expiration"
            type="number"
            min="1"
            placeholder="24"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
            required
            className="w-full bg-[rgba(250,245,255,0.5)] border border-[rgba(233,212,255,0.5)] rounded-2xl h-14 px-4 text-base text-[#718096] focus:outline-none focus:border-[rgba(152,16,250,0.6)]"
          />
        </div>

        {/* Cost Summary */}
        <div className="border border-[rgba(252,206,232,0.4)] rounded-2xl p-5 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#718096]">Per recipient (avg)</span>
            <span className="text-sm text-[#2d3748]">{calculatedAmount} ETH</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#718096]">Estimated gas</span>
            <span className="text-sm text-[#2d3748]">0.002 ETH</span>
          </div>
          <div className="border-t border-[rgba(253,165,213,0.4)] pt-4 flex justify-between items-center">
            <span className="text-[#718096]">Total cost</span>
            <span className="text-base font-semibold text-[#2d3748]">{totalCost} ETH</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!address}
          className="w-full bg-gradient-to-r from-[rgba(194,122,255,0.7)] to-[rgba(251,100,182,0.7)] border border-[rgba(255,255,255,0.3)] rounded-2xl h-14 flex items-center justify-center text-white text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          Create Lucky Pocket
        </button>
      </form>

      {/* Features */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-[rgba(255,255,255,0.6)] border border-[rgba(190,219,255,0.4)] rounded-2xl p-4 text-center">
          <div className="flex justify-center mb-2">
            <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center">
              <Zap className="w-3 h-3 text-blue-600" />
            </div>
          </div>
          <p className="text-xs text-[#718096]">Instant Distribution</p>
        </div>
        <div className="bg-[rgba(255,255,255,0.6)] border border-[rgba(185,248,207,0.4)] rounded-2xl p-4 text-center">
          <div className="flex justify-center mb-2">
            <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center">
              <Users className="w-3 h-3 text-green-600" />
            </div>
          </div>
          <p className="text-xs text-[#718096]">First Come First Serve</p>
        </div>
        <div className="bg-[rgba(255,255,255,0.6)] border border-[rgba(233,212,255,0.4)] rounded-2xl p-4 text-center">
          <div className="flex justify-center mb-2">
            <div className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center">
              <Gift className="w-3 h-3 text-purple-600" />
            </div>
          </div>
          <p className="text-xs text-[#718096]">On-Chain Verified</p>
        </div>
      </div>
    </div>
  )
}
