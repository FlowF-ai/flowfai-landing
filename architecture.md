# FlowFAI Landing - Arquitectura del Proyecto

## 🎯 Visión General

Este proyecto implementa una **arquitectura limpia por features** sin el uso de barrel exports, con separación clara de responsabilidades y principios de diseño modular.

## 📁 Estructura del Proyecto

```
flowfai-landing/
├── 📁 app/                              # Capa de aplicación Next.js
│   ├── 🏗️ components/                  # Componentes de layout globales
│   │   ├── Header.tsx                  # Navegación principal + wallet
│   │   ├── Footer.tsx                  # Footer de la aplicación
│   │   └── ThemeProvider.tsx           # Configuración de temas
│   ├── 📄 page.tsx                     # Página principal
│   ├── 📄 layout.tsx                   # Layout raíz
│   └── 🎨 globals.css                  # Estilos globales + Tailwind
│
├── 📁 src/                              # Lógica de negocio
│   ├── 🚀 features/                    # Funcionalidades organizadas por dominio
│   │   ├── 💰 wallet/                  # Feature: Gestión de wallets
│   │   │   ├── components/
│   │   │   │   └── WalletConnect.tsx   # UI para conexión de wallet
│   │   │   ├── hooks/
│   │   │   │   └── useWalletConnection.ts # Lógica de estado del wallet
│   │   │   ├── services/
│   │   │   │   └── metamask.service.ts # Integración con MetaMask
│   │   │   └── types/
│   │   │       └── wallet.ts           # Tipos específicos de wallet
│   │   └── 🏠 landing/                 # Feature: Página de aterrizaje
│   │       └── components/
│   │           ├── Hero.tsx            # Sección hero principal
│   │           ├── Features.tsx        # Características del producto
│   │           ├── AvaxSection.tsx     # Información sobre AVAX
│   │           ├── Vision.tsx          # Visión de la empresa
│   │           ├── WhyFlowFai.tsx      # Propuesta de valor
│   │           ├── Roadmap.tsx         # Hoja de ruta
│   │           ├── CTA.tsx             # Call to action
│   │           └── Blockchain.tsx      # Información blockchain
│   │
│   ├── 🔧 shared/                      # Componentes y utilidades reutilizables
│   │   ├── components/
│   │   │   ├── ImageWithFallback.tsx   # Componente de imagen con fallback
│   │   │   ├── ModeToggle.tsx          # Toggle para cambio de tema
│   │   │   ├── Timeline.tsx            # Componente de línea de tiempo
│   │   │   └── Milestone.tsx           # Elementos de la timeline
│   │   ├── constants/
│   │   │   ├── app.ts                  # Constantes de navegación
│   │   │   └── blockchain.ts           # Configuración de redes blockchain
│   │   └── utils/
│   │       ├── formatters.ts           # Utilidades de formateo
│   │       └── validation.ts           # Funciones de validación
│   │
│   └── 📋 types/                       # Tipos TypeScript globales
│       └── common.ts                   # Interfaces y tipos comunes
│
├── 🎨 components/                       # Componentes UI de shadcn/ui
│   └── ui/
│       ├── button.tsx
│       ├── dropdown-menu.tsx
│       ├── navigation-menu.tsx
│       └── popover.tsx
│
├── 📚 lib/                             # Utilidades de Next.js y shadcn
│   └── utils.ts                        # Funciones utilitarias y configuración
│
└── 🌐 public/                          # Archivos estáticos
    ├── logo.webp
    ├── hero.webp
    ├── avax.webp
    └── ...                             # Otras imágenes y assets
```

## 🏗️ Principios Arquitectónicos

### 1. **Separación por Features**

- Cada funcionalidad principal está en su propio directorio bajo `src/features/`
- Los componentes, hooks, servicios y tipos relacionados están co-ubicados
- Facilita el mantenimiento y escalabilidad

### 2. **Sin Barrel Exports**

- No se utilizan archivos `index.ts` para re-exportar
- Las importaciones son directas desde el archivo específico
- Mejora la legibilidad y evita dependencias circulares

