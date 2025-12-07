"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  MessageCircle,
  Zap,
  Target,
  BarChart,
} from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "50K+",
      label: "Active Users",
      color: "text-blue-600",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      value: "10M+",
      label: "Messages Automated",
      color: "text-green-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "300%",
      label: "Avg. Engagement Boost",
      color: "text-purple-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      value: "24/7",
      label: "Automation Uptime",
      color: "text-orange-600",
    },
    {
      icon: <Target className="h-8 w-8" />,
      value: "95%",
      label: "Response Accuracy",
      color: "text-pink-600",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      value: "5x",
      label: "ROI on Average",
      color: "text-indigo-600",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4">Trusted by thousands</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            The Numbers Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div
                  className={`inline-flex items-center justify-center mb-3 ${stat.color}`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
