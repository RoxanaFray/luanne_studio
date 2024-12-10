"use client";
import {useTranslation} from "react-i18next";
import {GameInfo} from "../sections/gameInfo";

export default function Page() {
    const {t} = useTranslation();
    const imagesList = [
        "/images/summon/summon-1.png",
        "/images/summon/summon-2.png",
        "/images/summon/summon-3.png",
        "/images/summon/summon-4.png",
    ];

    const playLinks = [
        {
            linkTitle: "Itch.io",
            link: "https://gastar.itch.io/command-summon"
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
                githubLink="https://github.com/aokroian/ludum-dare-55"
                playLink={playLinks}
                gameImages={imagesList}
            />
        </main>
    );
}
