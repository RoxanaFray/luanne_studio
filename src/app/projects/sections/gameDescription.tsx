"use client";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import PickSomethingNoticement from "../ui-components/pickSomethingNoticement";

export default function GameDescription() {
  const { t }: any = useTranslation();

  return (
    <main className="basis-4/5 flex flex-wrap justify-center content-center">
      <PickSomethingNoticement />
    </main>
  );
}
