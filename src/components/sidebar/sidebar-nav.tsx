import SidebarNavItem from "./sidebar-nav-item";

import { sidebarNavItems } from "@/constants/content";

function SidebarNav() {
  return (
    <nav className="flex flex-col gap-8 mt-20">
      {sidebarNavItems.map((item) => {
        const Icon = item.Icon;

        return (
          <SidebarNavItem
            key={item.id}
            text={item.text}
            path={item.path}
            icon={<Icon className="w-4 h-4" />}
          />
        );
      })}
    </nav>
  );
}

export default SidebarNav;
