"use client";
import {useTranslation} from "react-i18next";
import {GameInfo} from "../sections/gameInfo";

export default function Page() {
    const {t} = useTranslation();
    const imagesList = [
        "/images/minesweeper/ms-1.png",
        "/images/minesweeper/ms-2.png",
        "/images/minesweeper/ms-3.png",
        "/images/minesweeper/ms-4.png",
    ];

    const playLinks = [
        {
            linkTitle: "app_store",
            link: "https://apps.apple.com/kz/app/minesweeper-paws/id6479987396"
        }
    ]

    return (
        <main className="">
            <GameInfo
                title={t("titles.minesweeper") + ":"}
                subtitle={t("subtitles.minesweeper")}
                description={t("descriptions.minesweeper")}
                image="/images/B4.jpg"
                playOpportunity={true}
                githubLink="https://github.com/RoxanaFray/minesweeper-unity"
                playLink={playLinks}
                gameImages={imagesList}
            />
        </main>
    );
}
