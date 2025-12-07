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
import { Users, Search, Send, Star, Clock } from "lucide-react";

const mockInfluencers = [
  {
    id: 1,
    username: "fitness_guru_mike",
    followers: "127K",
    engagement: "8.4%",
    niche: "Fitness",
    status: "active",
  },
  {
    id: 2,
    username: "fashionista_emma",
    followers: "89K",
    engagement: "12.1%",
    niche: "Fashion",
    status: "pending",
  },
  {
    id: 3,
    username: "tech_reviewer_sam",
    followers: "234K",
    engagement: "6.7%",
    niche: "Technology",
    status: "active",
  },
  {
    id: 4,
    username: "foodie_adventures",
    followers: "156K",
    engagement: "9.2%",
    niche: "Food",
    status: "contacted",
  },
  {
    id: 5,
    username: "travel_diaries_alex",
    followers: "298K",
    engagement: "11.3%",
    niche: "Travel",
    status: "active",
  },
  {
    id: 6,
    username: "makeup_artist_lily",
    followers: "67K",
    engagement: "15.8%",
    niche: "Beauty",
    status: "pending",
  },
];

const campaigns = [
  {
    name: "Summer Launch",
    influencers: 12,
    reach: "1.2M",
    conversions: 234,
    budget: "$5,000",
  },
  {
    name: "Holiday Special",
    influencers: 8,
    reach: "890K",
    conversions: 167,
    budget: "$3,500",
  },
  {
    name: "Brand Awareness",
    influencers: 15,
    reach: "2.1M",
    conversions: 89,
    budget: "$7,800",
  },
];

export default function InfluencerOutreach() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInfluencers = mockInfluencers.filter(
    (inf) =>
      inf.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inf.niche.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "default";
      case "pending":
        return "secondary";
      case "contacted":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-600" />
            Influencer Database
          </CardTitle>
          <CardDescription>
            Discover and manage influencer partnerships
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by username or niche..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-3">
            {filteredInfluencers.map((influencer) => (
              <div
                key={influencer.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">@{influencer.username}</span>
                    <Badge
                      variant={getStatusColor(influencer.status)}
                      className="text-xs capitalize"
                    >
                      {influencer.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {influencer.followers}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {influencer.engagement} engagement
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {influencer.niche}
                    </Badge>
                  </div>
                </div>
                <Button size="sm" className="gap-2">
                  <Send className="h-3 w-3" />
                  Contact
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Campaigns</CardTitle>
          <CardDescription>
            Track your influencer marketing campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">{campaign.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {campaign.influencers} influencers
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground text-xs">
                      Total Reach
                    </div>
                    <div className="font-semibold text-lg">
                      {campaign.reach}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">
                      Conversions
                    </div>
                    <div className="font-semibold text-lg">
                      {campaign.conversions}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Budget</div>
                    <div className="font-semibold text-lg">
                      {campaign.budget}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
