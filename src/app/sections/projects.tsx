import Link from "next/link";
import { useTranslation } from "react-i18next";

import React from "react";
import { Card, CardFooter, CardHeader, CardBody, Image, Button } from "@nextui-org/react";


export default function Projects() {
    const { t }: any = useTranslation();
    return (
        <main className="flex min-h-screen flex-col items-center p-24">

            <h1 className={`mb-5 text-5xl font-semibold`}>
                {t('projects')}
            </h1>


            <div className="grid grid-cols-4 gap-10">
                {/* <Card
                    isPressable
                    
                    isFooterBlurred
                    radius="lg"
                    className="flex-1 border-none"
                >
                    <Image
                        alt="French Bulldog"
                        className="object-cover"
                        height={250}
                        src="/images/B4.jpg"
                        width={250}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Run use gun</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            Show more
                        </Button>
                    </CardFooter>
                </Card> */}
                <Card isPressable className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p>  */}
                        {/* <small className="text-default-500">12 Tracks</small> */}
                        <h4 className="font-bold text-large">Minesweeper Paws</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="/images/B4.png"
                            width={270}
                        />
                    </CardBody>
                </Card>
                <Card isPressable className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p>  */}
                        {/* <small className="text-default-500">12 Tracks</small> */}
                        <h4 className="font-bold text-large">Run use gun</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="/images/run_use_gun_270.jpg"
                            width={270}
                        />
                    </CardBody>
                </Card>
            </div>
        </main>

    )
}