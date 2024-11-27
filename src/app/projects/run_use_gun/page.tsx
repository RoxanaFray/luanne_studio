"use client";
import { GameInfo } from "../sections/gameInfo";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();
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
        title={t("titles.run_use_gun")}
        subtitle=""
        description={t("descriptions.run_use_gun")}
        image="/images/B4.jpg"
        playOpportunity={false}
        githubLink="https://github.com/"
        playLink=""
        gameImages={imagesList}
      />
    </main>
  );
}
