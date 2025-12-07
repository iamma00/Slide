"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  Home,
  MessageCircle,
  Zap,
  BarChart3,
  Users,
  Hash,
  Calendar,
  Target,
  Crown,
  Brain,
  Webhook,
  Settings,
  CreditCard,
  Bell,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Search,
  Plus,
  User,
  Shield,
  Palette,
  Database,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: Home, badge: null },
      {
        name: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
        badge: null,
      },
      {
        name: "Notifications",
        href: "/dashboard/notifications",
        icon: Bell,
        badge: 3,
      },
    ],
  },
  {
    title: "Automation",
    items: [
      {
        name: "Automations",
        href: "/dashboard/automations",
        icon: Zap,
        badge: "4 active",
      },
      {
        name: "Conversations",
        href: "/dashboard/conversations",
        icon: MessageCircle,
        badge: 12,
      },
      {
        name: "Keywords",
        href: "/dashboard/keywords",
        icon: Search,
        badge: null,
      },
      {
        name: "AI Responses",
        href: "/dashboard/ai",
        icon: Brain,
        badge: "New",
      },
    ],
  },
  {
    title: "Growth Tools",
    items: [
      {
        name: "Content Planner",
        href: "/dashboard/content",
        icon: Calendar,
        badge: null,
      },
      {
        name: "Hashtag Research",
        href: "/dashboard/hashtags",
        icon: Hash,
        badge: null,
      },
      {
        name: "Influencers",
        href: "/dashboard/influencers",
        icon: Crown,
        badge: null,
      },
      {
        name: "Competitors",
        href: "/dashboard/competitors",
        icon: Target,
        badge: null,
      },
      {
        name: "Audience",
        href: "/dashboard/audience",
        icon: Users,
        badge: null,
      },
    ],
  },
  {
    title: "System",
    items: [
      {
        name: "Webhooks",
        href: "/dashboard/webhooks",
        icon: Webhook,
        badge: null,
      },
      {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
        badge: null,
      },
      {
        name: "Billing",
        href: "/dashboard/billing",
        icon: CreditCard,
        badge: null,
      },
      {
        name: "Help Center",
        href: "/dashboard/help",
        icon: HelpCircle,
        badge: null,
      },
    ],
  },
];

interface ModernSidebarProps {
  className?: string;
}

export default function ModernSidebar({ className }: ModernSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "relative flex flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!collapsed && (
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
              S
            </div>
            <span className="text-xl font-semibold">Slide</span>
          </Link>
        )}
        {collapsed && (
          <Link href="/dashboard" className="mx-auto">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
              S
            </div>
          </Link>
        )}
      </div>

      {/* Quick Actions */}
      {!collapsed && (
        <div className="p-4">
          <Button className="w-full gap-2">
            <Plus className="h-4 w-4" />
            New Automation
          </Button>
        </div>
      )}

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-6 py-4">
          {navigation.map((section) => (
            <div key={section.title}>
              {!collapsed && (
                <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-tight text-muted-foreground">
                  {section.title}
                </h3>
              )}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/");

                  return (
                    <Link key={item.href} href={item.href}>
                      <Button
                        variant={isActive ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start gap-2",
                          collapsed && "justify-center px-2",
                          isActive && "bg-secondary font-medium"
                        )}
                        title={collapsed ? item.name : undefined}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        {!collapsed && (
                          <>
                            <span className="flex-1 text-left">
                              {item.name}
                            </span>
                            {item.badge && (
                              <Badge
                                variant={
                                  typeof item.badge === "number"
                                    ? "default"
                                    : "secondary"
                                }
                                className="text-xs"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </>
                        )}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t p-4">
        {!collapsed && (
          <>
            <div className="mb-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-3 border">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-4 w-4 text-yellow-600" />
                <span className="text-xs font-semibold">Free Plan</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Upgrade to unlock AI features
              </p>
              <Button size="sm" className="w-full" variant="outline">
                Upgrade Now
              </Button>
            </div>
            <Separator className="mb-3" />
          </>
        )}

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn("w-full gap-2", collapsed && "justify-center px-2")}
            >
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              {!collapsed && <span className="flex-1 text-left">Account</span>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile" className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings" className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                Preferences
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
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Collapse Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-20 h-6 w-6 rounded-full border bg-background shadow-md hover:bg-secondary"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
