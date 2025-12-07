import React from "react";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const AuthState = (props: Props) => {
  return (
    <>
      <Link href="/dashboard">
        <Button className="rounded-xl bg-[#252525] text-white hover:bg-[#252525]/70">
          <User />
          Dashboard
        </Button>
      </Link>
    </>
  );
};

export default AuthState;
