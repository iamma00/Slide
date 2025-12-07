import React from "react";
import CompetitorAnalysis from "@/components/global/competitor-analysis";

export const dynamic = "force-dynamic";

export default function CompetitorsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Competitor Analysis</h1>
        <p className="text-muted-foreground">
          Track competitors and benchmark your performance
        </p>
      </div>

      <CompetitorAnalysis />
    </div>
  );
}
