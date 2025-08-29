"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useWalletConnection } from "@/features/wallet/hooks/useWalletConnection";
import { cn } from "@/lib/utils";

interface WalletConnectProps {
  className?: string;
  showFullAddress?: boolean;
}

export function WalletConnect({
  className,
  showFullAddress = false,
}: WalletConnectProps) {
  const {
    isConnected,
    address,
    balance,
    isLoading,
    error,
    connect,
    disconnect,
    clearError,
  } = useWalletConnection();

  // Handle connect button click
  const handleConnect = async () => {
    if (error) clearError();
    await connect();
  };

  // Handle disconnect button click
  const handleDisconnect = () => {
    disconnect();
  };

  // Error handling UI
  if (error) {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <div className="text-sm text-destructive">{error}</div>
        <Button
          onClick={handleConnect}
          variant="outline"
          size="sm"
          className="text-xs"
        >
          Retry
        </Button>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <Button
        disabled
        variant="outline"
        className={cn(
          "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none",
          className
        )}
      >
        Connecting...
      </Button>
    );
  }

  // Connected state
  if (isConnected && address && balance) {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <div className="flex flex-col items-end text-sm">
          <span className="text-muted-foreground">
            {showFullAddress ? address.value : address.formatted}
          </span>
          <span className="font-semibold">
            {balance.formatted} {balance.symbol}
          </span>
        </div>
        <Button
          onClick={handleDisconnect}
          variant="outline"
          size="sm"
          className="text-xs"
        >
          Disconnect
        </Button>
      </div>
    );
  }

  // Disconnected state
  return (
    <Button
      onClick={handleConnect}
      disabled={isLoading}
      variant="outline"
      className={cn(
        "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:from-purple-600 hover:to-pink-600",
        className
      )}
    >
      Connect Wallet
    </Button>
  );
}

// Export as default for easier imports
export default WalletConnect;
