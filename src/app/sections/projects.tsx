import {useTranslation} from "next-i18next";
import {useRouter} from "next/navigation";
import React, { useState, useEffect } from "react";
import {
    Card,
    CardFooter,
    CardBody,
    Image,
    Button,
} from "@nextui-org/react";
import projectsList from "../data/gamesArray.json";
import screenWidth from "../utils/screenWidth";

export default function Projects() {
    const {t} = useTranslation();
    const router = useRouter();

    const [maxGamesAmount, setMaxGamesAmount] = useState(4);
    const widthOfScreen= screenWidth();

    useEffect(() => {
        setMaxGamesAmount(widthOfScreen < 640 ? 3 : 4)
    }, [widthOfScreen]);

    return (
        <main className="px-8 xl:px-48 pb-16 xl:pb-32 mt-28 xl:mt-24 relative">
            <div id="projects" className="absolute -top-44"/>
            <div className="flex flex-col items-center xl:items-start">
                <div className="flex flex-col xl:flex-row justify-between w-full items-center xl:items-center">
                    <h1 className="font-MPlusRegular tracking-normal xl:tracking-wide text-black/60 xl:text-black/10 uppercase mb-16 xl:mb-24 text-4xl xl:text-9xl antialiased">
                        {t("projects")}
                    </h1>
                    <Button
                        variant="light"
                        data-hover="hovered"
                        onPress={() => router.push("projects")}
                        size="lg"
                        className="hidden xl:block font-MPlusRegular text-xl border-2 mb-0 rounded-md tracking-wider px-4"
                    >
                        <span className="text-black/30">{t("view_all")}</span>
                    </Button>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-14 xl:gap-10 items-center mx-auto">
                    {projectsList.map((item, index) => (
                        index < maxGamesAmount && <Card
                            key={index}
                            shadow="sm"
                            isPressable
                            onPress={() => router.push(item.link)}
                            className="rounded-md w-72 xl:w-full h-80 xl:h-auto"
                        >
                            <CardBody className="overflow-visible p-0 h-64 xl:h-auto">
                                <Image
                                    alt={t(item.title)}
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    src={item.img}
                                    className="project-card-image w-full rounded-sm object-cover max-h-[280px] xl:max-h-[260px] "
                                />
                            </CardBody>
                            <CardFooter className="project-card-title justify-between h-10">
                                <h6 className="text-black/70 font-medium text-md font-MPlusRegular">
                                    {t(item.title)}
                                </h6>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <Button
                    variant="solid"
                    data-hover="hovered"
                    onPress={() => router.push("projects")}
                    size="lg"
                    className="block xl:hidden bg-white text-wrap font-MPlusRegular text-md border-1 drop-shadow-sm mt-12 rounded-md tracking-wider w-72 mx-auto py-4 h-16 px-1"
                >
                    <span className="text-black/30">{t("view_all")}</span>
                </Button>
            </div>
        </main>
    );
}
