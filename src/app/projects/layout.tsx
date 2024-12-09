"use client";
import {ScrollShadow} from "@nextui-org/react";
import "../globals.css";
import TranslateButtons from "../ui-components/translateButtons";
import Navbar from "./sections/navbar";
import {useEffect} from 'react';
import screenWidth from "../utils/screenWidth";
import MobileHeader from "@/app/projects/ui-components/mobileHeader";

export default function ProjectsLayout({
                                           children,
                                       }: Readonly<{
    children: React.ReactNode;
}>) {
    const widthOfScreen = screenWidth();

    useEffect(() => {
        if (widthOfScreen > 1280) {
            document.body.classList.add("xl:overflow-hidden");
        }
        return () => document.body.classList.remove("xl:overflow-hidden");
    }, [widthOfScreen]);

    return (
        <main className="xl:overflow-hidden">
            <div className="hidden xl:block absolute w-16 h-12 top-4 right-0 z-40">
                <TranslateButtons/>
            </div>
            <div className="hidden xl:flex flex-row ">
                <Navbar/>
                <ScrollShadow className="h-screen basis-4/5">{children}</ScrollShadow>
            </div>
            <div className="block w-full basis-full xl:hidden">
                <MobileHeader/>
                {children}
            </div>
        </main>
    );
}
