// scenario 1 -> repeated user
// redirect to respective dashboard
// redirect -> /dashboard/varunvarshney

// scenario 2 -> new user
// redirect -> sign in

import React from "react";

export const dynamic = "force-dynamic";

const Page = async () => {
  // TODO: Replace with manual user check (no Clerk)
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-5xl font-bold">Dashboard</h1>
      <p className="text-xl mt-4">Coming soon - manual auth integration</p>
    </div>
  );
};

export default Page;
