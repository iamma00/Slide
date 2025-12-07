import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MessageCircle,
  Zap,
  BarChart3,
  Users,
  Hash,
  Calendar,
  Target,
  TrendingUp,
  Brain,
  Webhook,
  CheckCircle,
  Crown,
  ArrowRight,
} from "lucide-react";

export const dynamic = "force-dynamic";

const features = [
  {
    icon: MessageCircle,
    title: "Smart DM Automation",
    description:
      "Automatically respond to Instagram DMs with AI-powered personalized messages",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    features: [
      "Instant responses",
      "Keyword triggers",
      "Custom templates",
      "AI personalization",
    ],
  },
  {
    icon: Zap,
    title: "Comment Automation",
    description:
      "Engage with your audience by automating comment responses on posts",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    features: [
      "Auto-reply to comments",
      "Sentiment analysis",
      "Spam filtering",
      "Engagement boost",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Deep insights into engagement, conversions, and audience behavior",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    features: [
      "7-day trends",
      "Conversion tracking",
      "Response times",
      "ROI metrics",
    ],
  },
  {
    icon: Users,
    title: "Audience Insights",
    description:
      "Understand your audience with demographic and psychographic data",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    features: [
      "Segmentation",
      "Interest tracking",
      "Demographics",
      "Behavior patterns",
    ],
  },
  {
    icon: Hash,
    title: "Hashtag Research",
    description:
      "Discover trending hashtags and optimize your content strategy",
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    features: [
      "Trending tags",
      "Performance tracking",
      "Preset sets",
      "AI suggestions",
    ],
  },
  {
    icon: Calendar,
    title: "Content Planner",
    description:
      "Schedule posts, track performance, and plan your content calendar",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    features: [
      "Post scheduling",
      "Analytics",
      "Content ideas",
      "Publishing queue",
    ],
  },
  {
    icon: Target,
    title: "Competitor Analysis",
    description: "Monitor competitors and benchmark your performance",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    features: [
      "Competitor tracking",
      "Industry benchmarks",
      "Share of voice",
      "Growth metrics",
    ],
  },
  {
    icon: Crown,
    title: "Influencer Outreach",
    description: "Find and manage influencer partnerships at scale",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    features: [
      "Influencer database",
      "Campaign tracking",
      "ROI analysis",
      "Automated outreach",
    ],
  },
  {
    icon: Brain,
    title: "AI Response Engine",
    description: "GPT-4 powered responses that sound natural and convert leads",
    color: "text-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
    features: [
      "Multiple AI models",
      "Context awareness",
      "Tone matching",
      "Learning system",
    ],
  },
  {
    icon: Webhook,
    title: "Real-time Webhooks",
    description:
      "Instant notifications for Instagram events and automation triggers",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    features: [
      "Event logging",
      "Payload inspection",
      "Error handling",
      "Debug mode",
    ],
  },
  {
    icon: CheckCircle,
    title: "System Health",
    description: "Monitor uptime, performance, and system status in real-time",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    features: [
      "99.9% uptime",
      "Performance metrics",
      "Incident tracking",
      "Maintenance alerts",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    description: "Comprehensive toolkit to accelerate your Instagram growth",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    features: [
      "Follow tracking",
      "Engagement rate",
      "Viral coefficient",
      "Growth velocity",
    ],
  },
];

const integrations = [
  { name: "Instagram Graph API", status: "Live" },
  { name: "OpenAI GPT-4", status: "Live" },
  { name: "Google Gemini", status: "Live" },
  { name: "Stripe Payments", status: "Live" },
  { name: "PostgreSQL", status: "Live" },
  { name: "Redis Cache", status: "Coming Soon" },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge className="mb-2">Feature Showcase</Badge>
          <h1 className="text-5xl font-bold tracking-tight">
            Everything You Need to Dominate Instagram
          </h1>
          <p className="text-xl text-muted-foreground">
            Powerful automation, AI-driven insights, and growth tools all in one
            platform
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                View Live Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/setup">
              <Button size="lg" variant="outline">
                Setup Guide
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-3`}
                  >
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integrations Section */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Powerful Integrations</h2>
            <p className="text-muted-foreground">
              Built on top of industry-leading APIs and services
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="font-semibold text-sm mb-2">
                    {integration.name}
                  </p>
                  <Badge
                    variant={
                      integration.status === "Live" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {integration.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-muted-foreground">Features</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-purple-600">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-green-600">2.3s</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-muted-foreground">Automation</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 opacity-90">
            Experience the power of AI-driven Instagram automation today
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="gap-2">
                Explore Dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/setup">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                View Setup Guide
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
