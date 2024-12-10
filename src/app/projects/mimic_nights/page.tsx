"use client";
import { useTranslation } from "react-i18next";
import { GameInfo } from "../sections/gameInfo";
import useLocalStorage from "@/app/utils/useLocalStorage";

export default function Page() {
  const { t } = useTranslation();
  const lan = localStorage.getItem("language");
  const enImagesList = [
    "/images/mimic_nights/eng/1.png",
      "/images/mimic_nights/eng/2.png",
      "/images/mimic_nights/eng/3.png",
      "/images/mimic_nights/eng/4.png",
      "/images/mimic_nights/eng/5.png"
  ];
    const ruImagesList = [
        "/images/mimic_nights/rus/1.png",
        "/images/mimic_nights/rus/2.png",
        "/images/mimic_nights/rus/3.png",
        "/images/mimic_nights/rus/4.png",
        "/images/mimic_nights/rus/5.png",
        "/images/mimic_nights/rus/6.png"
    ];

    const playLinks = [
        {
            linkTitle: "itch_io",
            link: "https://gastar.itch.io/nights-at-cozy-shack"
        },
        {
            linkTitle: "app_store",
            link: "https://apps.apple.com/kz/app/mimic-nights/id6738483986"
        }
    ]

  return (
      <main className="">
        <GameInfo
            title={t("titles.mimic_nights")}
            subtitle=""
            description={t("descriptions.mimic_nights")}
            image="/images/B4.jpg"
            playOpportunity={true}
            githubLink="https://github.com/aokroian/ludum-dare-56"
            playLink={playLinks}
            gameImages={lan === '"ru"' ? ruImagesList : enImagesList}
        />
      </main>
  );
}
