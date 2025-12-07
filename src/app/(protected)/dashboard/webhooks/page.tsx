import React from "react";
import WebhookMonitor from "@/components/global/webhook-monitor";
import SystemHealth from "@/components/global/system-health";

export const dynamic = "force-dynamic";

export default function WebhooksPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Webhooks</h1>
        <p className="text-muted-foreground">
          Monitor Instagram webhook events and system health
        </p>
      </div>

      <SystemHealth />
      <WebhookMonitor />
    </div>
  );
}
