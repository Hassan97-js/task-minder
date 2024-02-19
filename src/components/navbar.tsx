import SignInButton from "./signin-button";
import SearchBar from "./search-bar";
import User from "./user";

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 flex justify-between items-center w-full p-5 col-start-2 col-end-9 row-start-1 row-end-2 border-b border-b-gray-900 border-l border-l-gray-900">
      <div className="container flex justify-between items-center gap-6">
        <SearchBar />
        <User />
        <SignInButton />
      </div>
    </nav>
  );
}

export default Navbar;
