'use client'

import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Join LuckyPocket, share joy and earn rewards in the Web3 world
        </p>
        <Link
          href="/create"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

