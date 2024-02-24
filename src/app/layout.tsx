import type { Metadata } from "next";
import { Poppins as Font } from "next/font/google";

import Providers from "@/providers";

import { cn } from "@/utils";

import "@/styles/globals.css";

const font = Font({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "TaskMinder",
  description: "This the TaskMinder description"
};

type TProps = Readonly<{
  children: React.ReactNode;
}>;

async function RootLayout({ children }: TProps) {
  return (
    <Providers>
      <html lang="en">
        <body className={cn("dark min-h-screen", font.className)}>
          {children}
        </body>
      </html>
    </Providers>
  );
}

export default RootLayout;
