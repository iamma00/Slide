"use client";

import { subscribeToNewsletter } from "@/actions/newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await subscribeToNewsletter(email);

      if (result.status === 200) {
        toast({
          title: "Success!",
          description: result.message,
        });
        setEmail("");
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-950">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Stay Updated with Slide
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 10,000+ Instagram creators getting weekly tips, automation
            strategies, and exclusive insights delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base"
              disabled={loading}
            />
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="h-12 px-8"
            >
              {loading ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe anytime. By subscribing, you agree to our
            Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
