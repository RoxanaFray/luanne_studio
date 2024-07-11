import React from "react";
import {useTranslation} from "react-i18next";
import {CardFooter} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {Card, CardBody, Image} from "@nextui-org/react";
import projectsList from "../../data/gamesArray.json"

export default function MobileNavBar() {
    const {t} = useTranslation();
    const router = useRouter();

    return (
        <main className="block xl:hidden px-0 mx-0">
            <div className="mt-12 mb-20 px-4 sm:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {projectsList.map((item, index) => (
                    <Card isPressable className="flex flex-col justify-start items-start py-2 max-w-64 md:max-w-60 lg:max-w-64 gap-0" key={index} onPress={() => router.push(item.link)}>
                        <CardBody className="overflow-visible flex justify-start items-center max-h-80 sm:max-h-60 md:max-h-48 lg:max-h-52">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl max-h-80 sm:max-h-60 md:max-h-48 lg:max-h-52"
                                src={item.img}
                                width={230}
                            />
                        </CardBody>
                        <CardFooter className="pb-3 md:pb-3 pt-2 sm:pt-6 lg:pt-5 px-4 flex-col items-start justify-start align-top">
                            <h4 className="font-bold text-large text-left align-top">{t(item.title)}</h4>
                            <small className="text-default-500 text-wrap text-left align-top">{item.short_description}</small>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}
