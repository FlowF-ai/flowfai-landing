"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Wallet, X } from 'lucide-react'

// Avalanche network configuration
const AVALANCHE_NETWORK = {
  chainId: '0xA86A', // 43114 in hexadecimal
  chainName: 'Avalanche Network',
  nativeCurrency: {
    name: 'AVAX',
    symbol: 'AVAX', 
    decimals: 18
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://snowtrace.io/']
}

// Extend Window interface for MetaMask
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
      on: (event: string, callback: (...args: unknown[]) => void) => void
      removeListener: (event: string, callback: (...args: unknown[]) => void) => void
      removeAllListeners: (event: string) => void
    }
  }
}

export default function MetaMaskConnect() {
  const [account, setAccount] = useState<string>('')
  const [avaxBalance, setAvaxBalance] = useState<string>('')
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  // Check if MetaMask is installed
  const isMetaMaskInstalled = (): boolean => {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'
  }

  // Connect to MetaMask wallet
  const connectWallet = async (): Promise<string> => {
    if (!window.ethereum) {
      throw new Error('MetaMask not installed')
    }
    
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    return (accounts as string[])[0]
  }

  // Switch to Avalanche network
  const switchToAvalanche = async (): Promise<void> => {
    if (!window.ethereum) return
    
    try {
      // Try to switch to Avalanche network
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: AVALANCHE_NETWORK.chainId }]
      })
    } catch (switchError: unknown) {
      // If network doesn't exist (error 4902), add it
      if (switchError && typeof switchError === 'object' && 'code' in switchError && (switchError as { code: number }).code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [AVALANCHE_NETWORK]
        })
      } else {
        throw switchError
      }
    }
  }

  // Get AVAX balance
  const getAVAXBalance = async (address: string): Promise<string> => {
    if (!window.ethereum) return '0.0000'
    
    const balance = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest']
    })
    
    // Convert from wei to AVAX
    const balanceStr = balance as string
    const avaxBalance = parseInt(balanceStr, 16) / Math.pow(10, 18)
    return avaxBalance.toFixed(4)
  }

  // Main connect handler
  const handleConnect = async (): Promise<void> => {
    setIsLoading(true)
    setError('')
    
    try {
      // 1. Check MetaMask installation
      if (!isMetaMaskInstalled()) {
        throw new Error('MetaMask is not installed. Please install MetaMask to continue.')
      }
      
      // 2. Connect wallet
      const account = await connectWallet()
      setAccount(account)
      
      // 3. Check/switch to Avalanche network
      const chainId = await window.ethereum.request({ method: 'eth_chainId' }) as string
      if (chainId !== AVALANCHE_NETWORK.chainId) {
        await switchToAvalanche()
      }
      
      // 4. Get AVAX balance
      const avax = await getAVAXBalance(account)
      setAvaxBalance(avax)
      setIsConnected(true)
      
    } catch (error: unknown) {
      console.error('Connection error:', error)
      const errorMessage = error && typeof error === 'object' && 'message' in error 
        ? (error as { message: string }).message 
        : 'Failed to connect to MetaMask'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  // Disconnect handler
  const handleDisconnect = (): void => {
    setAccount('')
    setAvaxBalance('')
    setIsConnected(false)
    setError('')
  }

  // Update balances
  const updateBalances = useCallback(async (account: string): Promise<void> => {
    try {
      const avax = await getAVAXBalance(account)
      setAvaxBalance(avax)
    } catch (error) {
      console.error('Failed to update balances:', error)
    }
  }, [])

  // Set up event listeners for account and network changes
  useEffect(() => {
    if (!window.ethereum) return

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        handleDisconnect()
      } else {
        setAccount(accounts[0])
        updateBalances(accounts[0])
      }
    }

    const handleChainChanged = () => {
      // Reload page on chain change for simplicity
      window.location.reload()
    }

    // Add event listeners
    window.ethereum.on('accountsChanged', handleAccountsChanged)
    window.ethereum.on('chainChanged', handleChainChanged)

    // Cleanup
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
        window.ethereum.removeListener('chainChanged', handleChainChanged)
      }
    }
  }, [updateBalances])

  // Check if already connected on component mount
  useEffect(() => {
    const checkConnection = async () => {
      if (!isMetaMaskInstalled()) return

      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' }) as string[]
        if (accounts.length > 0) {
          const account = accounts[0]
          setAccount(account)
          
          // Check if on Avalanche network
          const chainId = await window.ethereum.request({ method: 'eth_chainId' }) as string
          if (chainId === AVALANCHE_NETWORK.chainId) {
            const avax = await getAVAXBalance(account)
            setAvaxBalance(avax)
            setIsConnected(true)
          }
        }
      } catch (error) {
        console.error('Failed to check connection:', error)
      }
    }

    checkConnection()
  }, [])

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center">
        <Button 
          onClick={handleConnect}
          disabled={isLoading}
          variant="ghost"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          {isLoading ? (
            <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" />
          ) : (
            <Wallet className="mr-2 h-4 w-4" />
          )}
          {isLoading ? 'Connecting...' : 'Connect'}
        </Button>
        {error && (
          <p className="text-sm text-red-500 mt-2 max-w-xs text-center">
            {error}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="text-sm">
        <div className="gradient-text font-semibold">
          {avaxBalance} AVAX
        </div>
        <div className="text-xs opacity-60">
          {account.slice(0, 6)}...{account.slice(-4)}
        </div>
      </div>
      <Button
        onClick={handleDisconnect}
        variant="ghost"
        size="sm"
        className="text-red-500 hover:bg-red-500 hover:text-white"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}