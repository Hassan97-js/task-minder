import Link from "next/link";
import LogoSVG from "./logo-svg";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <LogoSVG />
      <span className="font-bold text-sm">TaskMinder.</span>
    </Link>
  );
}

export default Logo;