### 3. **Importaciones Absolutas**

- Uso de alias de TypeScript (`@/`) para importaciones limpias
- Configurado en `tsconfig.json` y reconocido por shadcn/ui

### 4. **Separación de Responsabilidades**

- **app/**: Solo layout y configuración de Next.js
- **src/features/**: Lógica de negocio específica por dominio
- **src/shared/**: Componentes y utilidades reutilizables
- **components/ui/**: Componentes de diseño de shadcn/ui

## 🔧 Tecnologías y Herramientas

### Frontend Framework

- **Next.js 15.5.2** con App Router
- **React 19** para componentes
- **TypeScript** para tipado estático

### Styling

- **Tailwind CSS** para estilos utilitarios
- **shadcn/ui** para componentes de UI consistentes
- **CSS Variables** para theming (dark/light mode)

### Blockchain Integration

- **Ethers.js** para interacciones con blockchain
- **MetaMask SDK** para conexión de wallets
- **Avalanche Network** como blockchain principal

### Development Tools

- **ESLint** para linting de código
- **Turbopack** para desarrollo rápido
- **TypeScript** para type checking

## 🎨 Sistema de Temas

El proyecto implementa un sistema de temas completo:

```css
/* Soporte para modo claro y oscuro */
.gradient-text {
  background-image: linear-gradient(45deg, #a9bcf5 44%, #89abe3 33%, ...);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 🔗 Integración de Wallet

### MetaMask Service

```typescript
// src/features/wallet/services/metamask.service.ts
export const connectWallet = async (): Promise<WalletConnectionResult>
export const getBalance = async (address: string): Promise<string>
export const switchNetwork = async (network: NetworkConfig): Promise<boolean>
```

### Hook de Conexión

```typescript
// src/features/wallet/hooks/useWalletConnection.ts
export function useWalletConnection() {
  // Estado reactivo del wallet
  // Métodos para conectar/desconectar
  // Manejo de errores y loading states
}
```

## 📱 Componentes Principales

### Landing Page Components

- **Hero**: Sección principal con call-to-action
- **Features**: Características del producto
- **AvaxSection**: Información específica de AVAX
- **Vision**: Visión y misión de FlowFAI
- **WhyFlowFai**: Propuesta de valor
- **Roadmap**: Timeline de desarrollo
- **CTA**: Call-to-action final

### Shared Components

- **ImageWithFallback**: Carga optimizada de imágenes
- **ModeToggle**: Cambio entre tema claro/oscuro
- **Timeline**: Componente reutilizable para roadmaps
- **WalletConnect**: Conexión y gestión de wallets

## 🚀 Comandos de Desarrollo

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📊 Configuración de Tailwind

```typescript
// tailwind.config.ts
content: [
  "app/**/*.{ts,tsx}",
  "components/**/*.{ts,tsx}",
  "src/**/*.{ts,tsx}", // ← Incluye src/ para detectar clases
];
```

## 🔄 Flujo de Datos

1. **Componentes de UI** → Consumen hooks y servicios
2. **Hooks** → Manejan estado y lógica de negocio
3. **Services** → Integran con APIs externas (MetaMask, blockchain)
4. **Types** → Definen contratos de datos
5. **Utils** → Proveen funciones puras de apoyo

## 📈 Beneficios de esta Arquitectura

✅ **Mantenibilidad**: Código organizado por features
✅ **Escalabilidad**: Fácil agregar nuevas funcionalidades
✅ **Reusabilidad**: Componentes shared reutilizables
✅ **Type Safety**: TypeScript en toda la aplicación
✅ **Performance**: Build optimizado con Next.js
✅ **DX**: Excelente experiencia de desarrollo

## 🎯 Patrones de Diseño Utilizados

- **Feature-Driven Architecture**: Organización por funcionalidades
- **Composition over Inheritance**: Componentes reutilizables
- **Separation of Concerns**: Cada módulo tiene una responsabilidad específica
- **Dependency Injection**: Servicios inyectados via hooks
- **Single Responsibility**: Cada archivo tiene un propósito claro

---

_Documentación actualizada: Agosto 2025_
