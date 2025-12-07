import Stripe from "stripe";

// Lazily create a singleton Stripe client; throws a clear error if the key is missing.
let stripeInstance: Stripe | null = null;

export const getStripe = (): Stripe => {
  if (stripeInstance) return stripeInstance;

  const apiKey = process.env.STRIPE_CLIENT_SECRET || "sk_test_placeholder";
  stripeInstance = new Stripe(apiKey, { apiVersion: "2024-12-18.acacia" });
  return stripeInstance;
};
