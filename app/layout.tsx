import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/providers/WagmiProvider'

export const metadata: Metadata = {
  title: 'Lucky Pocket DApp',
  description: 'Send and receive lucky pockets on the blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

