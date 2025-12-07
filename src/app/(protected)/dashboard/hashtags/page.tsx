import React from "react";
import HashtagResearch from "@/components/global/hashtag-research";

export const dynamic = "force-dynamic";

export default function HashtagsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Hashtag Research</h1>
        <p className="text-muted-foreground">
          Discover trending hashtags and optimize your content strategy
        </p>
      </div>

      <HashtagResearch />
    </div>
  );
}
