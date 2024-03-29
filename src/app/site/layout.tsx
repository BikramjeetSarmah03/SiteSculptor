import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import Footer from "@/components/site/footer";
import Navigation from "@/components/site/navigation";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="h-full">
        <Navigation />
        {children}
        <Footer />
      </main>
    </ClerkProvider>
  );
}
