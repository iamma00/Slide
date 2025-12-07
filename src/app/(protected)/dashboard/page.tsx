// scenario 1 -> repeated user
// redirect to respective dashboard
// redirect -> /dashboard/varunvarshney

// scenario 2 -> new user
// redirect -> sign in

import React from "react";
import MetricsDashboard from "@/components/global/metrics-dashboard";
import AutomationsList from "@/components/global/automations-list";
import ConversationsList from "@/components/global/conversations-list";
import KeywordsTracker from "@/components/global/keywords-tracker";
import WebhookMonitor from "@/components/global/webhook-monitor";
import SmartAIDemo from "@/components/global/smart-ai-demo";
import PricingShowcase from "@/components/global/pricing-showcase";

export const dynamic = "force-dynamic";

const Page = async () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Instagram Automation Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your Instagram DM & comment automations with AI
        </p>
      </div>

      {/* Metrics Overview */}
      <MetricsDashboard />

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        <ConversationsList />
        <KeywordsTracker />
      </div>

      {/* Automations Section */}
      <AutomationsList />

      {/* AI Demo Section */}
      <SmartAIDemo />

      {/* Webhook Monitor */}
      <WebhookMonitor />

      {/* Pricing Plans */}
      <PricingShowcase />
    </div>
  );
};

export default Page;
