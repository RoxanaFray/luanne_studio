"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "./ui-components/navbar";
import TranslateButtons from "../ui-components/translateButtons";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute w-16 h-12 top-3 right-3">
          <TranslateButtons top={0} right={0} />
        </div>

        <div className="flex flex-row">
          <NavBar></NavBar>
          {children}
        </div>
      </body>
    </html>
  );
}
