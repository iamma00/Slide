"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockWebhookLogs } from "@/lib/mock-data";
import { Webhook, CheckCircle2, Clock } from "lucide-react";

export default function WebhookMonitor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Webhook className="h-5 w-5" />
          Webhook Activity
        </CardTitle>
        <CardDescription>Real-time Meta webhook events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockWebhookLogs.map((log) => (
            <div key={log.id} className="rounded-lg border p-3 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {log.status === "success" ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Clock className="h-4 w-4 text-blue-600" />
                  )}
                  <Badge variant="outline" className="font-mono text-xs">
                    {log.event}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">
                  {log.timestamp}
                </span>
              </div>
              <div className="text-xs text-muted-foreground bg-muted rounded p-2 font-mono">
                {JSON.stringify(log.payload, null, 2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
