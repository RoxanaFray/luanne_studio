import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/react";
import React from "react";


export default function ImageCarouselPopup(props: CarouselProps) {
    function showNext() {
    }

    function showPrev() {
    }

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
                <Image src="/images/svg/xmark.svg" alt="Close Icon" width={25} height={25} />
            </Button>

            <Button
                variant="light"
                radius="full"
                className="h-24 w-24 text-4xl text-white absolute left-5"
                size="sm"
                onPress={showPrev}
            >
                <Image src="/images/svg/arrowbackward.svg" alt="Close Icon" width={25} height={25} />
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
                className="h-24 w-24 text-white absolute right-5"
                size="sm"
                onPress={showNext}
            >
                <Image src="/images/svg/arrowforward.svg" alt="Close Icon" width={25} height={25} />
            </Button>
            {/*<div className="">*/}
            {/* {props.images.map((item, index) => {
          return (
            <Image
              width="200"
              height="200"
              alt="Game Image"
              key={index}
              src={item}
              className=""
            />
          );
        })} */}
            {/*</div>*/}
        </div>

    );
}

interface CarouselProps {
    images: Array<string>;
    activeImagePath: string;
    isOpen: boolean;
    closeImagePopup: () => void;
}
