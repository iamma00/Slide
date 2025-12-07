"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles, Zap, Crown } from "lucide-react";
import { useEffect, useState } from "react";
import { getPricingPlans } from "@/actions/pricing";
import Link from "next/link";

interface PricingPlan {
  id: string;
  name: string;
  displayName: string;
  description: string | null;
  price: number;
  interval: string;
  features: string[];
  isPopular: boolean;
  stripePriceId: string | null;
}

export function DynamicPricingSection() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [billingInterval, setBillingInterval] = useState<"month" | "year">(
    "month"
  );

  useEffect(() => {
    const loadPlans = async () => {
      const result = await getPricingPlans();
      if (result.status === 200) {
        setPlans(result.data as PricingPlan[]);
      }
      setLoading(false);
    };
    loadPlans();
  }, []);

  // Fallback plans if database is empty
  const defaultPlans: PricingPlan[] = [
    {
      id: "1",
      name: "FREE",
      displayName: "Free Plan",
      description: "Perfect for getting started",
      price: 0,
      interval: "month",
      features: [
        "Up to 100 automated responses/month",
        "Basic keyword triggers",
        "Comment automation",
        "Email support",
        "Basic analytics dashboard",
      ],
      isPopular: false,
      stripePriceId: null,
    },
    {
      id: "2",
      name: "PRO",
      displayName: "Smart AI Plan",
      description: "Advanced features for power users",
      price: 99,
      interval: "month",
      features: [
        "Unlimited automated responses",
        "AI-powered response generation",
        "Advanced analytics & insights",
        "Priority customer support",
        "Custom branding options",
        "Webhook integrations",
        "A/B testing capabilities",
        "Team collaboration tools",
      ],
      isPopular: true,
      stripePriceId: null,
    },
    {
      id: "3",
      name: "ENTERPRISE",
      displayName: "Enterprise",
      description: "For agencies and large teams",
      price: 299,
      interval: "month",
      features: [
        "Everything in Smart AI",
        "Unlimited team members",
        "Dedicated account manager",
        "Custom AI model training",
        "White-label solution",
        "API access",
        "SLA guarantee",
        "Advanced security features",
        "Custom integrations",
      ],
      isPopular: false,
      stripePriceId: null,
    },
  ];

  const displayPlans = plans.length > 0 ? plans : defaultPlans;
  const filteredPlans = displayPlans.filter(
    (plan) => plan.interval === billingInterval
  );
  const plansToShow = filteredPlans.length > 0 ? filteredPlans : displayPlans;

  const getPlanIcon = (name: string) => {
    if (name.includes("FREE")) return <Sparkles className="h-5 w-5" />;
    if (name.includes("PRO") || name.includes("SMART"))
      return <Zap className="h-5 w-5" />;
    if (name.includes("ENTERPRISE")) return <Crown className="h-5 w-5" />;
    return <CheckCircle className="h-5 w-5" />;
  };

  const getPlanColor = (name: string) => {
    if (name.includes("FREE")) return "bg-slate-100 dark:bg-slate-800";
    if (name.includes("PRO") || name.includes("SMART"))
      return "bg-blue-100 dark:bg-blue-900";
    if (name.includes("ENTERPRISE")) return "bg-purple-100 dark:bg-purple-900";
    return "bg-gray-100 dark:bg-gray-800";
  };

  if (loading) {
    return (
      <section
        id="pricing"
        className="container w-full py-12 md:py-24 lg:py-32 bg-background"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <div className="h-8 w-64 bg-muted animate-pulse rounded mx-auto" />
            <div className="h-4 w-96 bg-muted animate-pulse rounded mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="pricing"
      className="container w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Choose Your Plan
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-lg">
            Select the perfect plan to boost your Instagram engagement. Upgrade,
            downgrade, or cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center gap-3 mt-6">
            <span
              className={
                billingInterval === "month"
                  ? "font-semibold"
                  : "text-muted-foreground"
              }
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingInterval(
                  billingInterval === "month" ? "year" : "month"
                )
              }
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingInterval === "year" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={
                billingInterval === "year"
                  ? "font-semibold"
                  : "text-muted-foreground"
              }
            >
              Yearly
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {plansToShow.map((plan) => {
            const yearlyPrice =
              billingInterval === "year" ? plan.price * 12 * 0.8 : plan.price;
            const displayPrice =
              billingInterval === "year" ? yearlyPrice / 12 : plan.price;

            return (
              <Card
                key={plan.id}
                className={`flex flex-col justify-between relative ${
                  plan.isPopular ? "border-blue-500 border-2 shadow-xl" : ""
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <div
                    className={`h-12 w-12 rounded-lg ${getPlanColor(
                      plan.name
                    )} flex items-center justify-center mb-3`}
                  >
                    {getPlanIcon(plan.name)}
                  </div>
                  <CardTitle className="text-2xl">{plan.displayName}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="grid gap-4 flex-1">
                  <div className="text-4xl font-bold">
                    ${displayPrice.toFixed(0)}
                    <span className="text-lg font-normal text-muted-foreground">
                      /{billingInterval === "year" ? "mo" : "month"}
                    </span>
                  </div>

                  {billingInterval === "year" && plan.price > 0 && (
                    <p className="text-sm text-muted-foreground">
                      Billed ${yearlyPrice.toFixed(0)} annually
                    </p>
                  )}

                  <ul className="space-y-3 mt-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.isPopular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/dashboard">
                      {plan.price === 0 ? "Get Started Free" : "Upgrade Now"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            All plans include 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              24/7 support
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Secure payments
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
