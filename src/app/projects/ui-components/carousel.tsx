import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function ImageCarousel(props: CarouselProps) {
  let maxImagesPerSlide: number = 4;
  let indexesArray: Array<number> = [];
  let imagesAmount: number = props.images.length;

  for (let i = 0; i < maxImagesPerSlide; i++) {
    indexesArray.push(i);
  }

  const [imagesList, changeImagesList] = useState(indexesArray);

  function showNext() {
    let a: Array<number> = [];

    imagesList.map((item) => {
      if (item + maxImagesPerSlide <= imagesAmount) {
        a.push(item + maxImagesPerSlide);
      }
    });
    if (a.length == 0) {
      a = imagesList;
    }
    changeImagesList(a);
  }

  function showPrev() {
    let a: Array<number> = [];
    imagesList.map((item) => {
      if (item < maxImagesPerSlide) {
        a = indexesArray;
      } else {
        a.push(item - maxImagesPerSlide);
      }
    });
    changeImagesList(a);
  }

  return (
    <div className="relative flex flex-row justify-center items-center">
      <Button
        variant="light"
        radius="full"
        className="h-16 text-black/50 absolute -left-12"
        size="sm"
        onPress={showPrev}
      >
        <span className="rotate-180"> ❯ </span>
      </Button>
      <Button
        variant="light"
        radius="full"
        className="h-16 w-16 text-black/50 absolute -right-12 "
        size="sm"
        onPress={showNext}
      >
        <span className=""> ❯ </span>
      </Button>
      <div className="grid grid-cols-4 justify-items-center relative w-full content-center">
        {imagesList.map((item, index) => {
          // if (index < maxImagesPerSlide) {
          return (
            <Image
              width="200"
              height="200"
              alt="Game Image"
              key={index}
              src={props.images[item]}
              className=""
            />
          );
          // }
        })}
      </div>
    </div>
  );
}

interface CarouselProps {
  images: Array<string>;
}
