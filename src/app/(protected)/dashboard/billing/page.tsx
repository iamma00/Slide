import React from "react";
import PricingShowcase from "@/components/global/pricing-showcase";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  Calendar,
  Receipt,
  Download,
  CheckCircle,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default function BillingPage() {
  return (
    <div className="container mx-auto p-6 max-w-5xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        <p className="text-muted-foreground">
          Manage your subscription and payment methods
        </p>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>Your active subscription details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">Free Plan</h3>
                <Badge>Active</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Free forever • Limited features
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">$0</div>
              <p className="text-sm text-muted-foreground">per month</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Billing Cycle</div>
              <div className="text-sm text-muted-foreground">Monthly</div>
            </div>
            <div className="text-right">
              <div className="font-medium">Next Billing Date</div>
              <div className="text-sm text-muted-foreground">N/A</div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="font-medium mb-3">Current Plan Features:</div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Basic DM automation</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Comment automation</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Up to 100 automations/day</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-4 w-4" />
                <span>AI-powered responses (Upgrade required)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-4 w-4" />
                <span>Advanced analytics (Upgrade required)</span>
              </div>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Upgrade to Smart AI Plan
          </Button>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Method
          </CardTitle>
          <CardDescription>Manage your payment information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-8 text-muted-foreground">
            <CreditCard className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No payment method added</p>
            <p className="text-sm">Add a payment method to upgrade your plan</p>
          </div>
          <Button variant="outline" className="w-full gap-2">
            <CreditCard className="h-4 w-4" />
            Add Payment Method
          </Button>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Billing History
          </CardTitle>
          <CardDescription>View and download past invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No billing history</p>
            <p className="text-sm">Your invoices will appear here</p>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Available Plans</h2>
        <PricingShowcase />
      </div>
    </div>
  );
}
