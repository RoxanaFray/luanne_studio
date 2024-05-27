import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { ScrollShadow } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  return (
    <main className="navbar basis-1/5 ">
      <div className="h-screen shadow-xl border-1 border-grey-border bg-light-background">
        <div className="hidden sm:flex flex-col gap-4 w-full items-center h-screen justify-center">
          <Button
            variant="light"
            data-hover="hovered"
            disableRipple={true}
            className="border-1 border-black/70 rounded py-1 px-2 mb-4 mt-8"
            onPress={() => router.push("/")}
          >
            <span className="text-black/60 uppercase font-MPlusMedium text-lg">
              Luanne Studio
            </span>
          </Button>
          <Divider className="w-full" />
          <ScrollShadow className="h-full w-full  bg-light-background">
            {list.map((item, index) => (
              <div key={index} className="w-full project-card border-b-1">
                <Link
                  color="foreground"
                  className="flex flex-row relative project-link w-full min-h-16"
                  href={item.link}
                >
                  <div className="pt-2 pb-2">
                    <Image
                      src={item.img}
                      width={50}
                      height={50}
                      alt="Picture of the game"
                      className="rounded-xl object-contain ml-4 align-middle"
                    />
                  </div>
                  <span className="font-MPlusLight text-black/70 p-4 pt-5">
                    {" "}
                    {item.title}
                  </span>
                  <div className="hover-cover absolute bg-grey/5 rounded w-full h-full top-0 hidden" />
                </Link>
              </div>
            ))}
          </ScrollShadow>
        </div>
      </div>
    </main>
  );
}
