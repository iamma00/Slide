"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const submitContactForm = async (data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  try {
    const validated = contactSchema.parse(data);

    const contact = await db.contactForm.create({
      data: validated,
    });

    return {
      status: 200,
      message: "Message sent successfully! We'll get back to you soon.",
      data: contact,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { status: 400, message: error.errors[0].message };
    }
    console.error("Contact form error:", error);
    return {
      status: 500,
      message: "Failed to send message. Please try again.",
    };
  }
};

export const getContactMessages = async (status?: string) => {
  try {
    const messages = await db.contactForm.findMany({
      where: status ? { status: status as any } : undefined,
      orderBy: { createdAt: "desc" },
    });
    return { status: 200, data: messages };
  } catch (error) {
    return { status: 500, data: [] };
  }
};

export const updateContactStatus = async (id: string, status: string) => {
  try {
    const contact = await db.contactForm.update({
      where: { id },
      data: {
        status: status as any,
        repliedAt: status === "REPLIED" ? new Date() : undefined,
      },
    });
    revalidatePath("/dashboard/contacts");
    return { status: 200, data: contact };
  } catch (error) {
    return { status: 500, message: "Failed to update status" };
  }
};
