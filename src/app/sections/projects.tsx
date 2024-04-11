import Link from "next/link";
import { useTranslation } from "react-i18next";

import React from "react";
import { Card, CardFooter, CardHeader, CardBody, Image, Button } from "@nextui-org/react";


export default function Projects() {
    const { t }: any = useTranslation();
    const list = [
        {
            title: "Minesweeper Paws",
            img: "/images/B4.png",
            price: "$5.50",
        },
        {
            title: "Run use gun",
            img: "/images/run_use_gun_270.jpg",
            price: "$3.00",
        },
        {
            title: "Game №1",
            img: "/images/B1.png",
            price: "$10.00",
        },
        {
            title: "Game №2",
            img: "/images/B3.png",
            price: "$5.30",
        },
        {
            title: "Game №3",
            img: "/images/B5.png",
            price: "$15.70",
        },
    ];
    return (
        <main className="flex min-h-screen flex-col items-center p-24">

            <h1 className={`mb-5 text-5xl font-semibold`}>
                {t('projects')}
            </h1>

            <div className="grid grid-cols-4 gap-10">
                {list.map((item, index) => (
                    <Card isPressable className="py-4">
                        <CardHeader className="relative shadow-black/5 shadow-none rounded-large">
                            <h4 className="font-bold text-large">{item.title}</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={item.img}
                                width={250}
                                height={250}
                            />
                        </CardBody>
                    </Card>
                ))}
            </div>
        </main>

    )
}