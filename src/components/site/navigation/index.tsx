"use client";

import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/global/mode-toggle";

type Props = {
  user?: null | User;
};

export default function Navigation({}: Props) {
  const { theme } = useTheme();

  return (
    <header className="p-4 flex items-center justify-between relative z-10">
      <aside className="flex items-center gap-2 h-full w-full">
        <Image
          src={theme === "dark" ? "/assets/logo-dark.png" : "/assets/logo.png"}
          alt="logo"
          width={40}
          height={40}
        />

        <span className="text-xl font-bold hidden md:block">Site Builder</span>
      </aside>

      <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#pricing"}>Pricing</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>

      <aside className="flex gap-2 items-center">
        <Link
          href={"/agency"}
          className=" bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 transition-all duration-300">
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </header>
  );
}
