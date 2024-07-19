"use client";
import { useTranslation } from "react-i18next";
import { GameInfo } from "../sections/gameInfo";

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
  ];

  return (
    <main className="">
      <GameInfo
        title={t("titles.game_1") + ":"}
        subtitle={t("subtitles.game_1")}
        description={t("descriptions.game_1")}
        image="/images/B4.jpg"
        playOpportunity={true}
        githubLink="https://github.com/"
        playLink="https://github.com/"
        gameImages={imagesList}
      />
    </main>
  );
}
