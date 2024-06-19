"use client";
import { useTranslation } from "react-i18next";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import ImageCarouselPopup from "./carouselPopup";
import ImageCarousel from "./carousel";
import ImagesGrid from "./imagesGrid";
import { useState } from "react";

const GameInfo = (props: GameInfoProps) => {
  const { t }: any = useTranslation();

  const [isImagePopupOpen, openImagePopup] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  function openImageCarouselPopup(imagePath: string) {
    openImagePopup(true);
    setActiveImage(imagePath);
  }

  const router = useRouter();

  return (
    <main className="font-MPlusBold text-grey tracking-wider leading-normal text-center antialiased">
      <div className="flex flex-col gap-16 my-16 ml-20 mr-32 text-left">
        <div className="flex flex-row flex-wrap justify-start items-start gap-8">
          {/* <Image
            className=""
            alt="Image picture"
            width="100"
            height="100"
            src={props.image}
            radius="md"
          /> */}
          <div className="uppercase">
            <h1 className="font-MPlusBold text-6xl">{props.title}:</h1>
            <h3 className="font-MPlusMedium text-5xl">{props.subtitle}</h3>
          </div>
        </div>
        <p className="font-MPlusRegular text-lg text-grey-text">
          {props.description}
        </p>
          <ImageCarouselPopup
            images={props.gameImages}
            activeImagePath={activeImage}
            isOpen={isImagePopupOpen}
            closeImagePopup={() => openImagePopup(false)}
          />

        <ImagesGrid images={props.gameImages} imageClick={openImageCarouselPopup} />
        <div className="flex flex-row gap-4 ">
          {props.playOpportunity ? (
            <Button
              className="py-4 px-8 bg-grey"
              variant="solid"
              size="lg"
              onPress={() => {
                router.push(props.playLink);
              }}
            >
              <span className="font-MPlusMedium text-black/50 text-medium">
                Play
              </span>
            </Button>
          ) : (
            <></>
          )}

          <Button
            className="py-4 px-8 bg-grey"
            variant="solid"
            size="lg"
            onPress={() => {
              router.push(props.githubLink);
            }}
          >
            <span className="font-MPlusMedium text-black/50 text-medium">
              Show on GitHub
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

export { GameInfo };
