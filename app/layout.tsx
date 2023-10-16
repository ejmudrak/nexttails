import "./globals.css";
import classNames from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import { Suspense } from "react";

export const metadata = {
  title: "NextTails",
  description: "A Next.js cocktail recipe library",
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />

        <Suspense fallback="...">
          <Nav />
        </Suspense>

        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
      </body>
    </html>
  );
}
