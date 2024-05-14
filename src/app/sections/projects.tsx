import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";

export default function Projects() {
  const { t }: any = useTranslation();

  const router = useRouter();

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
  ];

  return (
    <main className="px-48 pb-24 mt-8 relative">
      <div id="projects" className="absolute -top-36" />
      <div className="flex flex-col items-start">
        <h1 className="font-MPlusRegular tracking-wide text-black/10 uppercase mb-16 text-9xl antialiased">
          {t("projects")}
        </h1>
        <div className="grid grid-cols-4 gap-10 items-center">
          {list.map((item, index) => (
            <Card
              key={index}
              radius="sm"
              className="project-card rounded"
              shadow="sm"
              isPressable
              onPress={() => router.push(item.link)}
            >
              <Image
                alt={item.title}
                src={item.img}
                width={250}
                className="z-0 h-full object-cover rounded-none"
              />
              <CardFooter className="project-card-title justify-between h-10">
                <h6 className="text-black/80 font-medium text-md">
                  {item.title}
                </h6>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-end">
        <Link
          className="show-more-button flex flex-row border-1 border-black/20 justify-center text-default-500 h-15 py-2 px-8 mt-16 text-2xl rounded mb-0"
          href="projects"
        >
          <span className="show-more-button-text font-MPlusMedium text-black/40">
            {t("show all")}
          </span>

          <span className="show-more-button-arrow inline-block pl-2 transition-transform motion-reduce:transform-none">
            -&gt;
          </span>
        </Link>
      </div>
    </main>
  );
}
