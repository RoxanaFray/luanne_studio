import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/react";
import React, {useState} from "react";
import {ScrollShadow} from "@nextui-org/react";
import ScreenWidth from "@/app/utils/screenWidth";

export default function ImagesCarousel(props: CarouselProps) {
    const [sliderScrollPosition, setSliderScrollPosition] = useState(0);
    const [maxSliderScrollPosition, setMaxSliderScrollPosition] = useState(1);
    let screenWidth = ScreenWidth();

    function scroll(side: string) {
        let imagesContainer = document.getElementById("imagesContainer");
        let scrollContainer = document.getElementById("scrollContainer");

        if (scrollContainer && imagesContainer) {
            setSliderScrollPosition(scrollContainer.scrollLeft)
            setMaxSliderScrollPosition(imagesContainer.offsetWidth - scrollContainer.offsetWidth)

            if (side == "left") {
                scrollContainer.scrollLeft -= 600;
                setSliderScrollPosition(scrollContainer.scrollLeft - 600)
            }
            if (side == "right") {
                scrollContainer.scrollLeft += 600;
                setSliderScrollPosition(scrollContainer.scrollLeft + 600)
            }
        }
    }

    return (
        <div className="relative flex flex-row justify-start items-center">
            <Button
                isDisabled={sliderScrollPosition <= 0}
                variant="light"
                radius="full"
                className="hidden xl:flex h-16 text-black/50 absolute xl:-left-[72px]"
                size="sm"
                onPress={() => scroll("left")}
            >
                <Image src="/images/svg/chevronleftgrey.svg" alt="Close Icon" width={10} height={10}/>
            </Button>
            <ScrollShadow
                hideScrollBar
                orientation="horizontal"
                className="max-w-[550px] mr-4 sm:max-w-[650px] sm:mr-8 md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[600px] 2xl:max-w-[800px] max-h-[300px] scroll-smooth"
                id="scrollContainer"
                onScroll={() => scroll("")}
            >
                <div className="flex flex-row gap-4 w-max" id="imagesContainer">
                    {props.images.map((item, index) => {
                        return (
                            <Image
                                width={screenWidth < 768 ? 150 : screenWidth > 1024 ? 200 : 170}
                                height={screenWidth < 768 ? 150 : screenWidth > 1024 ? 200 : 170}
                                alt="Game Image"
                                key={index}
                                src={item}
                                className="cursor-pointer object-cover object-center"
                                onClick={() => {
                                    props.imageClick(index);
                                }}
                            />
                        );
                    })}
                </div>
            </ScrollShadow>
                <Button
                    isDisabled={maxSliderScrollPosition - sliderScrollPosition < 1}
                    variant="light"
                    radius="full"
                    className="hidden xl:flex h-16 w-16 text-black/50"
                    size="sm"
                    onPress={() => scroll("right")}
                >
                    <Image src="/images/svg/chevronrightgrey.svg" alt="Close Icon" width={10} height={10}/>
                </Button>
        </div>
    );
}

interface CarouselProps {
    images: Array<string>;
    imageClick: (imageIndex: number) => void;
}
