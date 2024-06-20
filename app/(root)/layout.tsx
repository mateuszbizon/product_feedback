import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const jost = Jost({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${jost.className} bg-light-3`}>
          <div className="main-container">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
