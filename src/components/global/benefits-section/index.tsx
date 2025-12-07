"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Zap,
  Brain,
  TrendingUp,
  Clock,
  Lock,
  Globe,
  HeartHandshake,
} from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Intelligence",
      description:
        "Advanced natural language processing understands context and sentiment for human-like responses.",
      color:
        "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save 10+ Hours Weekly",
      description:
        "Automate repetitive engagement tasks and focus on creating amazing content for your audience.",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Boost Engagement by 300%",
      description:
        "Never miss an interaction. Respond instantly to every comment and DM, even while you sleep.",
      color:
        "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Instagram Compliant",
      description:
        "Built on official Meta APIs. Your account security is our top priority with full compliance.",
      color:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-Time Automation",
      description:
        "Instant webhook-based responses ensure your audience never waits for engagement.",
      color:
        "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Enterprise Security",
      description:
        "Bank-level encryption, SOC 2 compliance, and secure data handling you can trust.",
      color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Language Support",
      description:
        "Engage audiences worldwide with AI that understands 50+ languages naturally.",
      color:
        "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Build Authentic Relationships",
      description:
        "Turn followers into loyal customers with personalized, meaningful interactions at scale.",
      color: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-2">
            Why Choose Slide
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything You Need to Succeed
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Powerful features designed to help you grow, engage, and convert
            your Instagram audience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div
                  className={`h-12 w-12 rounded-lg ${benefit.color} flex items-center justify-center mb-3`}
                >
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
