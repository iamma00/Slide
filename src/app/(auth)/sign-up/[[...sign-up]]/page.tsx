import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

const SignUpPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h1>
        <p className="text-gray-600 mb-6">Manual registration coming soon</p>

        <Button className="w-full mb-4" asChild>
          <Link href="/dashboard">Continue to Dashboard</Link>
        </Button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
