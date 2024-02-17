import Logo from "./logo";
import LogOutButton from "./logout-button";
import SidebarNav from "./sidebar-nav";

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full p-5 lg:col-start-1 lg:col-end-2 row-start-1 row-end-9 flex flex-col">
      <Logo />
      <SidebarNav />
      <LogOutButton />
    </aside>
  );
}

export default Sidebar;
