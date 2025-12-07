// Mock data for demo/showcase purposes - no backend required

export const mockMetrics = {
  totalDMs: 1247,
  totalComments: 3891,
  automationRuns: 523,
  conversionRate: 18.5,
  dailyStats: [
    { date: "2024-01-01", dms: 45, comments: 120, conversions: 8 },
    { date: "2024-01-02", dms: 52, comments: 135, conversions: 11 },
    { date: "2024-01-03", dms: 48, comments: 128, conversions: 9 },
    { date: "2024-01-04", dms: 61, comments: 142, conversions: 13 },
    { date: "2024-01-05", dms: 58, comments: 151, conversions: 12 },
    { date: "2024-01-06", dms: 67, comments: 165, conversions: 15 },
    { date: "2024-01-07", dms: 72, comments: 178, conversions: 17 },
  ],
};

export const mockAutomations = [
  {
    id: "1",
    name: "Welcome New Followers",
    type: "DM",
    trigger: "New follower",
    status: "active",
    runs: 145,
    conversions: 23,
    template:
      "Hey {name}! Thanks for following. Check out our latest offer: {link}",
  },
  {
    id: "2",
    name: "Comment Reply Bot",
    type: "COMMENT",
    trigger: "Keywords: price, cost, buy",
    status: "active",
    runs: 312,
    conversions: 48,
    template: "Thanks for your interest! DM us for pricing details.",
  },
  {
    id: "3",
    name: "Story Reply Automation",
    type: "STORY_REPLY",
    trigger: "Story mention",
    status: "paused",
    runs: 66,
    conversions: 9,
    template: "Thanks for the mention! Want to collaborate?",
  },
  {
    id: "4",
    name: "Smart AI Sales Bot",
    type: "SMART_AI",
    trigger: "Keywords: interested, info, details",
    status: "active",
    runs: 89,
    conversions: 27,
    template: "AI-powered personalized response based on conversation context",
  },
];

export const mockKeywords = [
  { keyword: "price", count: 234, lastTriggered: "2 hours ago" },
  { keyword: "discount", count: 189, lastTriggered: "5 hours ago" },
  { keyword: "buy", count: 312, lastTriggered: "1 hour ago" },
  { keyword: "interested", count: 156, lastTriggered: "3 hours ago" },
  { keyword: "info", count: 278, lastTriggered: "30 minutes ago" },
];

export const mockConversations = [
  {
    id: "1",
    username: "@sarah_designs",
    avatar: "👩",
    lastMessage: "What are your prices for the premium plan?",
    timestamp: "5 min ago",
    status: "pending",
    messages: 3,
  },
  {
    id: "2",
    username: "@mike_fitness",
    avatar: "👨",
    lastMessage: "Can I get a discount code?",
    timestamp: "12 min ago",
    status: "replied",
    messages: 5,
  },
  {
    id: "3",
    username: "@emma_travel",
    avatar: "👩‍🦰",
    lastMessage: "Interested in collaboration",
    timestamp: "1 hour ago",
    status: "automated",
    messages: 2,
  },
];

export const mockWebhookLogs = [
  {
    id: "1",
    event: "instagram_comments",
    payload: { post_id: "123", comment: "Love this!", user: "@john_doe" },
    status: "success",
    timestamp: "2 min ago",
  },
  {
    id: "2",
    event: "instagram_messages",
    payload: { sender: "@jane_smith", message: "How much?" },
    status: "success",
    timestamp: "8 min ago",
  },
  {
    id: "3",
    event: "instagram_story_mention",
    payload: { story_id: "456", user: "@alex_creative" },
    status: "processed",
    timestamp: "15 min ago",
  },
];

export const mockPricingPlans = [
  {
    name: "Free Starter",
    price: 0,
    features: [
      "Up to 100 DMs/month",
      "Basic comment automation",
      "3 active automations",
      "Standard analytics",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro Growth",
    price: 49,
    features: [
      "Unlimited DMs",
      "Advanced comment automation",
      "Unlimited automations",
      "Smart AI responses",
      "Story reply automation",
      "Advanced analytics & insights",
      "Priority support",
      "Custom branding",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    features: [
      "Everything in Pro",
      "Multi-account management",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "White-label solution",
      "24/7 phone support",
    ],
    popular: false,
  },
];

export const mockInstagramPosts = [
  {
    id: "post1",
    media_url: "/placeholder-post-1.jpg",
    caption: "Check out our latest product launch! 🚀",
    likes: 523,
    comments: 87,
    timestamp: "2 days ago",
  },
  {
    id: "post2",
    media_url: "/placeholder-post-2.jpg",
    caption: "Behind the scenes of our creative process ✨",
    likes: 412,
    comments: 56,
    timestamp: "4 days ago",
  },
  {
    id: "post3",
    media_url: "/placeholder-post-3.jpg",
    caption: "Customer success story! Read more in bio 💼",
    likes: 678,
    comments: 102,
    timestamp: "1 week ago",
  },
];

export const mockAIResponses = [
  {
    userMessage: "How much does this cost?",
    aiResponse:
      "Our pricing starts at $49/month for the Pro plan, which includes unlimited DMs and Smart AI. Would you like to see all our plans?",
    confidence: 0.95,
  },
  {
    userMessage: "Can you tell me more about the features?",
    aiResponse:
      "Absolutely! Our platform offers Instagram automation, AI-powered DM responses, comment automation, and advanced analytics. What specific feature are you most interested in?",
    confidence: 0.92,
  },
  {
    userMessage: "Is there a free trial?",
    aiResponse:
      "Yes! We offer a Free Starter plan with up to 100 DMs/month. You can upgrade anytime. Want me to help you get started?",
    confidence: 0.97,
  },
];
