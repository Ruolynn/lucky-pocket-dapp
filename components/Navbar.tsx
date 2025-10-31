'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              LuckyPocket
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/create" className="text-gray-700 dark:text-gray-300 hover:text-primary-600">
                Create
              </Link>
              <Link href="/claim" className="text-gray-700 dark:text-gray-300 hover:text-primary-600">
                Claim
              </Link>
              <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-primary-600">
                Dashboard
              </Link>
              <Link href="/explore" className="text-gray-700 dark:text-gray-300 hover:text-primary-600">
                Explore
              </Link>
            </div>
          </div>
          <ConnectButton />
        </div>
      </div>
    </nav>
  )
}

