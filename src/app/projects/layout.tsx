"use client";
import { ScrollShadow } from "@nextui-org/react";
import "../globals.css";
import TranslateButtons from "../ui-components/translateButtons";
import Navbar from "./sections/navbar";
import { useEffect } from 'react';
import screenWidth from "../utils/screenWidth";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const widthOfScreen= screenWidth();

  useEffect(() =>
  {
      if (widthOfScreen > 1280) {
          document.body.classList.add("overflow-hidden");
      }
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
      <main className="overflow-hidden">
        <div className="hidden xl:block absolute w-16 h-12 top-4 right-0">
          <TranslateButtons />
        </div>
        <div className="hidden xl:flex flex-row ">
          <Navbar />
          <div className="basis-4/5">
            <ScrollShadow className="w-full h-screen">{children}</ScrollShadow>
          </div>
        </div>
          <div className="block w-full basis-full xl:hidden">{children}</div>
    </main>
  );
}
