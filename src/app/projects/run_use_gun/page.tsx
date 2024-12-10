"use client";
import {GameInfo} from "../sections/gameInfo";
import {useTranslation} from "react-i18next";

export default function Page() {
    const {t} = useTranslation();
    const imagesList = [
        "/images/run_use_gun/rug-1.png",
        "/images/run_use_gun/rug-2.png",
        "/images/run_use_gun/rug-3.png",
        "/images/run_use_gun/rug-4.png",
    ];

    const playLinks = [
        {
            linkTitle: "в App Store",
            link: "https://apps.apple.com/kz/app/run-use-gun/id1585550795"
        },
    ]

    return (
        <main className="">
            <GameInfo
                title={t("titles.run_use_gun")}
                subtitle=""
                description={t("descriptions.run_use_gun")}
                image="/images/B4.jpg"
                playOpportunity={true}
                githubLink="https://github.com/"
                playLink={playLinks}
                gameImages={imagesList}
            />
        </main>
    );
}
