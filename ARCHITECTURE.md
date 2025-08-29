# FlowFAI Architecture Documentation

## Overview

This project follows **Clean Architecture** and **Screaming Architecture** principles, organizing code by domain features rather than technical layers. The architecture emphasizes separation of concerns, testability, and maintainability.

## Architecture Principles

### 1. Screaming Architecture

- The project structure "screams" about what the application does (FlowFAI - blockchain/DeFi platform)
- Domain features are organized by business capabilities, not technical concerns
- Framework-agnostic core business logic

### 2. Clean Architecture Layers

```
src/
├── features/           # Domain features (screams "what we do")
│   ├── wallet/         # Wallet connection & management
│   └── landing/        # Landing page content
├── shared/             # Shared resources
│   ├── components/     # Reusable UI components
│   ├── constants/      # Application constants
│   ├── utils/          # Pure utility functions
│   └── ui/             # Design system components
├── types/              # TypeScript interfaces
├── services/           # External service adapters
├── context/            # React context providers
└── hooks/              # Shared custom hooks
```

### 3. Separation of Concerns

#### Domain Layer (Core Business Logic)

- **Location**: `src/features/*/`
- **Purpose**: Contains the core business rules and entities
- **Dependencies**: None (pure domain logic)

#### Application Layer (Use Cases)

- **Location**: `src/features/*/hooks/`, `src/features/*/services/`
- **Purpose**: Orchestrates domain entities and external services
- **Dependencies**: Domain layer only

#### Infrastructure Layer (External Concerns)

- **Location**: `src/features/*/services/`
- **Purpose**: Implements interfaces for external services (blockchain, APIs)
- **Dependencies**: Application and Domain layers

#### Presentation Layer (UI)

- **Location**: `src/features/*/components/`, `src/shared/ui/`
- **Purpose**: React components with minimal business logic
- **Dependencies**: Application layer through hooks

## Feature Structure Example: Wallet

```
src/features/wallet/
├── components/         # UI components
│   └── WalletConnect.tsx
├── hooks/             # Custom hooks (application logic)
│   └── useWalletConnection.ts
├── services/          # External service implementations
│   ├── metamask.service.ts
│   └── wallet-factory.service.ts
└── index.ts           # Feature exports
```

## Design Patterns Used

### 1. Service Layer Pattern

- Services encapsulate external interactions (blockchain, APIs)
- Interfaces define contracts, implementations provide specific behavior
- Example: `MetaMaskWalletService` implements `WalletService`

### 2. Factory Pattern

- `WalletServiceFactory` creates appropriate wallet service instances
- Supports multiple wallet types (MetaMask, WalletConnect, etc.)
- Easily extensible for new wallet integrations

### 3. Hook Pattern (React)

- Custom hooks encapsulate stateful logic and side effects
- Reusable across components
- Example: `useWalletConnection` manages all wallet state

### 4. Repository Pattern (Future)

- For data persistence and caching
- Abstract data access behind interfaces

## Type Safety

### Centralized Types

- All interfaces defined in `src/types/`
- Domain entities are strongly typed
- External service contracts defined through interfaces

### Type Examples

```typescript
// Domain Entity
interface WalletState {
  isConnected: boolean;
  address: WalletAddress | null;
  balance: WalletBalance | null;
  isLoading: boolean;
  error: string | null;
}

// Service Contract
interface WalletService {
  connect(): Promise<WalletConnectionResult>;
  getBalance(address: string): Promise<string>;
  disconnect(): void;
}
```

## Testing Strategy

### Unit Tests

- Pure functions in utilities
- Domain logic in services
- Custom hooks with React Testing Library

### Integration Tests

- Component interactions
- Service integrations
- End-to-end wallet flows

### Testable Architecture

- Services are easily mockable
- Hooks can be tested in isolation
- Components have minimal logic to test

## Benefits of This Architecture

### 1. Maintainability

- Clear separation of concerns
- Each module has a single responsibility
- Easy to locate and modify specific functionality

### 2. Testability

- Pure functions are easy to test
- Services can be mocked for component testing
- Business logic is isolated from UI

### 3. Scalability

- New features follow the same pattern
- Shared utilities prevent code duplication
- Modular structure supports team development

### 4. Framework Independence

- Core business logic doesn't depend on React/Next.js
- Easy to migrate to different frameworks
- Services can be reused in different contexts

## Development Guidelines

### Adding New Features

1. Create feature directory in `src/features/`
2. Define types in `src/types/`
3. Implement services for external interactions
4. Create custom hooks for state management
5. Build components using hooks
6. Export everything through feature index

### File Naming Conventions

- Components: PascalCase (`WalletConnect.tsx`)
- Hooks: camelCase with 'use' prefix (`useWalletConnection.ts`)
- Services: camelCase with '.service' suffix (`metamask.service.ts`)
- Types: camelCase (`wallet.ts`)
- Constants: UPPER_SNAKE_CASE (`AVALANCHE_MAINNET`)

### Import/Export Strategy

- Use barrel exports (`index.ts`) for clean imports
- Prefer named exports over default exports
- Keep import paths short using TypeScript path mapping

## Future Enhancements

### 1. State Management

- Consider Redux Toolkit for complex global state
- Implement React Query for server state management

### 2. Error Handling

- Global error boundary
- Structured error logging
- User-friendly error messages

### 3. Performance

- Component lazy loading
- Memoization strategies
- Bundle optimization

### 4. Additional Features

- More wallet integrations (WalletConnect, Coinbase)
- Transaction management
- Multi-chain support
- User preferences/settings

This architecture provides a solid foundation for building a scalable, maintainable DeFi application while following industry best practices.
