"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getTestimonials = async () => {
  try {
    const testimonials = await db.testimonial.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
    });
    return { status: 200, data: testimonials };
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return { status: 500, data: [] };
  }
};

export const createTestimonial = async (data: {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
  sortOrder?: number;
}) => {
  try {
    const testimonial = await db.testimonial.create({
      data: {
        ...data,
        rating: data.rating || 5,
        sortOrder: data.sortOrder || 0,
      },
    });
    revalidatePath("/");
    return { status: 200, data: testimonial };
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return { status: 500, message: "Failed to create testimonial" };
  }
};

export const updateTestimonial = async (
  id: string,
  data: Partial<{
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
    rating: number;
    isActive: boolean;
    sortOrder: number;
  }>
) => {
  try {
    const testimonial = await db.testimonial.update({
      where: { id },
      data,
    });
    revalidatePath("/");
    return { status: 200, data: testimonial };
  } catch (error) {
    return { status: 500, message: "Failed to update testimonial" };
  }
};

export const deleteTestimonial = async (id: string) => {
  try {
    await db.testimonial.delete({
      where: { id },
    });
    revalidatePath("/");
    return { status: 200, message: "Testimonial deleted" };
  } catch (error) {
    return { status: 500, message: "Failed to delete testimonial" };
  }
};
