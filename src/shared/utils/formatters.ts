export const formatAddress = (address: string, startChars: number = 6, endChars: number = 4): string => {
  if (!address || address.length < startChars + endChars) {
    return address
  }
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`
}

export const validateAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

export const normalizeAddress = (address: string): string => {
  return address.toLowerCase()
}

export const formatBalance = (balance: string, decimals: number = 4): string => {
  const num = parseFloat(balance)
  
  if (isNaN(num)) return '0'
  
  if (num < 0.0001 && num > 0) {
    return num.toExponential(2)
  }
  
  return num.toFixed(decimals)
}

export const formatBalanceWithSymbol = (balance: string, symbol: string, decimals: number = 4): string => {
  return `${formatBalance(balance, decimals)} ${symbol}`
}

export const getNetworkName = (chainId: string): string => {
  const networks: Record<string, string> = {
    '0x1': 'Ethereum Mainnet',
    '0xa86a': 'Avalanche',
    '0xa869': 'Avalanche Testnet',
    '0x38': 'BSC Mainnet',
    '0x89': 'Polygon Mainnet'
  }
  
  return networks[chainId] || `Unknown Network (${chainId})`
}

export const isValidChainId = (chainId: string): boolean => {
  return /^0x[a-fA-F0-9]+$/.test(chainId)
}

export const hexToDecimal = (hex: string): number => {
  return parseInt(hex, 16)
}

export const decimalToHex = (decimal: number): string => {
  return `0x${decimal.toString(16)}`
}
