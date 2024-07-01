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
        <main className="px-8 sm:px-48 pb-16 sm:pb-32 mt-16 sm:mt-24 relative">
            <div id="projects" className="absolute -top-44"/>
            <div className="flex flex-col items-center sm:items-start">
                <div className="flex flex-col sm:flex-row justify-between gap-8 w-full items-center sm:items-center">
                    <h1 className="font-MPlusRegular tracking-wide text-black/10 uppercase mb-16 sm:mb-24 text-5xl sm:text-9xl antialiased">
                        {t("projects")}
                    </h1>
                    <Button
                        variant="light"
                        data-hover="hovered"
                        onPress={() => router.push("projects")}
                        size="lg"
                        className="hidden sm:block font-MPlusMedium text-xl border-2 mb-0 rounded-md tracking-wider px-4"
                    >
                        <span className="text-black/30">{t("view_all")}</span>
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-14 sm:gap-10 items-center mx-auto">
                    {projectsList.map((item, index) => (
                        index < maxGamesAmount && <Card
                            key={index}
                            shadow="sm"
                            isPressable
                            onPress={() => router.push(item.link)}
                            className="rounded-md w-80 sm:w-full h-96 sm:h-auto"
                        >
                            <CardBody className="overflow-visible p-0 h-96 sm:h-auto">
                                <Image
                                    alt={t(item.title)}
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    src={item.img}
                                    className="project-card-image w-full rounded-sm object-cover sm:max-h-[260px] "
                                />
                            </CardBody>
                            <CardFooter className="project-card-title justify-between h-12">
                                <h6 className="text-black/70 font-medium text-md">
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
                    className="block sm:hidden bg-white text-wrap font-MPlusMedium text-md border-1 drop-shadow-sm mt-16 rounded-md tracking-wider w-80 mx-auto py-4 h-16 px-1"
                >
                    <span className="text-black/30">{t("view_all")}</span>
                </Button>
            </div>
        </main>
    );
}
