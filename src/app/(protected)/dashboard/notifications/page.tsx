import React from "react";
import NotificationCenter from "@/components/global/notification-center";

export const dynamic = "force-dynamic";

export default function NotificationsPage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <p className="text-muted-foreground">
          Stay updated with all your automation activities
        </p>
      </div>

      <NotificationCenter />
    </div>
  );
}
