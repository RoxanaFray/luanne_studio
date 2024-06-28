import {useTranslation} from "next-i18next";
import {useRouter} from "next/navigation";
import React from "react";
import {
    Card,
    CardFooter,
    CardBody,
    Image,
    Button,
} from "@nextui-org/react";
import projectsList from "../data/gamesArray.json"

export default function Projects() {
    const {t} = useTranslation();
    const maxGamesAmount = 4;
    const router = useRouter();

    return (
        <main className="px-8 sm:px-48 pb-32 mt-12 sm:mt-24 relative">
            <div id="projects" className="absolute -top-44"/>
            <div className="flex flex-col items-start">
                <div className="flex flex-col sm:flex-row justify-between gap-8 w-full items-start sm:items-center">
                    <h1 className="font-MPlusRegular tracking-wide text-black/10 uppercase sm:mb-24 text-5xl sm:text-9xl antialiased">
                        {t("projects")}
                    </h1>
                    <Button
                        variant="light"
                        data-hover="hovered"
                        onPress={() => router.push("projects")}
                        size="lg"
                        className="text-wrap font-MPlusMedium text-sm sm:text-xl border-2 mb-12 sm:mb-0 rounded-md tracking-wider px-1 sm:px-4"
                    >
                        <span className="text-black/30">{t("view_all")}</span>
                    </Button>
                </div>
                <div className="grid grid-cols-4 gap-10 items-center">
                    {projectsList.map((item, index) => (
                        index < maxGamesAmount && <Card
                            key={index}
                            shadow="sm"
                            isPressable
                            onPress={() => router.push(item.link)}
                            className="rounded-md"
                        >
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    alt={t(item.title)}
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    src={item.img}
                                    className="project-card-image w-full rounded-sm object-cover max-h-[260px] "
                                />
                            </CardBody>
                            <CardFooter className="project-card-title justify-between h-12">
                                <h6 className="text-black/80 font-medium text-md">
                                    {t(item.title)}
                                </h6>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
