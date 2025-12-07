import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
        <p className="text-gray-600 mb-6">Manual authentication coming soon</p>

        <Button className="w-full mb-4" asChild>
          <Link href="/dashboard">Continue to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
