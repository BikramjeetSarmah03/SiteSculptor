import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "@/app/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Site Sculptor",
  description:
    "An Online Website Builder made using Nextjs, Stripe by Bikramjeet Sarmah",
  authors: {
    name: "Bikramjeet Sarmah",
    url: "https://github.com/BikramjeetSarmah03/",
  },
  creator: "Bikramjeet Sarmah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <body className={font.className}>{children}</body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
