import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/react";
import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import ScreenWidth from "@/app/utils/screenWidth";

export default function ImagesCarousel(props: CarouselProps) {
    function scroll(side: string) {
        let container = document.getElementById("scrollContainer");
        let leftScrollPosition = container?.scrollLeft || 0;

        if (side == "left") {
            container?.scroll(leftScrollPosition - 600, 0);
        }
        if (side == "right") {
            console.log('RIGHT', container?.clientWidth)
            container?.scroll(leftScrollPosition + 600, 0);

        }
        if (side == "start") {
            container?.scroll({top: 0, left: 0, behavior: "instant"});
        }
    }

    let screenWidth = ScreenWidth();

    return (
        <div className="relative flex flex-row justify-start items-center">
            <Button
                variant="light"
                radius="full"
                className="hidden lg:flex h-16 text-black/50 absolute lg:-left-20 xl:-left-[72px]"
                size="sm"
                onPress={() => scroll("left")}
            >
                <Image src="/images/svg/chevronleftgrey.svg" alt="Close Icon" width={10} height={10}/>
            </Button>
            <Button
                variant="light"
                radius="full"
                className="hidden lg:flex h-16 w-16 text-black/50 absolute lg:-right-16 xl:right-60  "
                size="sm"
                onPress={() => scroll("right")}
            >
                <Image src="/images/svg/chevronrightgrey.svg" alt="Close Icon" width={10} height={10}/>
            </Button>
            <ScrollShadow
                hideScrollBar
                orientation="horizontal"
                className="max-w-[550px] mr-4 sm:max-w-[650px] sm:mr-8 md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[670px] max-h-[300px] scroll-smooth"
                id="scrollContainer"
            >
                <div className="flex flex-row gap-4 w-max xl:w-screen" id="imagesContainer">
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
                                    scroll("start")
                                }}
                            />
                        );
                    })}
                </div>
            </ScrollShadow>
        </div>
    );
}

interface CarouselProps {
    images: Array<string>;
    imageClick: (imageIndex: number) => void;
}
