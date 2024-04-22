import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";


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
    <main className="font-MPlusLight flex flex-col items-center mb-44">
      <div className="w-2/3 border-t-1 object-center border-black"/>
      <h5 className="text-3xl mt-36 mb-36 max-w-4xl text-center leading-normal tracking-wide antialiased">
      {t("team description")}
      </h5>
      <div className="gap-20 grid grid-cols-4 sm:grid-cols-4">
        {list.map((item, index) => (
          <div className="flex flex-col items-center gap-1">
            <Avatar isBordered src={item.img} className="w-56 h-56 text-large mb-5" />
            <h4 className="font-bold text-large">{item.name}</h4>
            <small className="text-default-500">{item.position}</small>
            <Divider className="my-4" />
          </div>
        ))}
      </div>
    </main>)
}