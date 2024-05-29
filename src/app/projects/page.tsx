"use client";
import { useTranslation } from "react-i18next";
import TranslateButtons from "../ui-components/translateButtons";

export default function Page() {
  const { t }: any = useTranslation();
  return (
    <main className="basis-4/5 flex flex-wrap justify-center content-center">
      <div className="absolute w-16 h-12 top-4 right-0">
        <TranslateButtons />
      </div>
      <div className="font-MPlusBold text-grey uppercase text-6xl tracking-wider leading-normal text-center antialiased">
        <p>{t("pick something")}</p>
        <p>{t("from the list")}</p>
      </div>
    </main>
  );
}
