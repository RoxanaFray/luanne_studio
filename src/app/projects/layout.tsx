"use client";
import type { Metadata } from "next";
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
        {children}
        <TranslateButtons />
        <NavBar></NavBar>
      </body>
    </html>
  );
}
