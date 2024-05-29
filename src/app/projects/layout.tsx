"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "./ui-components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <NavBar></NavBar>
          {children}
        </div>
      </body>
    </html>
  );
}
