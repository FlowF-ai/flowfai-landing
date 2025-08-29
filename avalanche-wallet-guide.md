# Prompt Técnico: Funcionalidades MetaMask + Avalanche en React

## Objetivo Principal
Implementar funciones React para conectar MetaMask a la red Avalanche C-Chain y obtener balances de AVAX y tokens ERC-20.

## Funcionalidades Core Requeridas

### 1. Detección de MetaMask
```javascript
// Verificar si window.ethereum existe
const isMetaMaskInstalled = () => {
  return typeof window.ethereum !== 'undefined';
};
```

### 2. Conexión de Wallet
```javascript
// Solicitar conexión y obtener cuentas
const connectWallet = async () => {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts'
  });
  return accounts[0];
};
```

### 3. Configuración Red Avalanche
```javascript
const AVALANCHE_NETWORK = {
  chainId: '0xA86A', // 43114 en hexadecimal
  chainName: 'Avalanche Network',
  nativeCurrency: {
    name: 'AVAX',
    symbol: 'AVAX', 
    decimals: 18
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://snowtrace.io/']
};
```

### 4. Cambio/Adición de Red
```javascript
const switchToAvalanche = async () => {
  try {
    // Intentar cambiar red
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: AVALANCHE_NETWORK.chainId }]
    });
  } catch (switchError) {
    // Si red no existe (error 4902), agregarla
    if (switchError.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [AVALANCHE_NETWORK]
      });
    }
  }
};
```

### 5. Obtener Balance AVAX (Nativo)
```javascript
const getAVAXBalance = async (address) => {
  const balance = await window.ethereum.request({
    method: 'eth_getBalance',
    params: [address, 'latest']
  });
  
  // Convertir de wei a AVAX
  const avaxBalance = parseInt(balance, 16) / Math.pow(10, 18);
  return avaxBalance.toFixed(4);
};
```

### 6. Obtener Balance Token ERC-20
```javascript
const getTokenBalance = async (userAddress, tokenAddress, decimals) => {
  // Crear payload para método balanceOf(address)
  // Método balanceOf: 0x70a08231
  // + padding de 32 bytes con dirección
  const data = '0x70a08231000000000000000000000000' + userAddress.slice(2);
  
  const result = await window.ethereum.request({
    method: 'eth_call',
    params: [{
      to: tokenAddress,
      data: data
    }, 'latest']
  });
  
  if (result) {
    const tokenBalanceRaw = parseInt(result, 16);
    const tokenBalance = tokenBalanceRaw / Math.pow(10, decimals);
    return tokenBalance.toFixed(2);
  }
  return '0.00';
};
```

### 7. Configuración Token Ejemplo (USDC)
```javascript
const TOKEN_CONTRACT = {
  address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', // USDC en Avalanche
  symbol: 'USDC',
  decimals: 6
};
```

### 8. Event Listeners
```javascript
useEffect(() => {
  if (window.ethereum) {
    // Cambios de cuenta
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        // Desconectar
        handleDisconnect();
      } else {
        // Actualizar cuenta y balances
        setAccount(accounts[0]);
        updateBalances(accounts[0]);
      }
    });
    
    // Cambios de red
    window.ethereum.on('chainChanged', (chainId) => {
      // Recargar página o manejar cambio
      window.location.reload();
    });
  }
  
  // Cleanup
  return () => {
    if (window.ethereum) {
      window.ethereum.removeAllListeners('accountsChanged');
      window.ethereum.removeAllListeners('chainChanged');
    }
  };
}, []);
```

### 9. Estados React Necesarios
```javascript
const [account, setAccount] = useState('');           // Dirección wallet
const [avaxBalance, setAvaxBalance] = useState('');   // Balance AVAX
const [tokenBalance, setTokenBalance] = useState(''); // Balance token
const [isConnected, setIsConnected] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');
```

### 10. Flujo Completo de Conexión
```javascript
const handleConnect = async () => {
  setIsLoading(true);
  setError('');
  
  try {
    // 1. Verificar MetaMask
    if (!isMetaMaskInstalled()) {
      throw new Error('MetaMask no instalado');
    }
    
    // 2. Conectar wallet
    const account = await connectWallet();
    setAccount(account);
    
    // 3. Verificar/cambiar red
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (chainId !== AVALANCHE_NETWORK.chainId) {
      await switchToAvalanche();
    }
    
    // 4. Obtener balances
    const avax = await getAVAXBalance(account);
    const token = await getTokenBalance(account, TOKEN_CONTRACT.address, TOKEN_CONTRACT.decimals);
    
    setAvaxBalance(avax);
    setTokenBalance(token);
    setIsConnected(true);
    
  } catch (error) {
    setError(error.message);
  } finally {
    setIsLoading(false);
  }
};
```

## Detalles Técnicos Críticos

### Conversión de Balances
- **AVAX**: `parseInt(hexBalance, 16) / 10^18`
- **Tokens**: `parseInt(hexBalance, 16) / 10^decimals`

### Método balanceOf ERC-20
- Selector: `0x70a08231`
- Parámetro: dirección con padding a 32 bytes
- Formato: `0x70a08231000000000000000000000000` + dirección sin "0x"

### Chain ID Avalanche
- Decimal: `43114`
- Hexadecimal: `0xA86A`

### Manejo de Errores Comunes
- MetaMask no instalado
- Usuario rechaza conexión (error -32002)
- Red no encontrada (error 4902)
- Transacción rechazada
- RPC no responde

## Personalización para Otros Tokens

Para usar con token diferente, cambiar:
```javascript
const CUSTOM_TOKEN = {
  address: '0x...', // Dirección del contrato
  symbol: 'SYMBOL', // Símbolo del token
  decimals: 18      // Decimales del token
};
```

## Prompt Final para IA

"Implementa todas estas funcionalidades en un componente React funcional. Cada función debe manejar errores apropiadamente con try/catch. Usa los valores exactos proporcionados para Avalanche. Implementa el manejo de eventos para cambios de cuenta y red. Las funciones deben ser modulares y reutilizables. Incluye comentarios técnicos explicando cada paso del proceso de conexión y obtención de balances."