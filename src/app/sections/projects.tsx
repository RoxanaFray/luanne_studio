import Link from "next/link";
import { useTranslation } from "react-i18next";

import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";

export default function Projects() {
  const { t }: any = useTranslation();
  const list = [
    {
      title: t("game-1 title"),
      img: "/images/B4.jpg",
      description: t("game-1 description"),
    },
    {
      title: t("game-2 title"),
      img: "/images/run_use_gun.jpg",
      description: t("game-2 description"),
    },
    {
      title: t("game-3 title"),
      img: "/images/summon.png",
      description: t("game-3 description"),
    },
    {
      title: t("game-4 title"),
      img: "/images/B5.jpg",
      description: t("game-4 description"),
    },
    // {
    //     title: t("game-5 title"),
    //     img: "/images/B5.jpg",
    //     description: t("game-5 description"),
    // },
  ];
  return (
    <main className="flex flex-col items-center pb-28">
      <h1 className="font-MPlusRegular uppercase mb-36 text-5xl antialiased">
        {t("projects")}
      </h1>
      <div className="grid grid-cols-4 gap-10">
        {list.map((item, index) => (
          <Card isFooterBlurred key={index} radius="lg" className="border-none">
            <Link href="#">
              <Image
                alt={item.title}
                className="object-cover"
                height={250}
                src={item.img}
                width={250}
              />
            </Link>
            <CardFooter className="justify-center h-10 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="font-MPlusBold text-primary-800 text-sm text-white/80">
                {item.title}
              </p>
              {/* <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm"> */}
              {/* <span className="font-MPlusBold">{t("more")}</span>
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span> */}
              {/* </Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button
        className="text-default-500 mt-32 px-10 py-3 bg-light-grey text-lg"
        radius="lg"
      >
        <span className="font-MPlusMedium">{t("show all")}</span>

        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </Button>
    </main>
  );
}
