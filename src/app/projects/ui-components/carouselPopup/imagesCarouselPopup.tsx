import React, {useEffect, useState} from "react";
import {Button, Image} from "@nextui-org/react";
import ScreenWidth from "@/app/utils/screenWidth";
import styles from "./imagesCarouselPopup.module.css"

export default function ImagesCarouselPopup(props: CarouselProps) {
    const screenWidth = ScreenWidth();
    const [touchPosition, setTouchPosition] = useState<null | number>(null)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [side, setSide] = useState("")
    const [closeAnimation, playCloseAnimation] = useState(false)

    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
            if (e.code === "ArrowLeft") {
                prevSlide()
            }
            if (e.code === "ArrowRight") {
                nextSlide()
            }
            if (e.code === "Escape") {
                closePopup()
            }
        }

        document.addEventListener("keydown", keyDownHandler);
        if (props.isOpen) {
                document.body.classList.add("overflow-hidden");
                window.scrollTo(0, 0);
                setCurrentIndex(props.imageToOpen)
                setSide("straight")
            }
            return () => {
                document.body.classList.remove("overflow-hidden");
                document.removeEventListener("keydown", keyDownHandler)
            }
        }, [props.isOpen, props.imageToOpen]
    )
        ;

        function nextSlide(): void {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
            setSide("left")
        }

        function prevSlide(): void {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length);
            setSide("right")
        }

        function handleTouchStart(e: React.TouchEvent<HTMLImageElement>): void {
            const touchDown = e.touches[0].clientX
            setTouchPosition(touchDown)
        }

        function handleTouchMove(e: React.TouchEvent<HTMLDivElement>): void {
            const touchDown = touchPosition;
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

        function imageWidth(): string {
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

        function playAnimation(index: number): string {
            let prevIndex = (currentIndex - 1 + props.images.length) % props.images.length;
            let nextIndex = (currentIndex + 1) % props.images.length;

            if (index === currentIndex) {
                if (side === "left") {
                    return styles.active + " " + styles.left
                }
                if (side === "right") {
                    return styles.active + " " + styles.right
                }
                if (side === "straight") {
                    return styles.active + " " + styles.straight
                }
            }
            if (side == "left" && index === prevIndex) {
                return styles.hid + " " + styles.left
            }
            if (side == "right" && index === nextIndex) {
                return styles.hid + " " + styles.right
            }
            return styles.hid
        }

        function closePopup(): void {
            playCloseAnimation(true);
            props.closeImagePopup();
            setTimeout(() => playCloseAnimation(false), 400)
        }

        return (
            <div
                className={`${styles.sliderContainer} ${props.isOpen ? styles.open : closeAnimation ? styles.close : "hidden"} fixed flex flex-row justify-center items-center w-screen h-screen top-0 left-0 bg-black/80 z-50`}
                onClick={closePopup}>

                <Button
                    variant="light"
                    radius="full"
                    className={`hidden sm:flex h-24 w-24 text-white absolute z-50 left-5 sm:left-2 ${styles.prev}`}
                    size="sm"
                    onPress={prevSlide}
                >
                    <Image className="hidden sm:block" src="/images/svg/arrowbackward.svg" alt="Previous slide button"
                           width={25}
                           height={25}/>
                </Button>

                <div className="flex flex-row justify-center items-center mx-auto h-screen w-screen">
                    {props.images.map((image, index) => (
                        <div key={index}
                             className={`${styles.slide} ${playAnimation(index)} absolute w-[${imageWidth()}] flex justify-center mx-auto`}
                        >
                            <Image
                                width={imageWidth()}
                                key={index}
                                alt="Game Image"
                                src={image}
                                onClick={(e) => {
                                    e.stopPropagation()
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
                    className={`hidden sm:flex h-24 w-24 text-white absolute right-5 sm:right-2 z-50 ${styles.next}`}
                    size="sm"
                    onPress={nextSlide}
                >
                    <Image src="/images/svg/arrowforward.svg" alt="Next slide button" width={25} height={25}/>
                </Button>
                <Button
                    variant="light"
                    radius="full"
                    className="absolute w-20 h-20 right-1 top-1 text-4xl text-white z-50"
                    size="sm"
                    onPress={closePopup}
                >
                    <Image className="z-50" src="/images/svg/xmark.svg" alt="Close Icon" width={25} height={25}/>
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
