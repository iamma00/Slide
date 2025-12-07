"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getPricingPlans = async () => {
  try {
    const plans = await db.pricingPlan.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
    });
    return { status: 200, data: plans };
  } catch (error) {
    console.error("Error fetching pricing plans:", error);
    return { status: 500, data: [] };
  }
};

export const createPricingPlan = async (data: {
  name: string;
  displayName: string;
  description?: string;
  price: number;
  interval?: string;
  features: string[];
  isPopular?: boolean;
  sortOrder?: number;
  stripePriceId?: string;
}) => {
  try {
    const plan = await db.pricingPlan.create({
      data: {
        ...data,
        interval: data.interval || "month",
        isPopular: data.isPopular || false,
        sortOrder: data.sortOrder || 0,
      },
    });
    revalidatePath("/");
    return { status: 200, data: plan };
  } catch (error) {
    console.error("Error creating pricing plan:", error);
    return { status: 500, message: "Failed to create pricing plan" };
  }
};

export const updatePricingPlan = async (
  id: string,
  data: Partial<{
    displayName: string;
    description: string;
    price: number;
    features: string[];
    isPopular: boolean;
    isActive: boolean;
    sortOrder: number;
  }>
) => {
  try {
    const plan = await db.pricingPlan.update({
      where: { id },
      data,
    });
    revalidatePath("/");
    return { status: 200, data: plan };
  } catch (error) {
    console.error("Error updating pricing plan:", error);
    return { status: 500, message: "Failed to update pricing plan" };
  }
};
