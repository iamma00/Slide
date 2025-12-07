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
import { mockAutomations } from "@/lib/mock-data";
import { Play, Pause, Edit, Trash2, Plus } from "lucide-react";

export default function AutomationsList() {
  const [automations, setAutomations] = useState(mockAutomations);

  const toggleStatus = (id: string) => {
    setAutomations((prev) =>
      prev.map((auto) =>
        auto.id === id
          ? { ...auto, status: auto.status === "active" ? "paused" : "active" }
          : auto
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Automations</h2>
          <p className="text-muted-foreground">
            Manage your Instagram automation workflows
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Automation
        </Button>
      </div>

      <div className="grid gap-4">
        {automations.map((automation) => (
          <Card key={automation.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    {automation.name}
                    <Badge
                      variant={
                        automation.status === "active" ? "default" : "secondary"
                      }
                    >
                      {automation.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {automation.type} • {automation.trigger}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => toggleStatus(automation.id)}
                  >
                    {automation.status === "active" ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <strong>Template:</strong> {automation.template}
                </div>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Runs:</span>{" "}
                    <span className="font-semibold">{automation.runs}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Conversions:</span>{" "}
                    <span className="font-semibold">
                      {automation.conversions}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Rate:</span>{" "}
                    <span className="font-semibold text-green-600">
                      {(
                        (automation.conversions / automation.runs) *
                        100
                      ).toFixed(1)}
                      %
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
