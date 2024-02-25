"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";

type TProps = {
  text: string;
  path: string;
  icon: ReactNode;
};

function SidebarNavItem({ path, text, icon }: TProps) {
  const pathname = usePathname();

  const activeVariant = pathname === path ? "default" : "secondary";

  return (
    <Link href={path} className="min-w-14">
      <Button
        variant={activeVariant}
        className="flex items-center gap-[0.375rem] text-sm w-full">
        {icon}
        <span>{text}</span>
      </Button>
    </Link>
  );
}

export default SidebarNavItem;
