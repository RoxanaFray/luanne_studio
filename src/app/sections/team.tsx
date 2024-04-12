import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import {Divider} from "@nextui-org/react";


export default function Team() {
  const { t }: any = useTranslation();
  const list = [
    {
      name: t("Alik"),
      img: "/images/rick.jpg",
      position: t("game director")
    },
    {
      name: t("Sergey"),
      img: "/images/jerry.jpg",
      position: t("game programmer")
    },
    {
      name: t("Tanya"),
      img: "/images/morty.jpg",
      position: t("game programmer")
    },
    {
      name: t("Liana"),
      img: "/images/summer.jpg",
      position: t("game artist")
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <h1 className={`mb-20 text-5xl`}>
        {t('team')}
      </h1>
      <div className="gap-20 grid grid-cols-4 sm:grid-cols-4">
        {list.map((item, index) => (
          <div className="flex flex-col items-center gap-1">

            <Avatar isBordered src={item.img} className="w-56 h-56 text-large mb-5" />
            <h4 className="font-bold text-large">{item.name}</h4>
            <small className="text-default-500">{item.position}</small>
            <Divider className="my-4" />
          </div>

          //   <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          //   <CardBody className="overflow-visible p-0">
          //     <Image
          //       shadow="sm"
          //       radius="lg"
          //       width="100%"
          //       alt={item.name}
          //       className="w-full object-cover h-[140px] w-20 h-20 rounded-full"
          //       src={item.img}
          //     />
          //   </CardBody>
          //   <CardFooter className="text-small justify-between">
          //     <b>{item.name}</b>
          //     <p className="text-default-500">{item.position}</p>
          //   </CardFooter>
          // </Card>
        ))}
        {/* <Image className="w-20 h-20 rounded-full" src="/images/morty.jpg" alt="Rounded avatar"/> */}


      </div>
    </main>)
}