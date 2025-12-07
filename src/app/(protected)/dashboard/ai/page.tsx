import React from "react";
import SmartAIDemo from "@/components/global/smart-ai-demo";

export const dynamic = "force-dynamic";

export default function AIPage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">AI Responses</h1>
        <p className="text-muted-foreground">
          Smart AI-powered conversation automation
        </p>
      </div>

      <SmartAIDemo />
    </div>
  );
}
