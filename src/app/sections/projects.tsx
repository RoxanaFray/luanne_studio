import Link from "next/link";
import { useTranslation } from "react-i18next";

import React from "react";
import { Card, CardFooter, CardHeader, CardBody, Image, Button } from "@nextui-org/react";


export default function Projects() {
    const { t }: any = useTranslation();
    const list = [
        {
            title: "Minesweeper Paws",
            img: "/images/B1.jpg",
            description: "Fun bomb game",
        },
        {
            title: "Run use gun",
            img: "/images/B2.jpg",
            description: "Cool game for running and shooting",
        },
        {
            title: "Game №1",
            img: "/images/B3.jpg",
            description: "Some game",
        },
        {
            title: "Game №2",
            img: "/images/B4.jpg",
            description: "Wonderful game",
        },
        {
            title: "Game №3",
            img: "/images/B5.jpg",
            description: "Just amazing!",
        },
    ];
    return (
        <main className="flex min-h-screen flex-col items-center p-24">

            <h1 className={`mb-20 text-5xl`}>
                {t('projects')}
            </h1>

            <div className="grid grid-cols-4 gap-10">
                {list.map((item, index) => (
            //         <Card
            //         isFooterBlurred
            //         radius="lg"
            //         className="border-none"
            //       >
            //         <Image
            //           alt="Woman listing to music"
            //           className="object-cover"
            //           height={250}
            //           src={item.img}
            //           width={250}
            //         />
            //         <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            //           <p className="text-tiny text-white/80">{item.title}</p>
            //           <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            //             More
            //             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            //   -&gt;
            // </span>
            //           </Button>
            //         </CardFooter>
            //       </Card>
                    <Card isPressable className="py-4">
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={item.img}
                                width={250}
                                height={250}
                            />
                        </CardBody>
                        <CardFooter className="relative flex-col items-start shadow-black/5 shadow-none rounded-large">
                            <h4 className="font-bold text-large">{item.title}</h4>
                            <small className="text-default-500">{item.description}</small>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>

    )
}