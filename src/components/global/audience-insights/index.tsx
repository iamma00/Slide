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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  UserPlus,
  MessageSquare,
  Tag,
  TrendingUp,
  Download,
} from "lucide-react";

const audienceSegments = [
  {
    name: "Engaged Followers",
    count: 3421,
    growth: "+12%",
    engagement: "18.4%",
    color: "bg-blue-500",
  },
  {
    name: "Recent Customers",
    count: 567,
    growth: "+8%",
    engagement: "24.1%",
    color: "bg-green-500",
  },
  {
    name: "High Value Leads",
    count: 234,
    growth: "+15%",
    engagement: "31.2%",
    color: "bg-purple-500",
  },
  {
    name: "Inactive Users",
    count: 1289,
    growth: "-3%",
    engagement: "2.1%",
    color: "bg-gray-500",
  },
];

const topInterests = [
  { interest: "Fitness & Health", percentage: 34, count: 1876 },
  { interest: "Business & Marketing", percentage: 28, count: 1542 },
  { interest: "Technology", percentage: 18, count: 992 },
  { interest: "Lifestyle", percentage: 12, count: 661 },
  { interest: "Fashion", percentage: 8, count: 441 },
];

const demographics = {
  age: [
    { range: "18-24", percentage: 18 },
    { range: "25-34", percentage: 42 },
    { range: "35-44", percentage: 24 },
    { range: "45-54", percentage: 12 },
    { range: "55+", percentage: 4 },
  ],
  location: [
    { city: "New York", percentage: 22 },
    { city: "Los Angeles", percentage: 18 },
    { city: "London", percentage: 15 },
    { city: "Toronto", percentage: 12 },
    { city: "Mumbai", percentage: 10 },
  ],
};

export default function AudienceInsights() {
  const [activeTab, setActiveTab] = useState("segments");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            Audience Insights
          </CardTitle>
          <CardDescription>
            Deep dive into your Instagram audience analytics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="segments">Segments</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
            </TabsList>

            <TabsContent value="segments" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {audienceSegments.map((segment, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-3 w-3 rounded-full ${segment.color}`}
                        />
                        <h4 className="font-semibold">{segment.name}</h4>
                      </div>
                      <Badge
                        variant={
                          segment.growth.startsWith("+")
                            ? "default"
                            : "secondary"
                        }
                      >
                        {segment.growth}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-bold">
                          {segment.count.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          users
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">
                          Engagement:{" "}
                        </span>
                        <span className="font-semibold">
                          {segment.engagement}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full gap-2">
                <UserPlus className="h-4 w-4" />
                Create Custom Segment
              </Button>
            </TabsContent>

            <TabsContent value="interests" className="space-y-4 mt-4">
              <div className="space-y-3">
                {topInterests.map((interest, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{interest.interest}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {interest.count.toLocaleString()} users (
                        {interest.percentage}%)
                      </div>
                    </div>
                    <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{ width: `${interest.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200">
                <p className="text-sm">
                  <strong>💡 Insight:</strong> Your audience is highly engaged
                  with fitness and business content. Consider creating more
                  content around these topics.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="demographics" className="space-y-6 mt-4">
              <div>
                <h4 className="font-semibold mb-3">Age Distribution</h4>
                <div className="space-y-3">
                  {demographics.age.map((age, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>{age.range}</span>
                        <span className="font-semibold">{age.percentage}%</span>
                      </div>
                      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="absolute h-full bg-blue-500"
                          style={{ width: `${age.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Top Locations</h4>
                <div className="space-y-2">
                  {demographics.location.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border"
                    >
                      <span className="font-medium">{location.city}</span>
                      <Badge variant="secondary">{location.percentage}%</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full gap-2">
                <Download className="h-4 w-4" />
                Export Full Demographics Report
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Total Followers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,512</div>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +234 this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Avg Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.4%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Industry avg: 6.8%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Active Segments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{audienceSegments.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Custom audience groups
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +5% vs last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
