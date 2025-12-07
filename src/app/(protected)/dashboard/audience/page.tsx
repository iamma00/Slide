import React from "react";
import AudienceInsights from "@/components/global/audience-insights";

export const dynamic = "force-dynamic";

export default function AudiencePage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Audience Insights</h1>
        <p className="text-muted-foreground">
          Deep dive into your Instagram audience analytics
        </p>
      </div>

      <AudienceInsights />
    </div>
  );
}
