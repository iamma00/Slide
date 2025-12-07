"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockAIResponses } from "@/lib/mock-data";
import { Brain, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SmartAIDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-600" />
          Smart AI Responses
        </CardTitle>
        <CardDescription>
          AI-powered contextual conversation examples
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAIResponses.map((response, index) => (
            <div key={index} className="space-y-3 rounded-lg border p-4">
              <div className="flex items-start gap-2">
                <MessageSquare className="h-4 w-4 mt-1 text-blue-600" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-600">User</p>
                  <p className="text-sm">{response.userMessage}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Brain className="h-4 w-4 mt-1 text-purple-600" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-semibold text-purple-600">
                      AI Response
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {(response.confidence * 100).toFixed(0)}% confidence
                    </Badge>
                  </div>
                  <p className="text-sm bg-purple-50 dark:bg-purple-950/20 rounded p-2">
                    {response.aiResponse}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
