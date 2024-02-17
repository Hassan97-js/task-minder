import Link from "next/link";

type TProps = {
  text: string;
  path: string;
};

function SidebarNavItem({ path, text }: TProps) {
  return <Link href={path}>{text}</Link>;
}

export default SidebarNavItem;
