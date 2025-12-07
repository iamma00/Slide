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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hash, TrendingUp, Search, Star, BarChart3, Copy } from "lucide-react";

const trendingHashtags = [
  { tag: "#instagrowth", posts: "1.2M", engagement: "8.4%", trend: "rising" },
  {
    tag: "#socialmediamarketing",
    posts: "3.4M",
    engagement: "6.7%",
    trend: "stable",
  },
  {
    tag: "#contentcreator",
    posts: "2.1M",
    engagement: "9.2%",
    trend: "rising",
  },
  {
    tag: "#digitalmarketing",
    posts: "5.6M",
    engagement: "5.3%",
    trend: "falling",
  },
  {
    tag: "#instagramtips",
    posts: "890K",
    engagement: "11.5%",
    trend: "rising",
  },
];

const yourHashtags = [
  { tag: "#fitness", uses: 45, avgEngagement: "7.8%", performance: "good" },
  {
    tag: "#wellness",
    uses: 32,
    avgEngagement: "9.2%",
    performance: "excellent",
  },
  { tag: "#health", uses: 28, avgEngagement: "6.4%", performance: "average" },
  {
    tag: "#motivation",
    uses: 52,
    avgEngagement: "10.1%",
    performance: "excellent",
  },
];

const suggestedSets = [
  {
    name: "High Engagement Set",
    tags: [
      "#instagrowth",
      "#contentcreator",
      "#instagramtips",
      "#engagement",
      "#socialmedia",
    ],
    avgEngagement: "9.8%",
  },
  {
    name: "Niche Authority Set",
    tags: ["#fitness", "#wellness", "#health", "#motivation", "#fitfam"],
    avgEngagement: "8.6%",
  },
  {
    name: "Viral Potential Set",
    tags: ["#trending", "#viral", "#explore", "#fyp", "#reelsinstagram"],
    avgEngagement: "12.3%",
  },
];

export default function HashtagResearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedSet, setCopiedSet] = useState<number | null>(null);

  const copyHashtagSet = (tags: string[], index: number) => {
    navigator.clipboard.writeText(tags.join(" "));
    setCopiedSet(index);
    setTimeout(() => setCopiedSet(null), 2000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5 text-blue-600" />
            Hashtag Research Tool
          </CardTitle>
          <CardDescription>
            Discover high-performing hashtags for your content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="trending">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="your">Your Hashtags</TabsTrigger>
              <TabsTrigger value="sets">Suggested Sets</TabsTrigger>
            </TabsList>

            <TabsContent value="trending" className="space-y-4 mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search hashtags..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="space-y-3">
                {trendingHashtags.map((hashtag, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-blue-600">
                          {hashtag.tag}
                        </span>
                        {hashtag.trend === "rising" && (
                          <Badge className="bg-green-600 gap-1">
                            <TrendingUp className="h-3 w-3" />
                            Rising
                          </Badge>
                        )}
                        {hashtag.trend === "stable" && (
                          <Badge variant="secondary">Stable</Badge>
                        )}
                      </div>
                      <Button size="sm" variant="outline">
                        Add to Set
                      </Button>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BarChart3 className="h-3 w-3" />
                        <span>{hashtag.posts} posts</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>{hashtag.engagement} avg engagement</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="your" className="space-y-4 mt-4">
              <div className="space-y-3">
                {yourHashtags.map((hashtag, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{hashtag.tag}</span>
                        <Badge
                          variant={
                            hashtag.performance === "excellent"
                              ? "default"
                              : hashtag.performance === "good"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            hashtag.performance === "excellent"
                              ? "bg-green-600"
                              : ""
                          }
                        >
                          {hashtag.performance}
                        </Badge>
                      </div>
                      <Button size="sm" variant="ghost">
                        View Analytics
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground text-xs">
                          Times Used
                        </div>
                        <div className="font-semibold">{hashtag.uses}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs">
                          Avg Engagement
                        </div>
                        <div className="font-semibold">
                          {hashtag.avgEngagement}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sets" className="space-y-4 mt-4">
              {suggestedSets.map((set, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{set.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Avg Engagement:{" "}
                        <span className="font-semibold text-green-600">
                          {set.avgEngagement}
                        </span>
                      </p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => copyHashtagSet(set.tags, index)}
                      className="gap-2"
                    >
                      <Copy className="h-3 w-3" />
                      {copiedSet === index ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {set.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-blue-600"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                Generate Custom Set with AI
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Hashtag Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M</div>
            <p className="text-xs text-muted-foreground mt-1">
              Potential impressions from your hashtag sets
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Best Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground mt-1">
              Hashtags with 10%+ engagement rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Unique Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground mt-1">
              Different hashtags used this month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
