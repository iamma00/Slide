"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { getTestimonials } from "@/actions/testimonials";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string | null;
  content: string;
  avatar: string | null;
  rating: number;
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      const result = await getTestimonials();
      if (result.status === 200) {
        setTestimonials(result.data as Testimonial[]);
      }
      setLoading(false);
    };
    loadTestimonials();
  }, []);

  // Fallback testimonials if none in database
  const defaultTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Social Media Manager",
      company: "TechCorp",
      content:
        "Slide transformed our Instagram engagement! We've seen a 300% increase in meaningful conversations with our audience. The AI responses are incredibly natural.",
      avatar: null,
      rating: 5,
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Content Creator",
      company: null,
      content:
        "As a solo creator, Slide saves me hours every day. The automation is smart enough to handle most interactions, letting me focus on creating content.",
      avatar: null,
      rating: 5,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Fashion Brand",
      content:
        "The ROI has been incredible. We've converted followers to customers at a rate we never thought possible. Slide is a game-changer for e-commerce brands.",
      avatar: null,
      rating: 5,
    },
    {
      id: "4",
      name: "David Park",
      role: "Influencer",
      company: "Fitness & Wellness",
      content:
        "I can finally engage with my 500K followers without burning out. The keyword triggers work perfectly for my fitness coaching business.",
      avatar: null,
      rating: 5,
    },
    {
      id: "5",
      name: "Jessica Taylor",
      role: "Agency Owner",
      company: "Social Growth Co",
      content:
        "We manage 50+ Instagram accounts and Slide has revolutionized our workflow. Our clients love the engagement boost and natural responses.",
      avatar: null,
      rating: 5,
    },
    {
      id: "6",
      name: "Alex Thompson",
      role: "E-commerce Founder",
      company: "StyleHub",
      content:
        "The DM automation alone has paid for itself 10x over. We're closing sales in the DMs like never before. Absolutely essential tool!",
      avatar: null,
      rating: 5,
    },
  ];

  const displayTestimonials =
    testimonials.length > 0 ? testimonials : defaultTestimonials;

  if (loading) {
    return null; // Or a skeleton loader
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Loved by Creators Worldwide
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            See what our users have to say about transforming their Instagram
            engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-blue-200 dark:text-blue-900 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-sm text-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || undefined} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                      {testimonial.company && ` at ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
