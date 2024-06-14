import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import { useState } from "react";
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
        <span className="rotate-180"> ❯ </span>
      </Button>
      <Button
        variant="light"
        radius="full"
        className="h-16 w-16 text-black/50 absolute right-60 "
        size="sm"
        onPress={() => scroll("right")}
      >
        <span className=""> ❯ </span>
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
                className=""
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
}
