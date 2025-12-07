"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockMetrics } from "@/lib/mock-data";
import { TrendingUp, MessageSquare, Bot, Target } from "lucide-react";

export default function MetricsDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total DMs Sent</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {mockMetrics.totalDMs.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-600">+12.5%</span> from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Comments Automated
          </CardTitle>
          <Bot className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {mockMetrics.totalComments.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-600">+18.2%</span> from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Automation Runs</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockMetrics.automationRuns}</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-600">+8.1%</span> from last week
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {mockMetrics.conversionRate}%
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-600">+2.3%</span> from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
