"use client";
import { useTranslation } from "react-i18next";
import { GameInfo } from "../sections/gameInfo";
import useLocalStorage from "@/app/utils/useLocalStorage";

export default function Page() {
  const { t } = useTranslation();
  const lan = localStorage.getItem("language");
    const imagesList = [
        "/images/stonx/stonx-1.png",
        "/images/stonx/stonx-2.png",
        "/images/stonx/stonx-3.png",
        "/images/stonx/stonx-4.png",
    ];

    const playLinks = [
        {
            linkTitle: "Itch.io",
            link: "https://gastar.itch.io/stonx"
        }
    ]

  return (
      <main className="">
        <GameInfo
            title={t("titles.stonx")}
            subtitle=""
            description={t("descriptions.stonx")}
            image="/images/stonx/stonx.png"
            playOpportunity={true}
            githubLink="https://github.com/aokroian/ludum-dare-49"
            playLink={playLinks}
            gameImages={imagesList}
        />
      </main>
  );
}
