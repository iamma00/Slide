"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  TrendingUp,
  Image as ImageIcon,
  Video,
  FileText,
  BarChart3,
} from "lucide-react";

const scheduledPosts = [
  {
    id: 1,
    type: "image",
    caption: "New product launch! 🚀 Check out our latest innovation...",
    scheduledFor: "2025-12-08 10:00 AM",
    platform: "Instagram",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
  {
    id: 2,
    type: "video",
    caption: "Behind the scenes of our creative process 🎥",
    scheduledFor: "2025-12-08 2:00 PM",
    platform: "Instagram",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
  {
    id: 3,
    type: "carousel",
    caption: "Top 5 tips for social media success 💡",
    scheduledFor: "2025-12-09 9:00 AM",
    platform: "Instagram",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
];

const publishedPosts = [
  {
    id: 4,
    type: "image",
    caption: "Thank you for 10K followers! 🎉",
    publishedAt: "2025-12-06 3:00 PM",
    platform: "Instagram",
    status: "published",
    engagement: { likes: 1247, comments: 89, shares: 34 },
  },
  {
    id: 5,
    type: "video",
    caption: "Product demo: See our features in action",
    publishedAt: "2025-12-05 11:00 AM",
    platform: "Instagram",
    status: "published",
    engagement: { likes: 2156, comments: 134, shares: 67 },
  },
  {
    id: 6,
    type: "carousel",
    caption: "Customer success stories that inspire us 💪",
    publishedAt: "2025-12-04 1:00 PM",
    platform: "Instagram",
    status: "published",
    engagement: { likes: 987, comments: 56, shares: 23 },
  },
];

const contentIdeas = [
  { title: "Product Tutorial", category: "Educational", potential: "High" },
  { title: "User Testimonial", category: "Social Proof", potential: "Medium" },
  { title: "Industry News", category: "Trending", potential: "High" },
  {
    title: "Team Spotlight",
    category: "Behind the Scenes",
    potential: "Medium",
  },
  { title: "Quick Tips", category: "Value", potential: "High" },
];

export default function ContentPlanner() {
  const [activeTab, setActiveTab] = useState("scheduled");

  const getPostIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      case "carousel":
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            Content Calendar
          </CardTitle>
          <CardDescription>
            Plan, schedule, and analyze your Instagram content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="scheduled">
                Scheduled ({scheduledPosts.length})
              </TabsTrigger>
              <TabsTrigger value="published">
                Published ({publishedPosts.length})
              </TabsTrigger>
              <TabsTrigger value="ideas">
                Ideas ({contentIdeas.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="scheduled" className="space-y-4 mt-4">
              {scheduledPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 rounded-lg border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getPostIcon(post.type)}
                      <Badge variant="outline" className="capitalize">
                        {post.type}
                      </Badge>
                      <Badge variant="secondary">Scheduled</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="destructive">
                        Cancel
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm mb-2">{post.caption}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.scheduledFor}
                    </span>
                    <span>{post.platform}</span>
                  </div>
                </div>
              ))}
              <Button className="w-full">Schedule New Post</Button>
            </TabsContent>

            <TabsContent value="published" className="space-y-4 mt-4">
              {publishedPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 rounded-lg border bg-green-50/50 dark:bg-green-950/20"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getPostIcon(post.type)}
                      <Badge variant="outline" className="capitalize">
                        {post.type}
                      </Badge>
                      <Badge className="bg-green-600">Published</Badge>
                    </div>
                    <Button size="sm" variant="outline" className="gap-2">
                      <BarChart3 className="h-3 w-3" />
                      Analytics
                    </Button>
                  </div>
                  <p className="text-sm mb-3">{post.caption}</p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">
                        {post.engagement.likes}
                      </span>
                      <span className="text-muted-foreground">likes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">
                        {post.engagement.comments}
                      </span>
                      <span className="text-muted-foreground">comments</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">
                        {post.engagement.shares}
                      </span>
                      <span className="text-muted-foreground">shares</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Published: {post.publishedAt}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="ideas" className="space-y-4 mt-4">
              {contentIdeas.map((idea, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{idea.title}</h4>
                      <Badge variant="outline">{idea.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          idea.potential === "High" ? "default" : "secondary"
                        }
                        className="gap-1"
                      >
                        <TrendingUp className="h-3 w-3" />
                        {idea.potential} Potential
                      </Badge>
                      <Button size="sm">Create Post</Button>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Generate More Ideas with AI
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
