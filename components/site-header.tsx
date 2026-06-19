"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Github } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">

        {/* LEFT: LOGO */}
        <Link href="/" className="font-bold text-lg">
          Abraham Memory
        </Link>

        {/* CENTER: NAV */}
        <NavigationMenu>
          <NavigationMenuList>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[200px]">
                  <NavigationMenuLink asChild>
                    <Link href="/features">Features</Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-3">

          {/* GITHUB ICON (FIXED) */}
          <Link
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Github className="w-5 h-5" />
            </Button>
          </Link>

          {/* THEME TOGGLE */}
          <ModeToggle />

        </div>
      </div>
    </header>
  )
}