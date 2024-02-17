import LogoSVG from "./logo-svg";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <LogoSVG />
      <span className="font-bold text-sm">TaskMinder.</span>
    </div>
  );
}

export default Logo;
