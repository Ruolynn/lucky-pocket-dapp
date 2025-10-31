'use client'

import Header from '@/components/Header'
import TokensBackground from '@/components/TokensBackground'
import ClaimPocketForm from '@/components/ClaimPocketForm'

export default function ClaimPage() {
  return (
    <div className="bg-[#fef8f3] min-h-screen relative">
      <TokensBackground />
      <div className="relative z-10">
        <Header />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-[#2d3748] mb-2">Claim Lucky Pocket</h1>
              <p className="text-base text-[#718096]">Enter the pocket ID to claim your share</p>
            </div>
            <ClaimPocketForm />
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[rgba(252,206,232,0.5)] bg-[rgba(255,255,255,0.6)] py-8 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-[#718096]">
                © 2025 Lucky Pocket. Built on Base Chain.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-[#718096] hover:text-[#2d3748] transition-colors">
                  Docs
                </a>
                <a href="#" className="text-sm text-[#718096] hover:text-[#2d3748] transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-sm text-[#718096] hover:text-[#2d3748] transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

