"use client";
import {useTranslation} from "react-i18next";
import {Button} from "@nextui-org/react";
import ImagesCarousel from "../ui-components/imagesCarousel";
import React, {useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import projectsList from "../../data/projectsList.json"
import MobileFooter from "@/app/projects/ui-components/mobileFooter";
import ImagesCarouselPopup from "../ui-components/carouselPopup/imagesCarouselPopup";

const GameInfo = (props: GameInfoProps) => {
    const {t} = useTranslation();
    const pathname = usePathname();
    const router = useRouter();
    const currentGameIndex = projectsList.findIndex(item => item.link == pathname);
    const [isImagePopupOpen, openImagePopup] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function openImageCarouselPopup(imageIndex: number) {
        openImagePopup(true);
        setCurrentImageIndex(imageIndex);
    }

    function showNextGame() {
        let nextGamePathname = currentGameIndex >= projectsList.length - 1 ? projectsList[0].link : projectsList[currentGameIndex + 1].link;
        router.push(nextGamePathname);
    }

    function showPrevGame() {
        let prevGamePathname: string = currentGameIndex <= 0 ? projectsList[projectsList.length - 1].link : projectsList[currentGameIndex - 1].link;
        router.push(prevGamePathname);
    }

    return (
        <main className="xl:max-w-7xl sm:mx-4 text-grey tracking-wider leading-normal text-center antialiased">
            <div className="flex flex-col gap-8 xl:gap-16 py-24 sm:py-32 xl:py-0  xl:my-16 mx-8 md:mx-16 lg:mx-20 xl:ml-20 xl:mr-32 text-left">
                <div className="flex flex-row flex-wrap justify-start items-start uppercase">
                    <div className="uppercase">
                        <h1 className="font-MPlusBold text-4xl sm:text-5xl xl:text-6xl pb-2">{props.title}</h1>
                        <h3 className="font-MPlusMedium text-3xl sm:text-4xl xl:text-5xl">{props.subtitle}</h3>
                    </div>
                </div>
                <p className="font-MPlusRegular text-lg text-grey-text description whitespace-pre-wrap">
                    {props.description}
                </p>
                <ImagesCarouselPopup
                    isOpen={isImagePopupOpen}
                    closeImagePopup={() => openImagePopup(false)}
                    imageToOpen={currentImageIndex}
                    images={props.gameImages}
                />
                <ImagesCarousel images={props.gameImages} imageClick={openImageCarouselPopup}/>
                <div className="flex flex-row gap-4 ">
                    {props.playOpportunity && props.playLink.map((item, index)=>
                        <Button
                            key={index}
                            className="py-4 px-8 bg-light-grey xl:bg-grey"
                            variant="solid"
                            radius="md"
                            size="lg"
                            onPress={() => {
                                window.open(item.link, "_blank");
                            }}
                        >
                            <span className="font-MPlusMedium text-black/50 text-medium">
                               {t("play") + t(item.linkTitle)}
                            </span>
                        </Button>
                    )}

                    <Button
                        className="py-4 px-8 bg-light-grey xl:bg-grey"
                        variant="solid"
                        size="lg"
                        radius="md"
                        onPress={() => {
                            window.open(props.githubLink, "_blank");
                        }}
                    >
            <span className="font-MPlusMedium text-black/50 text-medium">
              {t("show_on_github")}
            </span>
                    </Button>
                </div>
            </div>
            <MobileFooter showPrevGame={showPrevGame} showNextGame={showNextGame}/>
        </main>
    );
};

interface GameInfoProps {
    title: string;
    subtitle: string;
    description: string;
    playOpportunity: boolean;
    playLink: {
            linkTitle: string;
            link: string;
        }[];
    githubLink: string;
    image: string;
    gameImages: Array<string>;
}

export {GameInfo};
