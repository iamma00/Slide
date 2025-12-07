"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";

export default function MetaSetupGuide() {
  const steps = [
    {
      title: "1. Create a Meta App",
      status: "completed",
      description: "Go to Meta for Developers and create a new app",
      link: "https://developers.facebook.com/apps",
      details: [
        'Select "Business" app type',
        "Fill in your app name and contact email",
        'Click "Create App"',
      ],
    },
    {
      title: "2. Add Instagram Basic Display",
      status: "completed",
      description: "Add the Instagram product to your app",
      details: [
        'Go to "Add Products" in your app dashboard',
        'Find "Instagram Basic Display" and click "Set Up"',
        "Configure OAuth redirect URLs",
      ],
    },
    {
      title: "3. Configure Webhooks",
      status: "in-progress",
      description: "Set up webhook endpoints for real-time updates",
      link: "https://developers.facebook.com/docs/graph-api/webhooks",
      details: [
        "Add webhook URL: https://your-domain.vercel.app/api/webhook/instagram",
        "Select subscription fields: messages, comments, mentions",
        "Verify webhook endpoint with challenge token",
      ],
    },
    {
      title: "4. Get App Credentials",
      status: "pending",
      description: "Copy your App ID and App Secret",
      details: [
        "Go to Settings > Basic in your app dashboard",
        "Copy App ID to INSTAGRAM_CLIENT_ID env variable",
        "Copy App Secret to INSTAGRAM_CLIENT_SECRET env variable",
        "Add OAuth redirect URI to your app settings",
      ],
    },
    {
      title: "5. Test Integration",
      status: "pending",
      description: "Verify OAuth flow and webhook delivery",
      details: [
        "Connect your Instagram account",
        "Send a test DM to verify webhook delivery",
        "Check automation triggers in dashboard",
      ],
    },
  ];

  const statusIcon = (status: string) => {
    if (status === "completed")
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    if (status === "in-progress")
      return <AlertCircle className="h-5 w-5 text-blue-600" />;
    return <div className="h-5 w-5 rounded-full border-2 border-gray-300" />;
  };

  const statusVariant = (
    status: string
  ): "default" | "secondary" | "outline" => {
    if (status === "completed") return "default";
    if (status === "in-progress") return "secondary";
    return "outline";
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Meta App Setup Guide</h1>
          <p className="text-muted-foreground mt-2">
            Follow these steps to connect your Instagram account and enable
            automation
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {statusIcon(step.status)}
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={statusVariant(step.status)}>
                    {step.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ml-8">
                  {step.details.map((detail, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                {step.link && (
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline mt-3 ml-8"
                  >
                    Open in Meta Developers
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg">
              Environment Variables Required
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 font-mono text-sm">
              <div className="bg-white dark:bg-gray-900 rounded p-2">
                INSTAGRAM_CLIENT_ID=your_app_id_here
              </div>
              <div className="bg-white dark:bg-gray-900 rounded p-2">
                INSTAGRAM_CLIENT_SECRET=your_app_secret_here
              </div>
              <div className="bg-white dark:bg-gray-900 rounded p-2">
                INSTAGRAM_BASE_URL=https://graph.instagram.com
              </div>
              <div className="bg-white dark:bg-gray-900 rounded p-2">
                INSTAGRAM_TOKEN_URL=https://api.instagram.com/oauth/access_token
              </div>
              <div className="bg-white dark:bg-gray-900 rounded p-2">
                NEXT_PUBLIC_HOST_URL=https://your-domain.vercel.app
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
