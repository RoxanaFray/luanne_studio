import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function ImageCarousel(props: CarouselProps) {
  function changeList() {}
  const [imagesList, changeImagesList] = useState([0, 1, 2]);

  function showNext() {
    let a: Array<number> = [];
    imagesList.map((item) => {
      a.push(item + 3);
    });
    changeImagesList(a);
  }

  function showPrev() {
    let a: Array<number> = [];
    imagesList.map((item) => {
      a.push(item - 3);
    });
    changeImagesList(a);
  }

  return (
    <div className="flex flex-row gap-4 border-1 items-center justify-start border-black relative">
      <div className="absolute w-full left-0 flex flex-row justify-between z-20 border-1 border-red-200 h-20">
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
          width="auto"
          height="100%"
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
