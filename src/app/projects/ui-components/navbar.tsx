import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { ScrollShadow } from "@nextui-org/react";

export default function NavBar() {
  const { t }: any = useTranslation();

  const list = [
    {
      title: t("game-1 title"),
      img: "/images/B4.jpg",
      description: t("game-1 description"),
      link: "projects",
    },
    {
      title: t("game-2 title"),
      img: "/images/run_use_gun.jpg",
      description: t("game-2 description"),
      link: "projects",
    },
    {
      title: t("game-3 title"),
      img: "/images/summon.png",
      description: t("game-3 description"),
      link: "projects",
    },
    {
      title: t("game-4 title"),
      img: "/images/B5.jpg",
      description: t("game-4 description"),
      link: "projects",
    },
    {
      title: t("game-5 title"),
      img: "/images/rick.jpg",
      description: t("game-5 description"),
      link: "projects",
    },
    {
      title: t("game-1 title"),
      img: "/images/B4.jpg",
      description: t("game-1 description"),
      link: "projects",
    },
    {
      title: t("game-2 title"),
      img: "/images/run_use_gun.jpg",
      description: t("game-2 description"),
      link: "projects",
    },
    {
      title: t("game-3 title"),
      img: "/images/summon.png",
      description: t("game-3 description"),
      link: "projects",
    },
    {
      title: t("game-4 title"),
      img: "/images/B5.jpg",
      description: t("game-4 description"),
      link: "projects",
    },
    {
      title: t("game-5 title"),
      img: "/images/rick.jpg",
      description: t("game-5 description"),
      link: "projects",
    },
    {
      title: t("game-2 title"),
      img: "/images/run_use_gun.jpg",
      description: t("game-2 description"),
      link: "projects",
    },
    {
      title: t("game-3 title"),
      img: "/images/summon.png",
      description: t("game-3 description"),
      link: "projects",
    },
    {
      title: t("game-4 title"),
      img: "/images/B5.jpg",
      description: t("game-4 description"),
      link: "projects",
    },
    {
      title: t("game-5 title"),
      img: "/images/rick.jpg",
      description: t("game-5 description"),
      link: "projects",
    },
  ];

  return (
    <main>
      <div className="w-1/5 h-screen shadow-xl border-1 border-grey-border bg-light-background">
        <div className="hidden sm:flex flex-col gap-4 w-full items-center h-screen justify-center">
          <div className="pt-4">
            <Image
              src="/images/logo_no_color_words_grey.png"
              alt="LuanneStudio logo"
              width={80}
              // sizes="width:100%"
              height={80}
              className="rounded-xl"
            />
          </div>
          <Divider className="w-full" />
          <ScrollShadow className="h-full w-full pl-4 pr-8">
            {list.map((item, index) => (
              <div key={index} className="w-full border-b-1 p-2">
                <Link
                  color="foreground"
                  className="flex flex-row w-full"
                  href={item.link}
                >
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt="Picture of the game"
                    className="rounded-xl object-contain"
                  />
                  <span className="font-MPlusLight text-black/70 p-4">
                    {" "}
                    {item.title}
                  </span>
                </Link>
              </div>
            ))}
          </ScrollShadow>
        </div>
      </div>
    </main>
  );
}
