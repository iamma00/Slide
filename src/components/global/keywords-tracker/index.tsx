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
import { mockKeywords } from "@/lib/mock-data";
import { Hash, TrendingUp } from "lucide-react";

export default function KeywordsTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Hash className="h-5 w-5" />
          Keyword Triggers
        </CardTitle>
        <CardDescription>
          Most triggered keywords in automations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockKeywords.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="font-mono">
                  {item.keyword}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  {item.count} triggers
                </div>
              </div>
              <span className="text-xs text-muted-foreground">
                {item.lastTriggered}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
