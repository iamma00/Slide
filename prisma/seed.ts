import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Seed Pricing Plans
  console.log("📦 Seeding pricing plans...");
  const pricingPlans = [
    {
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
      sortOrder: 1,
    },
    {
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
      sortOrder: 2,
    },
    {
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
      sortOrder: 3,
    },
  ];

  for (const plan of pricingPlans) {
    await prisma.pricingPlan.upsert({
      where: { name: plan.name },
      update: plan,
      create: plan,
    });
  }

  // Seed FAQs
  console.log("❓ Seeding FAQs...");
  const faqs = [
    {
      question: "How does Slide automate Instagram engagement?",
      answer:
        "Slide uses advanced AI to monitor your Instagram account for specific keywords and triggers. When detected, it automatically responds with contextually relevant messages to comments and DMs, saving you hours while maintaining authentic engagement.",
      category: "General",
      sortOrder: 1,
    },
    {
      question: "Is Slide safe to use with Instagram?",
      answer:
        "Absolutely! Slide uses official Instagram APIs and Meta webhooks, ensuring full compliance with Instagram's terms of service. We prioritize account security and follow all platform guidelines.",
      category: "Security",
      sortOrder: 2,
    },
    {
      question: "Can I customize the automated responses?",
      answer:
        "Yes! You have full control over your automation rules, keywords, and response templates. Our AI learns from your brand voice and you can review and edit all automated messages before they're sent.",
      category: "Features",
      sortOrder: 3,
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer:
        "You'll receive notifications as you approach your limit. Free plan users can upgrade anytime. If you hit the limit, automation pauses until the next billing cycle or you can upgrade immediately to continue.",
      category: "Billing",
      sortOrder: 4,
    },
    {
      question: "Do I need technical knowledge to use Slide?",
      answer:
        "Not at all! Slide is designed for everyone. Our intuitive interface and step-by-step setup guide make it easy to get started in minutes, even if you're not tech-savvy.",
      category: "General",
      sortOrder: 5,
    },
    {
      question: "Can I use Slide for multiple Instagram accounts?",
      answer:
        "Yes! Pro and Enterprise plans support multiple accounts. You can manage all your Instagram profiles from a single dashboard with separate automation rules for each.",
      category: "Features",
      sortOrder: 6,
    },
    {
      question: "How accurate is the AI in understanding context?",
      answer:
        "Our AI has been trained on millions of Instagram interactions and achieves 95%+ accuracy in understanding context and sentiment. It continuously learns from your feedback to improve over time.",
      category: "AI",
      sortOrder: 7,
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "Free users get email support with 48-hour response time. Pro users receive priority support with 24-hour response. Enterprise customers get a dedicated account manager and instant support access.",
      category: "Support",
      sortOrder: 8,
    },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({
      data: faq,
    });
  }

  // Seed Testimonials
  console.log("💬 Seeding testimonials...");
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Social Media Manager",
      company: "TechCorp",
      content:
        "Slide transformed our Instagram engagement! We've seen a 300% increase in meaningful conversations with our audience. The AI responses are incredibly natural.",
      rating: 5,
      sortOrder: 1,
    },
    {
      name: "Michael Chen",
      role: "Content Creator",
      content:
        "As a solo creator, Slide saves me hours every day. The automation is smart enough to handle most interactions, letting me focus on creating content.",
      rating: 5,
      sortOrder: 2,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Fashion Brand",
      content:
        "The ROI has been incredible. We've converted followers to customers at a rate we never thought possible. Slide is a game-changer for e-commerce brands.",
      rating: 5,
      sortOrder: 3,
    },
    {
      name: "David Park",
      role: "Influencer",
      company: "Fitness & Wellness",
      content:
        "I can finally engage with my 500K followers without burning out. The keyword triggers work perfectly for my fitness coaching business.",
      rating: 5,
      sortOrder: 4,
    },
    {
      name: "Jessica Taylor",
      role: "Agency Owner",
      company: "Social Growth Co",
      content:
        "We manage 50+ Instagram accounts and Slide has revolutionized our workflow. Our clients love the engagement boost and natural responses.",
      rating: 5,
      sortOrder: 5,
    },
    {
      name: "Alex Thompson",
      role: "E-commerce Founder",
      company: "StyleHub",
      content:
        "The DM automation alone has paid for itself 10x over. We're closing sales in the DMs like never before. Absolutely essential tool!",
      rating: 5,
      sortOrder: 6,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial,
    });
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
