"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockPricingPlans } from "@/lib/mock-data";
import { Check, Sparkles } from "lucide-react";

export default function PricingShowcase() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground">
          Choose the perfect plan for your business
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {mockPricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={plan.popular ? "border-blue-600 border-2 relative" : ""}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="gap-1 bg-blue-600">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.price === 0 ? "Get Started" : "Start Free Trial"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
