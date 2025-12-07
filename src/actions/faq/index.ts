"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getFAQs = async (category?: string) => {
  try {
    const faqs = await db.fAQ.findMany({
      where: {
        isActive: true,
        ...(category ? { category } : {}),
      },
      orderBy: { sortOrder: "asc" },
    });
    return { status: 200, data: faqs };
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return { status: 500, data: [] };
  }
};

export const createFAQ = async (data: {
  question: string;
  answer: string;
  category?: string;
  sortOrder?: number;
}) => {
  try {
    const faq = await db.fAQ.create({
      data: {
        ...data,
        sortOrder: data.sortOrder || 0,
      },
    });
    revalidatePath("/");
    return { status: 200, data: faq };
  } catch (error) {
    console.error("Error creating FAQ:", error);
    return { status: 500, message: "Failed to create FAQ" };
  }
};

export const updateFAQ = async (
  id: string,
  data: Partial<{
    question: string;
    answer: string;
    category: string;
    isActive: boolean;
    sortOrder: number;
  }>
) => {
  try {
    const faq = await db.fAQ.update({
      where: { id },
      data,
    });
    revalidatePath("/");
    return { status: 200, data: faq };
  } catch (error) {
    return { status: 500, message: "Failed to update FAQ" };
  }
};

export const deleteFAQ = async (id: string) => {
  try {
    await db.fAQ.delete({
      where: { id },
    });
    revalidatePath("/");
    return { status: 200, message: "FAQ deleted" };
  } catch (error) {
    return { status: 500, message: "Failed to delete FAQ" };
  }
};
