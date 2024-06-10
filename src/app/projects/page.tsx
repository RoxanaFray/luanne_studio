"use client";
import { useTranslation } from "react-i18next";
import EmptyGameSide from "./sections/emptyGameSide";

export default function Page() {
  const { t }: any = useTranslation();
  return (
    <main className="flex flex-col justify-center items-center">
      <EmptyGameSide />
    </main>
  );
}
