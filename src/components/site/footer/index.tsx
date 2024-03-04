"use client";

import { GithubIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="p-4 flex items-center justify-between w-full">
      <Link
        href={"https://github.com/BikramjeetSarmah03/SiteSculptor"}
        target="_blank">
        <GithubIcon />
      </Link>

      <aside className="flex items-center gap-2 h-full">
        <Link href={"/"}>
          <Image
            src={
              theme === "dark" ? "/assets/logo-dark.png" : "/assets/logo.png"
            }
            alt="logo"
            width={40}
            height={40}
          />
        </Link>

        <span className="text-xl font-bold hidden md:block">Site Builder</span>
      </aside>
    </footer>
  );
}
