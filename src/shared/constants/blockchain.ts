/**
 * Blockchain Networks Configuration
 * Following Clean Architecture - external concerns separated from domain logic
 */

import { NetworkConfig } from '@/features/wallet/types/wallet'

export const AVALANCHE_MAINNET: NetworkConfig = {
  chainId: '0xa86a', // 43114 in decimal
  chainName: 'Avalanche Network',
  nativeCurrency: {
    name: 'AVAX',
    symbol: 'AVAX',
    decimals: 18
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://snowtrace.io/']
}

export const AVALANCHE_TESTNET: NetworkConfig = {
  chainId: '0xa869', // 43113 in decimal
  chainName: 'Avalanche Fuji Testnet',
  nativeCurrency: {
    name: 'AVAX',
    symbol: 'AVAX',
    decimals: 18
  },
  rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://testnet.snowtrace.io/']
}

export const SUPPORTED_NETWORKS = {
  mainnet: AVALANCHE_MAINNET,
  testnet: AVALANCHE_TESTNET
} as const

export const DEFAULT_NETWORK = AVALANCHE_MAINNET

// Wallet Constants
export const WALLET_CONNECT_TIMEOUT = 30000 // 30 seconds
export const BALANCE_REFRESH_INTERVAL = 10000 // 10 seconds
export const METAMASK_DOWNLOAD_URL = 'https://metamask.io/'

// Error Messages
export const WALLET_ERRORS = {
  NOT_INSTALLED: 'MetaMask is not installed. Please install it to continue.',
  CONNECTION_FAILED: 'Failed to connect wallet. Please try again.',
  NETWORK_SWITCH_FAILED: 'Failed to switch network. Please try manually.',
  BALANCE_FETCH_FAILED: 'Failed to fetch balance.',
  USER_REJECTED: 'User rejected the connection request.',
  ALREADY_PROCESSING: 'Wallet operation already in progress.'
} as const
