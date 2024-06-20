import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";

export default function ImagesGrid(props: CarouselProps) {
  function scroll(side: string) {
    let container = document.getElementById("scrollContainer");
    let leftScrollPosition = container?.scrollLeft || 0;

    if (side == "left") {
      container?.scroll(leftScrollPosition - 600, 0);
    }
    if (side == "right") {
      container?.scroll(leftScrollPosition + 600, 0);
    }
    if (side == "start") container?.scroll({ top:0, left:0, behavior: "instant"} );
  }

  return (
    <div className="relative flex flex-row justify-start items-center">
      <Button
        variant="light"
        radius="full"
        className="h-16 text-black/50 absolute -left-[72px]"
        size="sm"
        onPress={() => scroll("left")}
      >
          <Image src="/images/svg/chevronleftgrey.svg" alt="Close Icon" width={10} height={10} />
      </Button>
      <Button
        variant="light"
        radius="full"
        className="h-16 w-16 text-black/50 absolute right-60 "
        size="sm"
        onPress={() => scroll("right")}
      >
          <Image src="/images/svg/chevronrightgrey.svg" alt="Close Icon" width={10} height={10} />
      </Button>
      <ScrollShadow
        hideScrollBar
        orientation="horizontal"
        className="max-w-[670px] max-h-[300px] scroll-smooth"
        id="scrollContainer"
      >
        <div className="flex flex-row gap-4 w-screen" id="imagesContainer">
          {props.images.map((item, index) => {
            return (
              <Image
                width="200"
                height="200"
                alt="Game Image"
                key={index}
                src={item}
                className="cursor-pointer"
                onClick={() => {props.imageClick(index); scroll("start")}}
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
