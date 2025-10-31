'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Wallet, Menu, X, Gift } from 'lucide-react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { formatAddress } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const pathname = usePathname()

  const handleConnect = () => {
    if (isConnected) {
      disconnect()
    } else {
      const coinbaseConnector = connectors.find(c => c.id === 'coinbaseWalletSDK')
      if (coinbaseConnector) {
        connect({ connector: coinbaseConnector })
      }
    }
  }

  const handleWalletConnect = () => {
    const walletConnectConnector = connectors.find(c => c.id === 'walletConnect')
    if (walletConnectConnector) {
      connect({ connector: walletConnectConnector })
    }
  }

  return (
    <header className="w-full border-b border-[rgba(252,206,232,0.5)] backdrop-blur-lg bg-[rgba(255,255,255,0.6)] sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-gradient-to-br from-[#c27aff] to-[#fb64b6] flex items-center justify-center shadow-lg shadow-[rgba(233,212,255,0.5)]">
              <Gift className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <h1 className="text-lg md:text-xl font-normal text-[#2d3748]">
              Lucky Pocket
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link href="/">
              <div className={`rounded-full px-4 py-2 h-[42px] cursor-pointer transition-colors ${
                pathname === '/'
                  ? 'bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.6)]'
                  : 'hover:bg-[rgba(255,255,255,0.6)]'
              }`}>
                <span className={`text-[16px] ${pathname === '/' ? 'text-[#2d3748]' : 'text-[#718096]'}`}>Create</span>
              </div>
            </Link>
            <Link href="/claim">
              <div className={`rounded-full px-4 py-2 h-[40px] cursor-pointer transition-colors ${
                pathname === '/claim'
                  ? 'bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.6)]'
                  : 'hover:bg-[rgba(0,0,0,0.05)]'
              }`}>
                <span className={`text-[16px] ${pathname === '/claim' ? 'text-[#2d3748]' : 'text-[#718096]'}`}>Claim</span>
              </div>
            </Link>
            <Link href="/dashboard">
              <div className={`flex-1 rounded-full px-4 py-2 h-[40px] cursor-pointer transition-colors ${
                pathname === '/dashboard'
                  ? 'bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.6)]'
                  : 'hover:bg-[rgba(0,0,0,0.05)]'
              }`}>
                <span className={`text-[16px] ${pathname === '/dashboard' ? 'text-[#2d3748]' : 'text-[#718096]'}`}>Dashboard</span>
              </div>
            </Link>
          </nav>

          {/* Connect Button */}
          <div className="flex items-center space-x-3">
            {/* Base Chain Indicator */}
            <div className="hidden lg:flex items-center gap-2 bg-[rgba(220,252,231,0.6)] border border-[rgba(185,248,207,0.5)] rounded-full px-[13px] py-1 h-[34px]">
              <div className="w-2 h-2 rounded-full opacity-50 bg-[#008236]" />
              <span className="text-sm text-[#008236]">Base</span>
            </div>
            
            {isConnected && address ? (
              <button
                onClick={handleConnect}
                className="bg-gradient-to-r from-[rgba(194,122,255,0.6)] to-[rgba(251,100,182,0.6)] border border-[rgba(255,255,255,0.4)] rounded-full px-4 py-2 h-[42px] flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Wallet className="w-4 h-4 text-white" />
                <span className="text-white text-base">{formatAddress(address)}</span>
              </button>
            ) : (
              <button
                onClick={handleConnect}
                className="bg-gradient-to-r from-[rgba(194,122,255,0.6)] to-[rgba(251,100,182,0.6)] border border-[rgba(255,255,255,0.4)] rounded-full px-4 py-2 h-[42px] flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Wallet className="w-4 h-4 text-white" />
                <span className="text-white text-base">Connect</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[rgba(0,0,0,0.05)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(252,206,232,0.5)]">
            <nav className="flex flex-col space-y-4">
              <Link href="/dashboard" className="text-gray-700 hover:text-gray-900 transition-colors">
                Dashboard
              </Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Create
              </Link>
              <Link href="/claim" className="text-gray-700 hover:text-gray-900 transition-colors">
                Claim
              </Link>
              {!isConnected && (
                <div className="pt-4 border-t border-[rgba(252,206,232,0.5)]">
                  <button
                    onClick={handleConnect}
                    className="w-full bg-gradient-to-r from-[rgba(194,122,255,0.6)] to-[rgba(251,100,182,0.6)] text-white rounded-lg py-2 flex items-center justify-center gap-2"
                  >
                    <Wallet className="w-4 h-4" />
                    Connect Wallet
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
