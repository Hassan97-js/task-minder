import Link from "next/link";
import SignInButton from "../auth/signin-button";
import SearchBar from "../sidebar/search-bar";
import User from "./user";

import { getUser } from "@/utils";

async function Navbar() {
  const user = await getUser();

  return (
    <nav className="sticky top-0 left-0 flex justify-between items-center w-full p-5 col-start-2 col-end-9 row-start-1 row-end-2 border-b border-b-muted border-l border-l-muted backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="container flex justify-between items-center gap-6">
        <SearchBar />
        {user && <User user={user} />}

        {!user && (
          <div className="flex items-center gap-3">
            <Link href="/auth/signin" className="ml-4">
              <SignInButton providerId="credentials" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
