import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import ScreenWidth from "@/app/utils/screenWidth";

export default function NewImagesCarouselPopup(props: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length);
        console.log('1', props.imageToOpen)
        console.log('2', currentIndex)
    };

    let screenWidth = ScreenWidth();

    const [touchPosition, setTouchPosition] = useState<null | number>(null)

    const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (screenWidth < 1280) {

            if (diff > 5) {
                nextSlide()
            }

            if (diff < -5) {
                prevSlide()
            }
        }

        setTouchPosition(null)
    }

    const imageWidth = (): string => {
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

    useEffect(() => {
        if (props.isOpen) {
            document.body.classList.add("overflow-hidden");
            window.scrollTo(0, 0);
            setCurrentIndex(props.imageToOpen)
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [props.isOpen]);

    return (
        props.isOpen &&
        <div
            className={`slider-container ${props.isOpen ? "open" : "close"} absolute flex flex-row justify-center items-center w-screen h-screen top-0 left-0 bg-black/80 z-50`}
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
                className="hidden sm:flex h-24 w-24 text-white absolute z-50 left-5 sm:left-2 prev"
                size="sm"
                onPress={prevSlide}
            >
                <Image className="hidden sm:block" src="/images/svg/arrowbackward.svg" alt="Close Icon" width={25}
                       height={25}/>
            </Button>
            {/*<div className="flex flex-row justify-center items-center mx-auto max-h-[700px]">*/}
            {/*        <div className={`slide ${props.imageToOpen === currentIndex ? 'active' : 'hid'} absolute w-[${imageWidth()}] max-h-[700px]`}>*/}
            {/*            <Image*/}
            {/*                width={imageWidth()}*/}
            {/*                alt="Game Image"*/}
            {/*                src={props.images[currentIndex]}*/}
            {/*                onClick={(e) => {*/}
            {/*                    e.stopPropagation()*/}
            {/*                }*/}
            {/*                }*/}
            {/*                className="object-cover object-center max-h-[700px]"*/}
            {/*                onTouchStart={handleTouchStart}*/}
            {/*                onTouchMove={handleTouchMove}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*</div>*/}
            <div className="flex flex-row justify-center items-center mx-auto max-h-[700px]">
                {props.images.map((image, index) => (
                    <div key={index}
                         className={`slide ${index === currentIndex ? 'active' : 'hid'} absolute w-[${imageWidth()}] max-h-[700px]`}>
                        <Image
                            width={imageWidth()}
                            alt="Game Image"
                            src={props.images[currentIndex]}
                            onClick={(e) => {
                                e.stopPropagation()
                                console.log('index: ', index)
                                console.log('curindex: ', currentIndex)
                            }
                            }
                            className="object-cover object-center max-h-[700px]"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                        />
                    </div>
                ))}
            </div>
            <Button
                variant="light"
                radius="full"
                hidden
                className="sm:flex h-24 w-24 text-white absolute right-5 sm:right-2 z-20 next"
                size="sm"
                onPress={nextSlide}
            >
                <Image src="/images/svg/arrowforward.svg" alt="Close Icon" width={25} height={25}/>
            </Button>
        </div>

    );
}

interface CarouselProps {
    isOpen: boolean;
    closeImagePopup: () => void;
    imageToOpen: number;
    images: Array<string>;

}
