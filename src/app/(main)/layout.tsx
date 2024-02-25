import { type ReactNode } from "react";

import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";

type TProps = {
  children: ReactNode;
};

function AppLayout({ children }: TProps) {
  return (
    <div className="grid grid-cols-[0rem_repeat(7,_1fr)] lg:grid-cols-[12.5rem_repeat(7,_1fr)] grid-rows-[6.25rem_repeat(7,_1fr)] min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="col-start-2 col-end-9 row-start-2 row-end-9 p-5 border-l border-muted">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;
