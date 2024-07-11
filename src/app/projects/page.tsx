"use client";
import {useTranslation} from "react-i18next";
import MobileNavBar from "@/app/projects/sections/mobileNavbar";
import MobileHeader from "@/app/projects/ui-components/mobileHeader";

export default function Page() {
    const {t} = useTranslation();
    return (
        <main className="flex flex-col justify-center items-center">
            <div
                className="hidden xl:flex flex-col justify-center items-center h-screen w-full font-MPlusBold text-grey uppercase text-6xl tracking-wider leading-normal text-center antialiased">
                <p>{t("pick something")}</p>
                <p>{t("from the list")}</p>
            </div>
            <MobileHeader/>
            <MobileNavBar/>
        </main>
    );
}
