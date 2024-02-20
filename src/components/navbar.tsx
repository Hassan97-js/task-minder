import SignInButton from "./signin-button";
import SearchBar from "./search-bar";
import User from "./user";
import { getUser } from "@/utils";

async function Navbar() {
  const user = await getUser();

  return (
    <nav className="sticky top-0 left-0 flex justify-between items-center w-full p-5 col-start-2 col-end-9 row-start-1 row-end-2 border-b border-b-gray-900 border-l border-l-gray-900">
      <div className="container flex justify-between items-center gap-6">
        <SearchBar />
        {user && <User user={user} />}
        {user && <SignInButton user={user} />}
      </div>
    </nav>
  );
}

export default Navbar;
