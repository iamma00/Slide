"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Zap, TrendingUp, Award, Crown } from "lucide-react";

const competitorData = [
  {
    name: "@competitor_one",
    followers: "156K",
    engagement: "7.2%",
    postsPerWeek: 5,
    avgLikes: "11.2K",
    topHashtags: ["#fitness", "#wellness", "#health"],
    strength: "Consistency",
  },
  {
    name: "@competitor_two",
    followers: "189K",
    engagement: "9.1%",
    postsPerWeek: 7,
    avgLikes: "17.3K",
    topHashtags: ["#motivation", "#lifestyle", "#inspire"],
    strength: "Engagement",
  },
  {
    name: "@competitor_three",
    followers: "134K",
    engagement: "6.8%",
    postsPerWeek: 4,
    avgLikes: "9.1K",
    topHashtags: ["#workout", "#fitfam", "#goals"],
    strength: "Video Content",
  },
];

const benchmarks = [
  { metric: "Follower Growth", yourValue: 8.4, industry: 6.2, status: "ahead" },
  { metric: "Engagement Rate", yourValue: 9.7, industry: 7.5, status: "ahead" },
  { metric: "Post Frequency", yourValue: 5, industry: 6, status: "behind" },
  { metric: "Response Time", yourValue: 2.3, industry: 4.1, status: "ahead" },
];

export default function CompetitorAnalysis() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-orange-600" />
            Competitor Tracking
          </CardTitle>
          <CardDescription>
            Monitor and analyze your competition
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {competitorData.map((competitor, index) => (
            <div key={index} className="p-4 rounded-lg border space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-lg">{competitor.name}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <Badge variant="secondary">
                      {competitor.followers} followers
                    </Badge>
                    <Badge variant="outline">
                      {competitor.engagement} engagement
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs">
                    Posts/Week
                  </div>
                  <div className="font-semibold">{competitor.postsPerWeek}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Avg Likes</div>
                  <div className="font-semibold">{competitor.avgLikes}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Strength</div>
                  <div className="font-semibold flex items-center gap-1">
                    <Zap className="h-3 w-3 text-yellow-600" />
                    {competitor.strength}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">
                    Top Hashtags
                  </div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    {competitor.topHashtags.slice(0, 2).map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            Industry Benchmarks
          </CardTitle>
          <CardDescription>
            Compare your performance against industry standards
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {benchmarks.map((benchmark, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">
                    {benchmark.metric}
                  </span>
                  {benchmark.status === "ahead" ? (
                    <Badge className="bg-green-600 gap-1">
                      <Crown className="h-3 w-3" />
                      Leading
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Opportunity
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  You:{" "}
                  <span className="font-semibold text-foreground">
                    {benchmark.yourValue}
                  </span>{" "}
                  | Industry:{" "}
                  <span className="font-semibold">{benchmark.industry}</span>
                </div>
              </div>
              <div className="relative">
                <Progress
                  value={
                    (benchmark.yourValue /
                      Math.max(benchmark.yourValue, benchmark.industry)) *
                    100
                  }
                  className="h-2"
                />
                <div
                  className="absolute top-0 h-2 w-1 bg-orange-500"
                  style={{
                    left: `${
                      (benchmark.industry /
                        Math.max(benchmark.yourValue, benchmark.industry)) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Market Position
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold">#2</div>
              <div className="text-sm text-muted-foreground">in your niche</div>
            </div>
            <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
              <Award className="h-3 w-3" />
              Top 5% engagement rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Share of Voice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold">18.4%</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Your brand mentions vs competitors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Growth Velocity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold">+24%</div>
            </div>
            <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              Faster than avg competitor
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
