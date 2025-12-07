import React from "react";
import AnalyticsCharts from "@/components/global/analytics-charts";
import AudienceInsights from "@/components/global/audience-insights";
import CompetitorAnalysis from "@/components/global/competitor-analysis";

export const dynamic = "force-dynamic";

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Deep insights into your Instagram performance and growth
        </p>
      </div>

      <AnalyticsCharts />
      <AudienceInsights />
      <CompetitorAnalysis />
    </div>
  );
}
