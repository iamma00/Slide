"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Bell,
  Settings,
  User,
  CreditCard,
  LogOut,
  HelpCircle,
  Moon,
  Sun,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface DashboardHeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

export default function DashboardHeader({
  title = "Dashboard",
  onMenuClick,
}: DashboardHeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Title */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold md:text-xl">{title}</h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search automations, conversations..."
              className="pl-9 w-full"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-96 overflow-y-auto">
                <div className="p-2 space-y-2">
                  <div className="p-3 rounded-lg hover:bg-accent cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-600 mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">New DM Conversion</p>
                        <p className="text-xs text-muted-foreground">
                          @user_123 converted through automation
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          2 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-accent cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-600 mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Automation Triggered
                        </p>
                        <p className="text-xs text-muted-foreground">
                          5 new comments automated
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          15 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-accent cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-600 mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Milestone Reached</p>
                        <p className="text-xs text-muted-foreground">
                          1,000 automations this month!
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          1 hour ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator />
              <div className="p-2">
                <Link href="/dashboard/notifications">
                  <Button
                    variant="ghost"
                    className="w-full justify-center text-sm"
                  >
                    View all notifications
                  </Button>
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Help */}
          <Link href="/dashboard/help">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </Link>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile" className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings" className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/billing" className="cursor-pointer">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
