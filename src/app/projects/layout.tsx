"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import TranslateButtons from "../ui-components/translateButtons";
import Navbar from "./sections/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute w-16 h-12 top-4 right-0">
          <TranslateButtons />
        </div>
        <div className="flex flex-row">
          <Navbar />
          <div className="basis-4/5 flex flex-col justify-center items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
