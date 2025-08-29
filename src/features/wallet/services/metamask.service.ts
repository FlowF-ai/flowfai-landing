import { ethers } from 'ethers'
import { WalletConnectionResult, NetworkConfig } from '../types/wallet'
import { WALLET_ERRORS } from '@/shared/constants/blockchain'

interface EthereumProvider {
  isMetaMask?: boolean
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
  on?: (event: string, handler: (...args: unknown[]) => void) => void
  removeListener?: (event: string, handler: (...args: unknown[]) => void) => void
}

const getProvider = (): EthereumProvider | null => {
  if (typeof window === 'undefined') return null
  return (window as unknown as { ethereum?: EthereumProvider }).ethereum || null
}

export const isMetaMaskInstalled = (): boolean => {
  const provider = getProvider()
  return provider !== null && provider.isMetaMask === true
}

export const connectWallet = async (): Promise<WalletConnectionResult> => {
  const provider = getProvider()
  
  if (!isMetaMaskInstalled()) {
    return { 
      success: false, 
      error: WALLET_ERRORS.NOT_INSTALLED 
    }
  }

  try {
    const result = await provider!.request({
      method: 'eth_requestAccounts'
    })
    
    const accounts = result as string[]

    if (!accounts || accounts.length === 0) {
      return { 
        success: false, 
        error: WALLET_ERRORS.USER_REJECTED 
      }
    }

    return { 
      success: true, 
      address: accounts[0] 
    }

  } catch (err: unknown) {
    const error = err as { code?: number; message?: string }
    if (error.code === 4001) {
      return { 
        success: false, 
        error: WALLET_ERRORS.USER_REJECTED 
      }
    }
    
    return { 
      success: false, 
      error: error.message || WALLET_ERRORS.CONNECTION_FAILED 
    }
  }
}

export const getBalance = async (address: string): Promise<string> => {
  const provider = getProvider()
  
  if (!provider) {
    throw new Error('Provider not available')
  }

  try {
    const ethersProvider = new ethers.BrowserProvider(provider as never)
    const balance = await ethersProvider.getBalance(address)
    return ethers.formatEther(balance)
  } catch {
    throw new Error(WALLET_ERRORS.BALANCE_FETCH_FAILED)
  }
}

export const switchNetwork = async (network: NetworkConfig): Promise<boolean> => {
  const provider = getProvider()
  if (!provider) return false

  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: network.chainId }]
    })
    return true
  } catch (err: unknown) {
    const error = err as { code?: number }
    if (error.code === 4902) {
      return await addNetwork(network)
    }
    return false
  }
}

export const addNetwork = async (network: NetworkConfig): Promise<boolean> => {
  const provider = getProvider()
  if (!provider) return false

  try {
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [network]
    })
    return true
  } catch {
    return false
  }
}

export const onAccountsChanged = (handler: (accounts: string[]) => void): void => {
  const provider = getProvider()
  if (provider?.on) {
    provider.on('accountsChanged', handler)
  }
}

export const onChainChanged = (handler: (chainId: string) => void): void => {
  const provider = getProvider()
  if (provider?.on) {
    provider.on('chainChanged', handler)
  }
}

export const removeListener = (event: string, handler: (...args: unknown[]) => void): void => {
  const provider = getProvider()
  if (provider?.removeListener) {
    provider.removeListener(event, handler)
  }
}
