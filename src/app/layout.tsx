import type { Metadata } from "next";
import { Poppins as Font } from "next/font/google";

import { cn } from "@/utils";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

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

function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "grid grid-cols-[9.375rem_repeat(7,_1fr)] lg:grid-cols-[23.125rem_repeat(7,_1fr)] grid-rows-[12.5_repeat(7,_1fr)] dark min-h-screen",
          font.className
        )}>
        <Navbar />
        <Sidebar />
        <main className="col-start-2 col-end-9 row-start-2 row-end-9 p-5">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
