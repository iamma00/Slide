import React from "react";
import KeywordsTracker from "@/components/global/keywords-tracker";

export const dynamic = "force-dynamic";

export default function KeywordsPage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Keywords</h1>
        <p className="text-muted-foreground">
          Track and manage keyword triggers for automations
        </p>
      </div>

      <KeywordsTracker />
    </div>
  );
}
