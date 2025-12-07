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
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle,
  RefreshCw,
} from "lucide-react";

const systemStatus = [
  {
    service: "Instagram API",
    status: "operational",
    uptime: "99.9%",
    responseTime: "45ms",
  },
  {
    service: "Webhook Server",
    status: "operational",
    uptime: "99.8%",
    responseTime: "23ms",
  },
  {
    service: "AI Processing",
    status: "operational",
    uptime: "99.7%",
    responseTime: "156ms",
  },
  {
    service: "Database",
    status: "operational",
    uptime: "100%",
    responseTime: "12ms",
  },
  {
    service: "Queue System",
    status: "degraded",
    uptime: "98.2%",
    responseTime: "189ms",
  },
];

const recentIncidents = [
  {
    title: "Instagram API Rate Limit",
    time: "2 hours ago",
    status: "resolved",
    impact: "low",
    description: "Temporary rate limiting from Instagram Graph API",
  },
  {
    title: "Delayed Message Processing",
    time: "1 day ago",
    status: "resolved",
    impact: "medium",
    description: "Queue backlog caused 5-minute delay in automation responses",
  },
];

const upcomingMaintenance = [
  {
    title: "Database Optimization",
    scheduled: "Dec 10, 2025 2:00 AM UTC",
    duration: "30 minutes",
    impact: "Low - Read-only mode",
  },
];

export default function SystemHealth() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "degraded":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "outage":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "default";
      case "degraded":
        return "secondary";
      case "outage":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                System Status
              </CardTitle>
              <CardDescription>All systems operational</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw className="h-3 w-3" />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {systemStatus.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg border"
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(service.status)}
                <div>
                  <div className="font-medium">{service.service}</div>
                  <div className="text-xs text-muted-foreground">
                    Uptime: {service.uptime} • Response: {service.responseTime}
                  </div>
                </div>
              </div>
              <Badge
                variant={getStatusColor(service.status)}
                className="capitalize"
              >
                {service.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {recentIncidents.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Incidents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentIncidents.map((incident, index) => (
              <div
                key={index}
                className="p-3 rounded-lg border bg-yellow-50/50 dark:bg-yellow-950/20"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{incident.title}</h4>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                    >
                      Resolved
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {incident.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {incident.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {upcomingMaintenance.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Scheduled Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingMaintenance.map((maintenance, index) => (
              <div
                key={index}
                className="p-3 rounded-lg border bg-blue-50/50 dark:bg-blue-950/20"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">{maintenance.title}</h4>
                  <Badge variant="outline">{maintenance.duration}</Badge>
                </div>
                <div className="text-sm space-y-1">
                  <div className="text-muted-foreground">
                    <strong>Scheduled:</strong> {maintenance.scheduled}
                  </div>
                  <div className="text-muted-foreground">
                    <strong>Impact:</strong> {maintenance.impact}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
