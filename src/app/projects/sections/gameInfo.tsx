"use client";
import {useTranslation} from "react-i18next";
import {Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import ImagesCarouselPopup from "../ui-components/imagesCarouselPopup";
import ImagesCarousel from "../ui-components/imagesCarousel";
import {useState} from "react";

const GameInfo = (props: GameInfoProps) => {
    const {t} = useTranslation();
    const [isImagePopupOpen, openImagePopup] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [activeImagePath, setActiveImagePath] = useState("");

    function openImageCarouselPopup(imageIndex: number) {
        openImagePopup(true);
        setActiveImage(imageIndex);
    }

    function showNextImageInPopup() {
        if (activeImageIndex >= props.gameImages.length - 1) {
            return;
        }
        setActiveImage(activeImageIndex + 1)
    }

    function showPrevImageInPopup() {
        if (activeImageIndex <= 0) {
            return;
        }
        setActiveImage(activeImageIndex - 1)
    }

    function setActiveImage(index: number) {
        setActiveImageIndex(index);
        setActiveImagePath(props.gameImages[index]);
    }

    return (
        <main className="font-MPlusBold text-grey tracking-wider leading-normal text-center antialiased">
            <div className="flex flex-col gap-16 my-16 ml-20 mr-32 text-left">
                <div className="flex flex-row flex-wrap justify-start items-start gap-8">
                    <div className="uppercase">
                        <h1 className="font-MPlusBold text-6xl">{props.title}:</h1>
                        <h3 className="font-MPlusMedium text-5xl">{props.subtitle}</h3>
                    </div>
                </div>
                <p className="font-MPlusRegular text-lg text-grey-text">
                    {props.description}
                </p>
                <ImagesCarouselPopup
                    isPrevButtonDisabled={activeImageIndex <= 0}
                    isNextButtonDisabled={activeImageIndex >= props.gameImages.length - 1}
                    activeImagePath={activeImagePath}
                    isOpen={isImagePopupOpen}
                    closeImagePopup={() => openImagePopup(false)}
                    showPrev={showPrevImageInPopup}
                    showNext={showNextImageInPopup}
                />

                <ImagesCarousel images={props.gameImages} imageClick={openImageCarouselPopup}/>
                <div className="flex flex-row gap-4 ">
                    {props.playOpportunity && (
                        <Button
                            className="py-4 px-8 bg-grey"
                            variant="solid"
                            size="lg"
                            onPress={() => {
                                window.open(props.playLink, "_blank");
                            }}
                        >
                            <span className="font-MPlusMedium text-black/50 text-medium">
                               {t("play")}
                            </span>
                        </Button>
                    )}

                    <Button
                        className="py-4 px-8 bg-grey"
                        variant="solid"
                        size="lg"
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
        </main>
    );
};

interface GameInfoProps {
    title: string;
    subtitle: string;
    description: string;
    playOpportunity: boolean;
    playLink: string;
    githubLink: string;
    image: string;
    gameImages: Array<string>;
}

export {GameInfo};
