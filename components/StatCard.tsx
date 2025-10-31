'use client'

import { Card, CardContent } from './ui/card'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: string
  gradient?: 'primary' | 'secondary' | 'accent'
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  gradient = 'primary',
}: StatCardProps) {
  const gradientClasses = {
    primary: 'from-primary-500/20 to-primary-600/10',
    secondary: 'from-secondary-500/20 to-secondary-600/10',
    accent: 'from-accent-500/20 to-accent-600/10',
  }

  const iconGradientClasses = {
    primary: 'text-primary-400',
    secondary: 'text-secondary-400',
    accent: 'text-accent-400',
  }

  return (
    <Card className="relative overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[gradient]}`} />
      <CardContent className="relative p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm sm:text-base text-gray-400 mb-2">{title}</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
              {value}
            </h3>
            {trend && (
              <p className="text-xs sm:text-sm text-green-400 flex items-center mt-2">
                <span className="mr-1">↑</span>
                {trend}
              </p>
            )}
          </div>
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-background-light/50 backdrop-blur-sm flex items-center justify-center ${iconGradientClasses[gradient]}`}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

