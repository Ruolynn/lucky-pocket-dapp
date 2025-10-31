import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAddress(address: string): string {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function formatBalance(balance: bigint, decimals: number = 18): string {
  const divisor = BigInt(10 ** decimals)
  const whole = balance / divisor
  const remainder = balance % divisor
  const decimalStr = remainder.toString().padStart(decimals, '0')
  const trimmed = decimalStr.replace(/0+$/, '')
  return trimmed ? `${whole}.${trimmed}` : whole.toString()
}

export function parseBalance(value: string, decimals: number = 18): bigint {
  const [whole, decimal = ''] = value.split('.')
  const decimalPadded = decimal.padEnd(decimals, '0').slice(0, decimals)
  return BigInt(whole + decimalPadded)
}

