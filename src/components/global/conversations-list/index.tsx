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
import { mockConversations } from "@/lib/mock-data";
import { MessageCircle } from "lucide-react";

export default function ConversationsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Recent Conversations
        </CardTitle>
        <CardDescription>Latest DM interactions from Instagram</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockConversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent cursor-pointer transition"
            >
              <div className="text-3xl">{conversation.avatar}</div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">
                    {conversation.username}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {conversation.timestamp}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {conversation.lastMessage}
                </p>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      conversation.status === "automated"
                        ? "default"
                        : conversation.status === "replied"
                        ? "secondary"
                        : "outline"
                    }
                    className="text-xs"
                  >
                    {conversation.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {conversation.messages} messages
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
