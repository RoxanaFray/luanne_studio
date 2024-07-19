import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import clsx from "clsx";
import ScreenWidth from "@/app/utils/screenWidth";
import {number} from "prop-types";


export default function ImagesCarouselPopup(props: CarouselProps) {
    let screenWidth = ScreenWidth();

    const [touchPosition, setTouchPosition] = useState<null | number>(null)

    const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const imageWidth = ():string => {
        if (screenWidth < 640) {
            return "90%"
        }
        if (screenWidth >= 640 && screenWidth < 768) {
            return "80%"
        }
        if (screenWidth >= 768 && screenWidth < 1024) {
            return "85%"
        }
        if (screenWidth >= 1024 && screenWidth < 1280) {
            return "90%"
        }
        return "700px"
    }

    const handleTouchMove = (e:React.TouchEvent<HTMLDivElement>) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            props.showNext()
        }

        if (diff < -5) {
            props.showPrev()
        }

        setTouchPosition(null)
    }

    useEffect(() =>
    {
        if (props.isOpen) {
            document.body.classList.add("overflow-hidden");
            window.scrollTo(0,0);
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [props.isOpen]);

    return (
        props.isOpen &&
        <div
            className="absolute flex flex-row justify-center items-center w-screen h-screen top-0 left-0 bg-black/80 z-50"
            onClick={props.closeImagePopup}>
            <Button
                variant="light"
                radius="full"
                className="absolute w-20 h-20 right-1 top-1 text-4xl text-white"
                size="sm"
                onPress={props.closeImagePopup}
            >
                <Image src="/images/svg/xmark.svg" alt="Close Icon" width={25} height={25}/>
            </Button>

            <Button
                variant="light"
                radius="full"
                className={clsx(
                    "hidden sm:flex h-24 w-24 text-white absolute z-50 left-5 sm:left-2",
                    {
                        "hidden": props.isPrevButtonDisabled,
                    },
                )}
                size="sm"
                onPress={props.showPrev}
            >
                <Image className="hidden sm:block" src="/images/svg/arrowbackward.svg" alt="Close Icon" width={25} height={25}/>
            </Button>
            <Image
                width={imageWidth()}

                alt="Game Image"
                src={props.activeImagePath}
                onClick={(e ) => e.stopPropagation()}
                className="object-cover object-center mx-auto max-h-[700px]"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            />
            <Button
                variant="light"
                radius="full"
                className={clsx(
                    "hidden sm:flex h-24 w-24 text-white absolute right-5 sm:right-2 z-20",
                    {
                        "hidden": props.isNextButtonDisabled,
                    },
                )}
                size="sm"
                onPress={props.showNext}
            >
                <Image src="/images/svg/arrowforward.svg" alt="Close Icon" width={25} height={25}/>
            </Button>
        </div>

    );
}

interface CarouselProps {
    activeImagePath: string;
    isPrevButtonDisabled: boolean;
    isNextButtonDisabled: boolean;
    isOpen: boolean;
    closeImagePopup: () => void;
    showPrev: () => void;
    showNext: () => void;
}
