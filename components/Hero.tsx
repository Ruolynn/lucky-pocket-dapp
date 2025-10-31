'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            LuckyPocket
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Web3 Social Lucky Pocket on Base Chain
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Send lucky pockets, claim rewards, invite friends. Share joy and wealth in the Web3 world. 
            Every share is full of surprises, every lucky pocket is the beginning of social connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/create"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/explore"
              className="bg-white dark:bg-gray-800 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-2 border-primary-600"
            >
              Explore Lucky Pockets
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

