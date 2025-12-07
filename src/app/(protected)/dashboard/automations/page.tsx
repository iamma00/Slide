import React from "react";
import AutomationBuilder from "@/components/global/automation-builder";
import AutomationsList from "@/components/global/automations-list";

export const dynamic = "force-dynamic";

export default function AutomationsPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Automations</h1>
        <p className="text-muted-foreground">
          Create and manage your Instagram automation workflows
        </p>
      </div>

      <AutomationBuilder />
      <AutomationsList />
    </div>
  );
}
