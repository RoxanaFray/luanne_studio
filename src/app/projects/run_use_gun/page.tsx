"use client";
import { GameInfo } from "../ui-components/gameInfo";
import { useTranslation } from "react-i18next";

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
    "/images/toy.jpeg",
  ];

  return (
    <main className="">
      <GameInfo
        title={t("game-2 title")}
        subtitle=""
        description={t("game-2 description")}
        image="/images/B4.jpg"
        playOpportunity={true}
        githubLink="test"
        playLink=""
        gameImages={imagesList}
      />
    </main>
  );
}
