import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function ImageCarousel(props: CarouselProps) {
  let maxImagesPerSlide: number = 3;
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
    <div className="flex flex-row gap-4  items-center justify-start  relative">
      <div className="absolute w-full left-0 flex flex-row justify-between z-20 h-20">
        <Button
          isIconOnly
          variant="solid"
          radius="full"
          className="w-16 h-16 bg-light-grey"
          size="lg"
          onPress={showPrev}
        >
          {"<"}
        </Button>
        <Button
          isIconOnly
          variant="solid"
          radius="full"
          className="w-16 h-16 bg-light-grey"
          size="lg"
          onPress={showNext}
        >
          {">"}
        </Button>
      </div>
      {imagesList.map((item, index) => (
        <Image
          width="200"
          height="200"
          alt="Game Image"
          key={index}
          src={props.images[item]}
        />
      ))}
    </div>
  );
}

interface CarouselProps {
  images: Array<string>;
}
