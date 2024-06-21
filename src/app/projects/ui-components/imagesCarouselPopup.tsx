import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/react";
import React from "react";
import clsx from "clsx";


export default function ImagesCarouselPopup(props: CarouselProps) {
    return (
        props.isOpen &&
        <div
            className="absolute flex flex-row justify-center items-center w-screen h-screen top-0 left-0 bg-black/80 z-10"
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
                    "h-24 w-24 text-white absolute left-5",
                    {
                        "hidden": props.isPrevButtonDisabled,
                    },
                )}
                size="sm"
                onPress={props.showPrev}
            >
                <Image src="/images/svg/arrowbackward.svg" alt="Close Icon" width={25} height={25}/>
            </Button>
            <Image
                width="700"
                alt="Game Image"
                src={props.activeImagePath}
                onClick={(e) => e.stopPropagation()}
            />
            <Button
                variant="light"
                radius="full"
                className={clsx(
                    "h-24 w-24 text-white absolute right-5",
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
