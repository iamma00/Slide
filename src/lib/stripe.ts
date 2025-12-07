import Stripe from "stripe";

// Lazily create a singleton Stripe client; throws a clear error if the key is missing.
let stripeInstance: Stripe | null = null;

export const getStripe = (): Stripe => {
  if (stripeInstance) return stripeInstance;

  const apiKey = process.env.STRIPE_CLIENT_SECRET;
  if (!apiKey) {
    throw new Error(
      "STRIPE_CLIENT_SECRET is not set. Add it to your env (Vercel → Environment Variables)."
    );
  }

  stripeInstance = new Stripe(apiKey, { apiVersion: "2024-06-20" });
  return stripeInstance;
};
