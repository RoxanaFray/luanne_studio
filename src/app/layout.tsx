import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import TranslateButtons from "./ui-components/translateButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luanne Studio",
  description: "Best game development team ever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        {children}
        <TranslateButtons isHidden={true} />
      </body>
    </html>
  );
}
