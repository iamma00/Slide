import React from "react";
import ConversationsList from "@/components/global/conversations-list";

export const dynamic = "force-dynamic";

export default function ConversationsPage() {
  return (
    <div className="container mx-auto p-6 max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Conversations</h1>
        <p className="text-muted-foreground">
          Manage all your Instagram DM conversations
        </p>
      </div>

      <ConversationsList />
    </div>
  );
}
