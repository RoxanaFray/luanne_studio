"use client";
import {useTranslation} from "react-i18next";

export default function Page() {
    const {t} = useTranslation();
    return (
        <main className="flex flex-col justify-center items-center">
            <div
                className="flex flex-col justify-center items-center h-screen w-full font-MPlusBold text-grey uppercase text-6xl tracking-wider leading-normal text-center antialiased">
                <p>{t("pick something")}</p>
                <p>{t("from the list")}</p>
            </div>
        </main>
    );
}
