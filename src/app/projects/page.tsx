"use client";
import { useTranslation } from "react-i18next";
import GameDescription from "./sections/gameDescription";
import Navbar from "./sections/navbar";
import TranslateButtons from "../ui-components/translateButtons";

export default function Page() {
  const { t }: any = useTranslation();
  return (
    <main className="flex flex-row">
      <div className="absolute w-16 h-12 top-4 right-0">
        <TranslateButtons />
      </div>
      <Navbar />
      <GameDescription />
    </main>
  );
}
