"use server";

import { db } from "@/lib/db";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const subscribeToNewsletter = async (email: string) => {
  try {
    const validated = newsletterSchema.parse({ email });

    // Check if already subscribed
    const existing = await db.newsletter.findUnique({
      where: { email: validated.email },
    });

    if (existing) {
      if (existing.isActive) {
        return { status: 400, message: "Email already subscribed" };
      }

      // Reactivate subscription
      await db.newsletter.update({
        where: { email: validated.email },
        data: { isActive: true, subscribedAt: new Date() },
      });
      return { status: 200, message: "Subscription reactivated successfully!" };
    }

    await db.newsletter.create({
      data: { email: validated.email },
    });

    return { status: 200, message: "Successfully subscribed to newsletter!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { status: 400, message: error.errors[0].message };
    }
    console.error("Newsletter subscription error:", error);
    return { status: 500, message: "Failed to subscribe. Please try again." };
  }
};

export const unsubscribeFromNewsletter = async (email: string) => {
  try {
    await db.newsletter.update({
      where: { email },
      data: { isActive: false },
    });
    return { status: 200, message: "Successfully unsubscribed" };
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return { status: 500, message: "Failed to unsubscribe" };
  }
};

export const getNewsletterCount = async () => {
  try {
    const count = await db.newsletter.count({
      where: { isActive: true },
    });
    return { status: 200, data: count };
  } catch (error) {
    return { status: 500, data: 0 };
  }
};
