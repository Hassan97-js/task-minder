"use client";

import { type ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type TProps = {
  children: ReactNode;
};

function Providers({ children }: TProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Providers;
