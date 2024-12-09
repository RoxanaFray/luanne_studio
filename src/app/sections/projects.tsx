import {useTranslation} from "next-i18next";
import {useRouter} from "next/navigation";
import React, {useState, useEffect} from "react";
import {
    Card,
    CardFooter,
    CardBody,
    Image,
    Button,
} from "@nextui-org/react";
import projectsList from "../data/projectsList.json";
import screenWidth from "../utils/screenWidth";
import HoverBlock from "@/app/utils/hoverBlock";

export default function Projects() {
    const {t} = useTranslation();
    const router = useRouter();

    const [maxGamesAmount, setMaxGamesAmount] = useState(4);
    const widthOfScreen = screenWidth();

    useEffect(() => {
        if (widthOfScreen < 640 || (widthOfScreen > 767 && widthOfScreen < 1024)) {
            setMaxGamesAmount(3);
        } else {
            setMaxGamesAmount(4);
        }
    }, [widthOfScreen]);

    return (
        <main className="xl:container xl:mx-auto px-8 xl:px-28 pb-16 xl:pb-32 mt-28 md:mt-32 xl:mt-24 relative">
            <div id="projects" className="absolute -top-44"/>
            <div className="flex flex-col items-center xl:items-start">
                <div className="flex flex-col xl:flex-row justify-between w-full items-center xl:items-center">
                    <h1 className="font-MPlusBold xl:font-MPlusRegular tracking-wide sm:tracking-wide text-black/20 xl:text-black/10 uppercase mb-16 sm:mb-20 md:mb-16 lg:mb-20 xl:mb-24 text-4xl sm:text-6xl lg:text-7xl xl:text-9xl antialiased">
                        {t("projects")}
                    </h1>
                    <Button
                        variant="light"
                        onPress={() => router.push(projectsList[0].link)}
                        size="lg"
                        data-hover="hoverable"
                        className="hidden xl:block font-MPlusRegular text-xl border-2 mb-0 rounded-md tracking-wider px-4"
                    >
                        <HoverBlock/>
                        <span className="text-black/30">{t("view_all")}</span>
                    </Button>
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 md:gap-10 lg:gap-10 xl:gap-10 xl:w-full items-center mx-auto">
                    {projectsList.map((item, index) => (
                        index < maxGamesAmount && <Card
                            key={index}
                            isFooterBlurred
                            shadow="sm"
                            isPressable
                            isHoverable
                            data-hover="hoverable"
                            onPress={() => router.push(item.link)}
                            className="w-72 sm:w-60 md:w-56 lg:w-56 xl:w-64 xl:max-w-80 h-min"
                        >
                            <Image
                                removeWrapper
                                alt={t(item.title)}
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                src={item.img}
                                className="project-card-image w-full object-cover max-h-[280px] sm:max-h-[250px] md:max-h-[220px] lg:max-h-[260px] xl:h-[320px]"
                            />
                            <CardFooter
                                className="absolute bg-black/20 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between"
                            >
                                <h6 className="text-white/90 text-md font-MPlusMedium xl:text-lg">
                                    {t(item.title)}
                                </h6>
                            </CardFooter>
                            <HoverBlock/>
                        </Card>
                    ))}
                </div>
                <Button
                    variant="solid"
                    onPress={() => router.push("projects")}
                    size="lg"
                    data-hovered="hoverable"
                    className="block xl:hidden bg-white text-wrap font-MPlusRegular text-md border-1 drop-shadow-sm mt-12 sm:mt-20 md:mt-16 rounded-md tracking-wider w-72 mx-auto py-4 h-16 px-1"
                >
                    <span className="text-black/30">{t("view_all")}</span>
                </Button>
            </div>
        </main>
    );
}
