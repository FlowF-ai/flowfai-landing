/**
 * Wallet Service Factory
 * Following Abstract Factory pattern for wallet service creation
 */

import { WalletService } from '@/types'
import { MetaMaskWalletService } from './metamask.service'

export type WalletType = 'metamask' | 'walletconnect' | 'coinbase'

export class WalletServiceFactory {
  static create(type: WalletType): WalletService {
    switch (type) {
      case 'metamask':
        return new MetaMaskWalletService()
      case 'walletconnect':
        // Future implementation
        throw new Error('WalletConnect not implemented yet')
      case 'coinbase':
        // Future implementation  
        throw new Error('Coinbase Wallet not implemented yet')
      default:
        throw new Error(`Unsupported wallet type: ${type}`)
    }
  }

  static getAvailableWallets(): WalletType[] {
    const available: WalletType[] = []
    
    // Check MetaMask
    if (typeof window !== 'undefined' && (window as any).ethereum?.isMetaMask) {
      available.push('metamask')
    }

    // Future: Check other wallets
    
    return available
  }

  static getDefaultWallet(): WalletType {
    const available = this.getAvailableWallets()
    return available.length > 0 ? available[0] : 'metamask'
  }
}
