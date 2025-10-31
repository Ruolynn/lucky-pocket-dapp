'use client'

import { Gift, TrendingUp, Users, Wallet } from 'lucide-react'

export default function PocketStats() {
  const stats = [
    {
      title: 'Total Pockets Created',
      value: '42',
      icon: Gift,
      gradient: 'from-[rgba(194,122,255,0.6)] to-[rgba(251,100,182,0.6)]',
    },
    {
      title: 'Total Volume',
      value: '125.5 ETH',
      icon: TrendingUp,
      gradient: 'from-[rgba(123,241,168,0.6)] to-[rgba(142,197,255,0.6)]',
    },
    {
      title: 'Recipients',
      value: '1,234',
      icon: Users,
      gradient: 'from-[rgba(255,223,32,0.6)] to-[rgba(253,165,213,0.6)]',
    },
    {
      title: 'Current Balance',
      value: '12.34 ETH',
      icon: Wallet,
      gradient: 'from-[rgba(194,122,255,0.6)] to-[rgba(251,100,182,0.6)]',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.7)] border border-[rgba(233,212,255,0.4)] rounded-3xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-2xl font-semibold text-[#2d3748] mb-1">{stat.value}</p>
            <p className="text-sm text-[#718096]">{stat.title}</p>
          </div>
        )
      })}
    </div>
  )
}

