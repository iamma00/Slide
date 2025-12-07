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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Zap, Plus, Save } from "lucide-react";

export default function AutomationBuilder() {
  const [automationName, setAutomationName] = useState("");
  const [triggerType, setTriggerType] = useState("");
  const [keywords, setKeywords] = useState("");
  const [responseTemplate, setResponseTemplate] = useState("");
  const [useAI, setUseAI] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-600" />
          Automation Builder
        </CardTitle>
        <CardDescription>
          Create a new Instagram automation workflow
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Automation Name</Label>
          <Input
            id="name"
            placeholder="e.g., Welcome New Followers"
            value={automationName}
            onChange={(e) => setAutomationName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="trigger">Trigger Type</Label>
          <Select value={triggerType} onValueChange={setTriggerType}>
            <SelectTrigger id="trigger">
              <SelectValue placeholder="Select trigger type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="comment">Comment on Post</SelectItem>
              <SelectItem value="dm">Direct Message</SelectItem>
              <SelectItem value="story_mention">Story Mention</SelectItem>
              <SelectItem value="new_follower">New Follower</SelectItem>
              <SelectItem value="story_reply">Story Reply</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="keywords">Keywords (comma separated)</Label>
          <Input
            id="keywords"
            placeholder="price, buy, info, interested"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Automation triggers when these keywords are detected
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="template">Response Template</Label>
          <Textarea
            id="template"
            placeholder="Hi {name}! Thanks for your interest. Check out our pricing at {link}"
            value={responseTemplate}
            onChange={(e) => setResponseTemplate(e.target.value)}
            rows={4}
          />
          <div className="flex gap-2 flex-wrap text-xs">
            <Badge variant="outline">{"{name}"}</Badge>
            <Badge variant="outline">{"{username}"}</Badge>
            <Badge variant="outline">{"{link}"}</Badge>
            <Badge variant="outline">{"{product}"}</Badge>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="ai-mode">Smart AI Mode</Label>
            <p className="text-sm text-muted-foreground">
              Let AI generate personalized responses
            </p>
          </div>
          <Switch id="ai-mode" checked={useAI} onCheckedChange={setUseAI} />
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 gap-2">
            <Save className="h-4 w-4" />
            Save Automation
          </Button>
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Condition
          </Button>
        </div>

        {automationName && (
          <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 p-4 border border-blue-200">
            <p className="text-sm font-semibold mb-2">Preview:</p>
            <p className="text-sm">
              When a user {triggerType || "triggers"} with keywords &quot;
              {keywords || "any"}&quot;,
              {useAI
                ? " AI will generate a personalized response"
                : ` send: &quot;${responseTemplate || "your template"}&quot;`}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
