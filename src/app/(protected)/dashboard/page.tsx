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
import AutomationBuilder from "@/components/global/automation-builder";
import AnalyticsCharts from "@/components/global/analytics-charts";
import InfluencerOutreach from "@/components/global/influencer-outreach";
import ContentPlanner from "@/components/global/content-planner";
import CompetitorAnalysis from "@/components/global/competitor-analysis";
import HashtagResearch from "@/components/global/hashtag-research";
import SystemHealth from "@/components/global/system-health";
import AudienceInsights from "@/components/global/audience-insights";
import NotificationCenter from "@/components/global/notification-center";

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

      {/* Analytics Charts */}
      <AnalyticsCharts />

      {/* Audience Insights */}
      <AudienceInsights />

      {/* Notification Center */}
      <NotificationCenter />

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        <ConversationsList />
        <KeywordsTracker />
      </div>

      {/* Automation Builder */}
      <AutomationBuilder />

      {/* Automations Section */}
      <AutomationsList />

      {/* Content Planning */}
      <ContentPlanner />

      {/* Hashtag Research */}
      <HashtagResearch />

      {/* Influencer Outreach */}
      <InfluencerOutreach />

      {/* Competitor Analysis */}
      <CompetitorAnalysis />

      {/* AI Demo Section */}
      <SmartAIDemo />

      {/* System Health */}
      <SystemHealth />

      {/* Webhook Monitor */}
      <WebhookMonitor />

      {/* Pricing Plans */}
      <PricingShowcase />
    </div>
  );
};

export default Page;
