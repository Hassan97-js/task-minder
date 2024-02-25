import Image from "next/image";

function LogoSVG() {
  return (
    <Image src="/logo-svg.svg" width={20} height={20} priority alt="Logo" />
  );
}

export default LogoSVG;
