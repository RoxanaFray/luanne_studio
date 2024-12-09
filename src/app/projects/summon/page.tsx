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

    const playLinks = [
        {
            linkTitle: "Itch.io",
            link: "https://gastar.itch.io/nights-at-cozy-shack"
        },
    ]

  return (
      <main className="">
        <GameInfo
            title={t("titles.summon")}
            subtitle=""
            description={t("descriptions.summon")}
            image="/images/B4.jpg"
            playOpportunity={true}
            githubLink="https://github.com/"
            playLink={playLinks}
            gameImages={imagesList}
        />
      </main>
  );
}
