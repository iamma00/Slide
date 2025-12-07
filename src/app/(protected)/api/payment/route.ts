import { getStripe } from "@/lib/stripe";
import { getBaseUrl } from "@/lib/base-url";
import { NextResponse } from "next/server";

export async function GET() {
  const priceId = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;
  const baseUrl = getBaseUrl();

  const stripe = getStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/payment?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/payment?cancel=true`,
  });

  if (session) {
    return NextResponse.json({
      status: 200,
      session_url: session.url,
    });
  }

  return NextResponse.json({ status: 400 });
}
