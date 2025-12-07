"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getFAQs } from "@/actions/faq";
import { HelpCircle } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string | null;
}

export function FAQSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFAQs = async () => {
      const result = await getFAQs();
      if (result.status === 200) {
        setFaqs(result.data as FAQ[]);
      }
      setLoading(false);
    };
    loadFAQs();
  }, []);

  const defaultFAQs: FAQ[] = [
    {
      id: "1",
      question: "How does Slide automate Instagram engagement?",
      answer:
        "Slide uses advanced AI to monitor your Instagram account for specific keywords and triggers. When detected, it automatically responds with contextually relevant messages to comments and DMs, saving you hours while maintaining authentic engagement.",
      category: "General",
    },
    {
      id: "2",
      question: "Is Slide safe to use with Instagram?",
      answer:
        "Absolutely! Slide uses official Instagram APIs and Meta webhooks, ensuring full compliance with Instagram's terms of service. We prioritize account security and follow all platform guidelines.",
      category: "Security",
    },
    {
      id: "3",
      question: "Can I customize the automated responses?",
      answer:
        "Yes! You have full control over your automation rules, keywords, and response templates. Our AI learns from your brand voice and you can review and edit all automated messages before they're sent.",
      category: "Features",
    },
    {
      id: "4",
      question: "What happens if I exceed my plan limits?",
      answer:
        "You'll receive notifications as you approach your limit. Free plan users can upgrade anytime. If you hit the limit, automation pauses until the next billing cycle or you can upgrade immediately to continue.",
      category: "Billing",
    },
    {
      id: "5",
      question: "Do I need technical knowledge to use Slide?",
      answer:
        "Not at all! Slide is designed for everyone. Our intuitive interface and step-by-step setup guide make it easy to get started in minutes, even if you're not tech-savvy.",
      category: "General",
    },
    {
      id: "6",
      question: "Can I use Slide for multiple Instagram accounts?",
      answer:
        "Yes! Pro and Enterprise plans support multiple accounts. You can manage all your Instagram profiles from a single dashboard with separate automation rules for each.",
      category: "Features",
    },
    {
      id: "7",
      question: "How accurate is the AI in understanding context?",
      answer:
        "Our AI has been trained on millions of Instagram interactions and achieves 95%+ accuracy in understanding context and sentiment. It continuously learns from your feedback to improve over time.",
      category: "AI",
    },
    {
      id: "8",
      question: "What kind of support do you offer?",
      answer:
        "Free users get email support with 48-hour response time. Pro users receive priority support with 24-hour response. Enterprise customers get a dedicated account manager and instant support access.",
      category: "Support",
    },
  ];

  const displayFAQs = faqs.length > 0 ? faqs : defaultFAQs;

  if (loading) {
    return null;
  }

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <HelpCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Got questions? We&apos;ve got answers. Can&apos;t find what
            you&apos;re looking for? Contact our support team.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              {displayFAQs.map((faq, index) => (
                <AccordionItem key={faq.id} value={`item-${index}`}>
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
      </div>
    </section>
  );
}
