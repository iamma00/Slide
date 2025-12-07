"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  CheckCircle,
  AlertCircle,
  Info,
  TrendingUp,
  MessageCircle,
  Users,
  Zap,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "New DM Conversion",
    message: "@user_123 converted through DM automation",
    time: "2 min ago",
    read: false,
    category: "conversion",
  },
  {
    id: 2,
    type: "info",
    title: "Automation Triggered",
    message: "Comment automation responded to 5 new comments",
    time: "15 min ago",
    read: false,
    category: "automation",
  },
  {
    id: 3,
    type: "success",
    title: "Milestone Reached",
    message: "You hit 1,000 automated responses this month!",
    time: "1 hour ago",
    read: false,
    category: "milestone",
  },
  {
    id: 4,
    type: "warning",
    title: "Rate Limit Warning",
    message: "Instagram API approaching rate limit (85% used)",
    time: "2 hours ago",
    read: true,
    category: "system",
  },
  {
    id: 5,
    type: "info",
    title: "New Follower Spike",
    message: "45 new followers from recent automation campaign",
    time: "3 hours ago",
    read: true,
    category: "growth",
  },
  {
    id: 6,
    type: "success",
    title: "Influencer Response",
    message: "@influencer_mike responded to your outreach",
    time: "5 hours ago",
    read: true,
    category: "outreach",
  },
  {
    id: 7,
    type: "info",
    title: "Weekly Report Ready",
    message: "Your weekly analytics report is now available",
    time: "1 day ago",
    read: true,
    category: "report",
  },
];

export default function NotificationCenter() {
  const [notificationList, setNotificationList] = useState(notifications);
  const unreadCount = notificationList.filter((n) => !n.read).length;

  const markAsRead = (id: number) => {
    setNotificationList((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotificationList((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-600" />;
      default:
        return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "conversion":
        return <TrendingUp className="h-4 w-4" />;
      case "automation":
        return <Zap className="h-4 w-4" />;
      case "growth":
        return <Users className="h-4 w-4" />;
      case "outreach":
        return <MessageCircle className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const unreadNotifications = notificationList.filter((n) => !n.read);
  const readNotifications = notificationList.filter((n) => n.read);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-600" />
              Notification Center
              {unreadCount > 0 && (
                <Badge className="bg-red-600">{unreadCount}</Badge>
              )}
            </CardTitle>
            <CardDescription>
              Stay updated with your automation activity
            </CardDescription>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              Mark All Read
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">
              All ({notificationList.length})
            </TabsTrigger>
            <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
            <TabsTrigger value="read">
              Read ({readNotifications.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3 mt-4">
            {notificationList.map((notif) => (
              <div
                key={notif.id}
                className={`p-4 rounded-lg border transition-colors ${
                  notif.read
                    ? "bg-secondary/30"
                    : "bg-blue-50/50 dark:bg-blue-950/20 border-blue-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  {getIcon(notif.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-sm">{notif.title}</h4>
                        {!notif.read && (
                          <div className="h-2 w-2 rounded-full bg-blue-600" />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {notif.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notif.message}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs capitalize gap-1"
                      >
                        {getCategoryIcon(notif.category)}
                        {notif.category}
                      </Badge>
                      {!notif.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs"
                          onClick={() => markAsRead(notif.id)}
                        >
                          Mark as read
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="unread" className="space-y-3 mt-4">
            {unreadNotifications.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-600" />
                <p>All caught up! No unread notifications.</p>
              </div>
            ) : (
              unreadNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className="p-4 rounded-lg border bg-blue-50/50 dark:bg-blue-950/20 border-blue-200"
                >
                  <div className="flex items-start gap-3">
                    {getIcon(notif.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm">
                            {notif.title}
                          </h4>
                          <div className="h-2 w-2 rounded-full bg-blue-600" />
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {notif.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {notif.message}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="text-xs capitalize gap-1"
                        >
                          {getCategoryIcon(notif.category)}
                          {notif.category}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs"
                          onClick={() => markAsRead(notif.id)}
                        >
                          Mark as read
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="read" className="space-y-3 mt-4">
            {readNotifications.map((notif) => (
              <div
                key={notif.id}
                className="p-4 rounded-lg border bg-secondary/30"
              >
                <div className="flex items-start gap-3">
                  {getIcon(notif.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-sm">{notif.title}</h4>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {notif.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notif.message}
                    </p>
                    <Badge
                      variant="outline"
                      className="text-xs capitalize gap-1"
                    >
                      {getCategoryIcon(notif.category)}
                      {notif.category}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
