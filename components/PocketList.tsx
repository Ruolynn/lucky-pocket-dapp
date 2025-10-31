'use client'

import { Gift, Clock, Users, TrendingUp, ExternalLink } from 'lucide-react'
import { formatAddress } from '@/lib/utils'

export default function PocketList() {
  // Mock data - in production, this would come from smart contract events
  const pockets = [
    {
      id: '0x1234567890abcdef1234567890abcdef12345678',
      amount: '10.0',
      remaining: '7.5',
      recipients: '5',
      claimed: '3',
      expiresAt: '2 days ago',
      status: 'active',
    },
    {
      id: '0x9876543210fedcba9876543210fedcba98765432',
      amount: '5.0',
      remaining: '0',
      recipients: '10',
      claimed: '10',
      expiresAt: '5 days ago',
      status: 'completed',
    },
    {
      id: '0xabcdef1234567890abcdef1234567890abcdef12',
      amount: '15.0',
      remaining: '15.0',
      recipients: '20',
      claimed: '0',
      expiresAt: '7 days',
      status: 'pending',
    },
  ]

  return (
    <div className="space-y-4">
      {pockets.map((pocket) => (
        <div
          key={pocket.id}
          className="bg-[rgba(255,255,255,0.7)] border border-[rgba(233,212,255,0.4)] rounded-3xl p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[rgba(194,122,255,0.6)] to-[rgba(251,100,182,0.6)] flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#2d3748]">
                  {formatAddress(pocket.id)}
                </p>
                <p className="text-xs text-[#718096]">Pocket ID</p>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                pocket.status === 'active'
                  ? 'bg-green-100 text-green-700'
                  : pocket.status === 'completed'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {pocket.status}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="text-xs text-[#718096] mb-1">Total Amount</p>
              <p className="text-base font-semibold text-[#2d3748]">{pocket.amount} ETH</p>
            </div>
            <div>
              <p className="text-xs text-[#718096] mb-1">Remaining</p>
              <p className="text-base font-semibold text-[#2d3748]">{pocket.remaining} ETH</p>
            </div>
            <div>
              <p className="text-xs text-[#718096] mb-1">Recipients</p>
              <p className="text-base font-semibold text-[#2d3748] flex items-center gap-1">
                <Users className="w-4 h-4" />
                {pocket.claimed}/{pocket.recipients}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#718096] mb-1">Expires</p>
              <p className="text-base font-semibold text-[#2d3748] flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {pocket.expiresAt}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[rgba(252,206,232,0.4)]">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[rgba(194,122,255,0.8)] to-[rgba(251,100,182,0.8)] h-2 rounded-full transition-all"
                style={{
                  width: `${((parseInt(pocket.recipients) - parseFloat(pocket.remaining) / (parseFloat(pocket.amount) / parseInt(pocket.recipients))) / parseInt(pocket.recipients)) * 100}%`,
                }}
              />
            </div>
            <a
              href={`https://basescan.org/tx/${pocket.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 p-2 hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-[#718096]" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

