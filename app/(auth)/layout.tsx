import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const jost = Jost({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Product Feedback Authentication",
  description: "Product feedback sign-in and sign-up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={jost.className}>
          <div className="container-1 flex justify-center padding-top padding-bottom">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
