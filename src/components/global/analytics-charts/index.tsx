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
import {
  TrendingUp,
  TrendingDown,
  MessageCircle,
  Users,
  Heart,
  Share2,
} from "lucide-react";

const engagementData = [
  { day: "Mon", comments: 45, dms: 23, likes: 234, shares: 12 },
  { day: "Tue", comments: 52, dms: 31, likes: 289, shares: 18 },
  { day: "Wed", comments: 38, dms: 19, likes: 201, shares: 9 },
  { day: "Thu", comments: 67, dms: 42, likes: 356, shares: 24 },
  { day: "Fri", comments: 71, dms: 48, likes: 398, shares: 31 },
  { day: "Sat", comments: 89, dms: 61, likes: 467, shares: 38 },
  { day: "Sun", comments: 94, dms: 58, likes: 512, shares: 42 },
];

const conversionData = [
  { source: "Comment Automation", leads: 127, conversions: 23, rate: 18.1 },
  { source: "DM Outreach", leads: 89, conversions: 31, rate: 34.8 },
  { source: "Story Replies", leads: 64, conversions: 12, rate: 18.7 },
  { source: "New Followers", leads: 156, conversions: 19, rate: 12.2 },
];

export default function AnalyticsCharts() {
  const maxValue = Math.max(
    ...engagementData.map((d) =>
      Math.max(d.comments, d.dms, d.likes / 5, d.shares)
    )
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>7-Day Engagement Trends</CardTitle>
          <CardDescription>
            Instagram activity across your automated responses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Bar Chart */}
            <div className="flex items-end justify-between gap-2 h-48">
              {engagementData.map((data, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div className="w-full flex flex-col gap-1">
                    <div
                      className="w-full bg-blue-500 rounded-t"
                      style={{
                        height: `${(data.comments / maxValue) * 100}%`,
                        minHeight: "4px",
                      }}
                      title={`Comments: ${data.comments}`}
                    />
                    <div
                      className="w-full bg-purple-500"
                      style={{
                        height: `${(data.dms / maxValue) * 100}%`,
                        minHeight: "4px",
                      }}
                      title={`DMs: ${data.dms}`}
                    />
                    <div
                      className="w-full bg-pink-500"
                      style={{
                        height: `${(data.likes / 5 / maxValue) * 100}%`,
                        minHeight: "4px",
                      }}
                      title={`Likes: ${data.likes}`}
                    />
                    <div
                      className="w-full bg-green-500"
                      style={{
                        height: `${(data.shares / maxValue) * 100}%`,
                        minHeight: "4px",
                      }}
                      title={`Shares: ${data.shares}`}
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {data.day}
                  </span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 justify-center pt-4 border-t">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-xs">Comments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-purple-500" />
                <span className="text-xs">DMs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-pink-500" />
                <span className="text-xs">Likes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-xs">Shares</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conversion Funnel</CardTitle>
          <CardDescription>
            Lead generation and conversion rates by automation type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversionData.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{data.source}</span>
                    <Badge
                      variant={data.rate > 20 ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {data.rate}% conversion
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {data.conversions}/{data.leads}
                  </span>
                </div>
                <div className="relative h-8 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-end px-3"
                    style={{
                      width: `${(data.conversions / data.leads) * 100}%`,
                    }}
                  >
                    {data.rate > 15 && (
                      <span className="text-xs font-semibold text-white">
                        {data.conversions}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-blue-600" />
              Avg Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3s</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingDown className="h-3 w-3 text-green-600" />
              <span className="text-green-600">-0.4s from last week</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-600" />
              Active Conversations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+12 today</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Heart className="h-4 w-4 text-pink-600" />
              Engagement Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7%</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+1.2% this week</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Share2 className="h-4 w-4 text-green-600" />
              Viral Coefficient
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.4x</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">Above industry avg</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
