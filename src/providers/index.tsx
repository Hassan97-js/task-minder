"use client";

import { type ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";

type TProps = {
  children: ReactNode;
};

function Providers({ children }: TProps) {
  return (
    <SessionProvider>
      <Toaster richColors />
      {children}
    </SessionProvider>
  );
}

export default Providers;
