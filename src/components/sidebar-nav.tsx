import SidebarNavItem from "./sidebar-nav-item";

import { sidebarNavItems } from "@/constants/content";

function SidebarNav() {
  return (
    <nav className="flex flex-col gap-8 mt-20">
      {sidebarNavItems.map((item) => (
        <SidebarNavItem key={item.id} text={item.text} path={item.path} />
      ))}
    </nav>
  );
}

export default SidebarNav;
