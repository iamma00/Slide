import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * POST /api/payment - Manual payment processing
 * TODO: Implement manual payment processing instead of Stripe
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, currency = "usd", cardToken } = body;

    if (!amount || !cardToken) {
      return NextResponse.json(
        { error: "Missing amount or cardToken" },
        { status: 400 }
      );
    }

    // TODO: Process payment manually (e.g., via payment gateway API)
    // For now, just acknowledge receipt
    return NextResponse.json(
      {
        status: 200,
        message: "Payment processing placeholder",
        amount,
        currency,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Payment processing failed" },
      { status: 500 }
    );
  }
}
