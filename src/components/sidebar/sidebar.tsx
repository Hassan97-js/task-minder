import Logo from "../navbar/logo";
import SignOutButton from "../auth/signout-button";
import SidebarNav from "./sidebar-nav";

import { getUser } from "@/utils";

async function Sidebar() {
  const user = await getUser();

  return (
    <aside className="fixed top-0 left-0 h-full p-5 lg:col-start-1 lg:col-end-2 row-start-1 row-end-9 hidden xl:flex xl:flex-col">
      <Logo />
      <SidebarNav />
      {user && <SignOutButton />}
    </aside>
  );
}

export default Sidebar;
