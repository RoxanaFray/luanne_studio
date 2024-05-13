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
      position: "@shrekfactory",
    },
    {
      name: t("Sergey"),
      img: "/images/jerry.jpg",
      position: t("@gastar"),
    },
    {
      name: t("Tanya"),
      img: "/images/morty.jpg",
      position: t("@roxanafray"),
    },
    {
      name: t("Liana"),
      img: "/images/summer.jpg",
      position: t("@lulun"),
    },
  ];

  return (
    <main
      className="font-MPlusLight flex flex-col items-start px-48"
      id="about_us"
    >
      <h1 className="font-MPlusRegular pt-32 tracking-wide text-black/15 uppercase text-9xl antialiased">
        {t("team")}
      </h1>
      <h5 className="text-3xl mb-20 mt-16 max-w-4xl text-start text-black/70 leading-normal tracking-wide antialiased">
        {t("team description")}
      </h5>
      <div className="gap-20 grid grid-cols-4 sm:grid-cols-4">
        {list.map((item, index) => (
          <div className="flex flex-col items-center gap-1" key={index}>
            <Avatar
              isBordered
              src={item.img}
              className="w-56 h-56 text-large mb-5 "
            />

            <h4 className="font-bold text-large text-black/70">{item.name}</h4>
            <Link href="/projects">
              <small className="text-default-500 text-black/70 ">
                {item.position}
              </small>
            </Link>
            <Divider className="my-4" />
          </div>
        ))}
      </div>
    </main>
  );
}
