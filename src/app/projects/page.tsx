"use client";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t }: any = useTranslation();
  return (
    <main className="basis-4/5 flex flex-wrap justify-center content-center ">
      <div className="font-MPlusBold text-grey uppercase text-6xl tracking-wider leading-normal text-center antialiased">
        <p>{t("pick something")}</p>
        <p>{t("from the list")}</p>
      </div>
    </main>
  );
}
