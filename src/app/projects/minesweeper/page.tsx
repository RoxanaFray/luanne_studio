"use client";
import { useTranslation } from "react-i18next";
import { GameInfo } from "../ui-components/gameInfo";

export default function Page() {
  const { t }: any = useTranslation();
  const imagesList = [
    "/images/B1.jpg",
    "/images/B2.jpg",
    "/images/B3.jpg",
    "/images/B4.jpg",
    "/images/B5.jpg",
    "/images/fishes.png",
    "/images/summon.png",
  ];

  return (
    <main className="">
      <GameInfo
        title={t("game-1 title")}
        subtitle="Frenchie Edition"
        description={t("game-1 description")}
        image="/images/B4.jpg"
        playOpportunity={true}
        githubLink="/"
        playLink=""
        gameImages={imagesList}
      />
    </main>
  );
}
