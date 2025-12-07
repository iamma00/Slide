import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  BookOpen,
  MessageSquare,
  FileText,
  Video,
  Mail,
  Send,
  ExternalLink,
  Search,
} from "lucide-react";

export const dynamic = "force-dynamic";

const faqs = [
  {
    question: "How do I connect my Instagram account?",
    answer:
      'Go to Settings > Instagram Integration, click "Connect Instagram", and follow the OAuth flow to authorize our app. You\'ll need a business or creator account.',
  },
  {
    question: "What is the daily automation limit?",
    answer:
      "The Free plan allows 100 automations per day. The Smart AI plan increases this to 1,000 per day. This prevents Instagram rate limiting and keeps your account safe.",
  },
  {
    question: "How does AI response generation work?",
    answer:
      "Our AI analyzes the context of incoming messages and generates personalized responses using GPT-4, Gemini, or OpenRouter. You can customize the AI tone and style in settings.",
  },
  {
    question: "Can I pause automations temporarily?",
    answer:
      "Yes! Each automation has a play/pause toggle. You can also set schedules for when automations should run (e.g., only during business hours).",
  },
  {
    question: "Is my Instagram account safe?",
    answer:
      "Absolutely. We follow Instagram's best practices and API guidelines. We use official Instagram Graph API and respect all rate limits. Your credentials are encrypted.",
  },
  {
    question: "How do I upgrade my plan?",
    answer:
      'Visit Settings > Billing or click any "Upgrade" button. Choose your plan, add a payment method, and you\'ll be upgraded instantly.',
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes! Go to Settings > Data & Privacy to export all your automation data, conversations, and analytics in JSON or CSV format.",
  },
  {
    question: "What happens if I hit the rate limit?",
    answer:
      "Automations will queue and retry automatically. You'll receive a notification, and we'll slow down requests to avoid issues with Instagram.",
  },
];

const resources = [
  { title: "Getting Started Guide", icon: BookOpen, href: "/setup" },
  { title: "Video Tutorials", icon: Video, href: "#" },
  { title: "API Documentation", icon: FileText, href: "#" },
  { title: "Community Forum", icon: MessageSquare, href: "#" },
];

export default function HelpPage() {
  return (
    <div className="container mx-auto p-6 max-w-5xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">
          Find answers to common questions and get support
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search for help articles..." className="pl-9" />
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Get help from our support team
            </p>
            <Button className="w-full gap-2">
              <Mail className="h-4 w-4" />
              Email Support
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Send className="h-5 w-5 text-purple-600" />
              Feature Request
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Suggest new features or improvements
            </p>
            <Button variant="outline" className="w-full gap-2">
              <Send className="h-4 w-4" />
              Submit Idea
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
          <CardDescription>
            Guides and tutorials to help you get started
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="h-auto justify-start p-4"
                asChild
              >
                <a href={resource.href} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="flex-1 text-left">{resource.title}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              </Button>
            );
          })}
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>Common questions about using Slide</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>
            Current operational status of all services
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg border">
            <span className="font-medium">All Systems</span>
            <Badge className="bg-green-600">Operational</Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            Last updated: Just now •{" "}
            <a href="#" className="text-primary hover:underline">
              View detailed status
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Still Need Help */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200">
        <CardHeader>
          <CardTitle>Still need help?</CardTitle>
          <CardDescription>
            Our support team is here to assist you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            Can&apos;t find what you&apos;re looking for? Reach out to our
            support team and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex gap-2">
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              support@slide.app
            </Button>
            <Button variant="outline">View Setup Guide</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
