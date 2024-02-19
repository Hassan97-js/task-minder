import Logo from "./logo";
import SignOutButton from "./signout-button";
import SidebarNav from "./sidebar-nav";

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full p-5 lg:col-start-1 lg:col-end-2 row-start-1 row-end-9 hidden lg:flex lg:flex-col">
      <Logo />
      <SidebarNav />
      <SignOutButton />
    </aside>
  );
}

export default Sidebar;
