import React from "react";
import ContentPlanner from "@/components/global/content-planner";

export const dynamic = "force-dynamic";

export default function ContentPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Content Planner</h1>
        <p className="text-muted-foreground">
          Schedule and manage your Instagram content calendar
        </p>
      </div>

      <ContentPlanner />
    </div>
  );
}
