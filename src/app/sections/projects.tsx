import Link from "next/link";
import { useTranslation } from "react-i18next";

import React from "react";
import { Card, CardFooter, CardHeader, CardBody, Image, Button } from "@nextui-org/react";


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
        <main className="flex flex-col items-center pt-24 pb-8">
            <h1 className="mb-20 text-5xl antialiased pb-12">
                {t('projects')}
            </h1>
            <div className="grid grid-cols-4 gap-10">
                {list.map((item, index) => (

                    <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                  >
                    <Image
                      alt="Woman listing to music"
                      className="object-cover"
                      height={250}
                      src={item.img}
                      width={250}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-sm text-white/80 font-medium">{item.title}</p>
                      <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                        {t("more")}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                      </Button>
                    </CardFooter>
                  </Card>
                    // <Card isPressable className="py-4">
                    //     <CardBody className="overflow-visible py-2">
                    //         <Image
                    //             alt="Card background"
                    //             className="object-cover rounded-xl"
                    //             src={item.img}
                    //             width={250}
                    //             height={250}
                    //         />
                    //     </CardBody>
                    //     <CardFooter className="relative flex-col items-start shadow-black/5 shadow-none rounded-large">
                    //         <h4 className="font-bold text-large">{item.title}</h4>
                    //         <small className="text-default-500">{item.description}</small>
                    //     </CardFooter>
                    // </Card>
                ))}
            </div>
        </main>

    )
}