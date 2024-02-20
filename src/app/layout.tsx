import type { Metadata } from "next";
import { Poppins as Font } from "next/font/google";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { cn } from "@/utils";

import "@/styles/globals.css";
import Providers from "@/providers";

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
    <Providers>
      <html lang="en">
        <body
          className={cn(
            "grid grid-cols-[0rem_repeat(7,_1fr)] lg:grid-cols-[12.5rem_repeat(7,_1fr)] grid-rows-[6.25rem_repeat(7,_1fr)] dark min-h-screen",
            font.className
          )}>
          <Navbar />
          <Sidebar />
          <main className="col-start-2 col-end-9 row-start-2 row-end-9 p-5 border-l border-l-gray-900">
            {children}
          </main>
        </body>
      </html>
    </Providers>
  );
}

export default RootLayout;
