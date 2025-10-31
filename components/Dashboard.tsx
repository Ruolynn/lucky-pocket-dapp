'use client'

import StatCard from './StatCard'
import CreatePocket from './CreatePocket'
import ClaimPocket from './ClaimPocket'
import { Wallet, TrendingUp, Gift, Users } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Pockets',
      value: '1,234',
      icon: Gift,
      trend: '+12.5%',
      gradient: 'primary' as const,
    },
    {
      title: 'Total Volume',
      value: '456.7 ETH',
      icon: TrendingUp,
      trend: '+8.2%',
      gradient: 'secondary' as const,
    },
    {
      title: 'Active Users',
      value: '5,678',
      icon: Users,
      trend: '+23.1%',
      gradient: 'accent' as const,
    },
    {
      title: 'My Balance',
      value: '12.34 ETH',
      icon: Wallet,
      gradient: 'primary' as const,
    },
  ]

  return (
    <div className="w-full space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Create Pocket Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Create Pocket</h2>
          <CreatePocket />
        </div>

        {/* Claim Pocket Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Available Pockets</h2>
          <div className="space-y-4">
            <ClaimPocket
              pocketId="0x1234567890abcdef1234567890abcdef12345678"
              creator="0xabcdef1234567890abcdef1234567890abcdef12"
              totalAmount="10.0"
              remaining="7.5"
              expiresAt="2 days"
            />
            <ClaimPocket
              pocketId="0x9876543210fedcba9876543210fedcba98765432"
              creator="0xfedcba0987654321fedcba0987654321fedcba09"
              totalAmount="5.0"
              remaining="3.2"
              expiresAt="1 day"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

