import Link from "next/link";
import ModeToggle from "@/shared/components/ModeToggle";
import { WalletConnect } from "@/features/wallet/components/WalletConnect";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { getImagePath } from "@/lib/utils";
import ImageWithFallback from "@/shared/components/ImageWithFallback";

export default function Header() {
  return (
    <header className="py-6">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          <ImageWithFallback
            src={getImagePath("/logo.webp")}
            height={100}
            width={75}
            alt="Logo"
          ></ImageWithFallback>
        </Link>
        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#features">Features</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#avax">AVAX</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#cta">Get Started</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <WalletConnect />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
