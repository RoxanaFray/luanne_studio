import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function GamesList() {
  const { t }: any = useTranslation();
  const router = useRouter();

  const list = [
    {
      title: t("game-1 title"),
      img: "/images/B4.jpg",
      description: t("game-1 description"),
      link: "projects",
      id: "minesweeper",
    },
    {
      title: t("game-2 title"),
      img: "/images/run_use_gun.jpg",
      description: t("game-2 description"),
      link: "projects",
      id: "run_use_gun",
    },
    {
      title: t("game-3 title"),
      img: "/images/summon.png",
      description: t("game-3 description"),
      link: "projects",
      id: "summon",
    },
    {
      title: t("game-4 title"),
      img: "/images/B5.jpg",
      description: t("game-4 description"),
      link: "projects",
      id: "catch_the_toy",
    },
    {
      title: t("game-5 title"),
      img: "/images/rick.jpg",
      description: t("game-5 description"),
      link: "projects",
      id: "",
    },
    {
      title: t("game-1 title"),
      img: "/images/B4.jpg",
      description: t("game-1 description"),
      link: "projects",
      id: "",
    },
    {
      title: t("game-2 title"),
      img: "/images/run_use_gun.jpg",
      description: t("game-2 description"),
      link: "projects",
      id: "",
    },
    {
      title: t("game-3 title"),
      img: "/images/summon.png",
      description: t("game-3 description"),
      link: "projects",
      id: "",
    },
    {
      title: t("game-4 title"),
      img: "/images/B5.jpg",
      description: t("game-4 description"),
      link: "projects",
      id: "",
    },
    {
      title: t("game-5 title"),
      img: "/images/rick.jpg",
      description: t("game-5 description"),
      link: "projects",
      id: "",
    },
    {
      title: t("game-2 title"),
      img: "/images/run_use_gun.jpg",
      description: t("game-2 description"),
      link: "projects",
      id: "",
    },
    {
      title: t("game-3 title"),
      img: "/images/summon.png",
      description: t("game-3 description"),
      link: "projects",
      id: "",
    },
    {
      title: t("game-4 title"),
      img: "/images/B5.jpg",
      description: t("game-4 description"),
      link: "projects",
      id: "",
    },
    {
      title: t("game-5 title"),
      img: "/images/rick.jpg",
      description: t("game-5 description"),
      link: "projects",
      id: "",
    },
  ];

  return (
    <main>
      {list.map((item, index) => (
        <Button
          key={index}
          variant="light"
          radius="none"
          className="flex flex-row items-start justify-start w-full pl-0 relative project-link min-h-16 project-card border-b-1 "
          onPress={() => router.push(`/projects/#${item.id}`)}
        >
          <div className="py-2">
            <Image
              src={item.img}
              width={50}
              height={50}
              alt="Picture of the game"
              className="rounded-xl object-contain ml-4 align-middle"
            />
          </div>
          <span className="font-MPlusLight text-black/70 p-4 pt-5 text-md">
            {" "}
            {item.title}
          </span>
          <div className="hover-cover absolute bg-grey/5 rounded w-full h-full top-0 hidden" />
        </Button>
      ))}
    </main>
  );
}
