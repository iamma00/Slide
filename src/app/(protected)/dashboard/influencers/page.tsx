import React from "react";
import InfluencerOutreach from "@/components/global/influencer-outreach";

export const dynamic = "force-dynamic";

export default function InfluencersPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Influencer Outreach</h1>
        <p className="text-muted-foreground">
          Find and manage influencer partnerships at scale
        </p>
      </div>

      <InfluencerOutreach />
    </div>
  );
}
