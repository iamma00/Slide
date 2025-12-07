import React from "react";

export const dynamic = "force-dynamic";

export default function PaymentPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment</h1>
        <p className="text-gray-600 mb-6">Manual payment form coming soon</p>

        {/* Placeholder for manual payment cards/forms */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-sm">
            Payment integration placeholder - will accept manual card details or
            other payment methods
          </p>
        </div>
      </div>
    </div>
  );
}
