'use client'

import { useState, useEffect, useCallback } from 'react'
import * as metamaskService from '../services/metamask.service'
import { formatAddress, formatBalance } from '@/shared/utils/formatters'
import { extractErrorMessage } from '@/shared/utils/validation'
import type { WalletState, WalletAddress, WalletBalance } from '@/types/wallet'
import { AVALANCHE_MAINNET, WALLET_ERRORS } from '@/shared/constants/blockchain'

export function useWalletConnection() {
  const [state, setState] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
    isLoading: false,
    error: null
  })

  const createWalletAddress = useCallback((address: string): WalletAddress => ({
    value: address,
    formatted: formatAddress(address)
  }), [])

  const createWalletBalance = useCallback((balance: string): WalletBalance => ({
    raw: balance,
    formatted: formatBalance(balance),
    symbol: 'AVAX'
  }), [])

  const fetchBalance = useCallback(async (address: string): Promise<string> => {
    return await metamaskService.getBalance(address)
  }, [])

  const connect = useCallback(async (): Promise<void> => {
    if (!metamaskService.isMetaMaskInstalled()) {
      setState(prev => ({ 
        ...prev, 
        error: WALLET_ERRORS.NOT_INSTALLED 
      }))
      window.open('https://metamask.io/', '_blank')
      return
    }

    setState(prev => ({ 
      ...prev, 
      isLoading: true, 
      error: null 
    }))

    try {
      const result = await metamaskService.connectWallet()
      
      if (!result.success || !result.address) {
        throw new Error(result.error || WALLET_ERRORS.CONNECTION_FAILED)
      }

      const networkSwitched = await metamaskService.switchNetwork(AVALANCHE_MAINNET)
      if (!networkSwitched) {
        console.warn('Failed to switch to Avalanche network')
      }

      const balance = await fetchBalance(result.address)

      setState({
        isConnected: true,
        address: createWalletAddress(result.address),
        balance: createWalletBalance(balance),
        isLoading: false,
        error: null
      })

    } catch (error) {
      const errorMessage = extractErrorMessage(error)
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }))
    }
  }, [fetchBalance, createWalletAddress, createWalletBalance])

  const disconnect = useCallback((): void => {
    setState({
      isConnected: false,
      address: null,
      balance: null,
      isLoading: false,
      error: null
    })
  }, [])

  const refreshBalance = useCallback(async (): Promise<void> => {
    if (!state.address) return

    try {
      const balance = await fetchBalance(state.address.value)
      setState(prev => ({
        ...prev,
        balance: createWalletBalance(balance),
        error: null
      }))
    } catch (error) {
      console.error('Failed to refresh balance:', error)
      setState(prev => ({
        ...prev,
        error: 'Failed to refresh balance'
      }))
    }
  }, [state.address, fetchBalance, createWalletBalance])

  const clearError = useCallback((): void => {
    setState(prev => ({ ...prev, error: null }))
  }, [])

  useEffect(() => {
    const checkExistingConnection = async () => {
      try {
        const provider = (window as unknown as { ethereum?: { request: (args: { method: string }) => Promise<string[]> } }).ethereum
        if (!provider) return

        const accounts = await provider.request({ method: 'eth_accounts' })
        
        if (accounts && accounts.length > 0) {
          const address = accounts[0]
          const balance = await fetchBalance(address)
          
          setState({
            isConnected: true,
            address: createWalletAddress(address),
            balance: createWalletBalance(balance),
            isLoading: false,
            error: null
          })
        }
      } catch {
        // Silent error handling for initial connection check
      }
    }

    checkExistingConnection()
  }, [fetchBalance, createWalletAddress, createWalletBalance])

  useEffect(() => {
    const handleAccountsChanged = async (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect()
      } else {
        const address = accounts[0]
        try {
          const balance = await fetchBalance(address)
          setState(prev => ({
            ...prev,
            address: createWalletAddress(address),
            balance: createWalletBalance(balance),
            error: null
          }))
        } catch {
          setState(prev => ({
            ...prev,
            error: 'Failed to update account information'
          }))
        }
      }
    }

    const handleChainChanged = () => {
      window.location.reload()
    }

    metamaskService.onAccountsChanged(handleAccountsChanged)
    metamaskService.onChainChanged(handleChainChanged)

    return () => {
      metamaskService.removeListener('accountsChanged', handleAccountsChanged)
      metamaskService.removeListener('chainChanged', handleChainChanged)
    }
  }, [disconnect, fetchBalance, createWalletAddress, createWalletBalance])

  return {
    ...state,
    connect,
    disconnect,
    refreshBalance,
    clearError,
    isMetaMaskInstalled: metamaskService.isMetaMaskInstalled()
  }
}
