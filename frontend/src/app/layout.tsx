import { MinimPanels } from '@/components/ui/MinimPanels';
import { ConfigProvider } from '@/providers/cloudServices/config';
import { NextUIProvider } from "@/providers/nextui";
import { RuntimeProvider } from "@/providers/runtime";

import type { Metadata } from "next";

import { Quicksand } from "next/font/google";
import "./globals.css";

const qs = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minimbus",
  description: "Manage cloud with minimal effort",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={qs.className}>
        <div className="w-screen h-screen overflow-hidden">
          <RuntimeProvider>
            <NextUIProvider>
              <ConfigProvider>
                <MinimPanels>
                  {children}
                </MinimPanels>
              </ConfigProvider>
            </NextUIProvider>
          </RuntimeProvider>
        </div>
      </body>
    </html>
  );
}
