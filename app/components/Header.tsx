import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { WalletConnect } from "./WalletConnect";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { getImagePath } from "@/lib/utils";
import ImageWithFallback from "./ImageWithFallback";

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
                <Link href="#features" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Features
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#avax" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    AVAX
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#cta" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Get Started
                  </NavigationMenuLink>
                </Link>
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
