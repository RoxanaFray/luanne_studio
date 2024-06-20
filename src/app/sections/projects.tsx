import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";

import React from "react";
import {
  Card,
  CardFooter,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";
import projectsList from "../strings/gamesArray.json"

export default function Projects() {
  const { t }: any = useTranslation();
  const maxGamesAmount = 4;
  const router = useRouter();

  return (
    <main className="px-48 pb-32 mt-24 relative">
      <div id="projects" className="absolute -top-44" />
      <div className="flex flex-col items-start">
        <div className="flex flex-row justify-between w-full items-center">
          <h1 className="font-MPlusRegular tracking-wide text-black/10 uppercase mb-24 text-9xl antialiased">
            {t("projects")}
          </h1>
          <Button
            variant="light"
            data-hover="hovered"
            onPress={() => router.push("projects")}
            size="lg"
            className="text-black/30 font-MPlusMedium text-xl border-2 rounded-md tracking-wider px-4"
          >
            View all
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-10 items-center">
          {projectsList.map((item, index) => (
            index < maxGamesAmount && <Card
              key={index}
              shadow="sm"
              isPressable
              onPress={() => router.push(item.link)}
              className="rounded-md"
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={t(item.title)}
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  src={item.img}
                  className="project-card-image w-full rounded-sm object-cover max-h-[260px] "
                />
              </CardBody>
              <CardFooter className="project-card-title justify-between h-12">
                <h6 className="text-black/80 font-medium text-md">
                  {t(item.title)}
                </h6>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
