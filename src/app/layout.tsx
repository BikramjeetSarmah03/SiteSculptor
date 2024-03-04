import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "@/app/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const font = DM_Sans({ subsets: ["latin"] });

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
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <body className={font.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
