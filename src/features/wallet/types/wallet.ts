export interface WalletAddress {
  value: string
  formatted: string
}

export interface WalletBalance {
  raw: string
  formatted: string
  symbol: string
}

export interface WalletState {
  isConnected: boolean
  address: WalletAddress | null
  balance: WalletBalance | null
  isLoading: boolean
  error: string | null
}

export interface NetworkConfig {
  chainId: string
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: string[]
  blockExplorerUrls: string[]
}

export interface WalletConnectionResult {
  success: boolean
  address?: string
  error?: string
}
