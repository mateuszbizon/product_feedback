import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TanstackProvider from "@/components/TanstackProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductFiltersProvider } from "@/context/ProductFiltersContext";

const jost = Jost({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Product Feedback App",
  description: "App for handling feedbacks for products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductFiltersProvider>
      <TanstackProvider>
        <ClerkProvider>
          <html lang="en">
            <body className={`${jost.className} bg-light-3`}>
              <ToastContainer position="top-center" autoClose={3000} />
              <main>
                {children}
              </main>
            </body>
          </html>
        </ClerkProvider>
      </TanstackProvider>
    </ProductFiltersProvider>
  );
}
