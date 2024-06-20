import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import projectsList from "../../strings/gamesArray.json"

export default function GameList() {
  const { t }: any = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <main>
      {projectsList.map((item, index) => (
        <Button
          key={index}
          variant="light"
          radius="none"
          className={clsx(
            "flex flex-row items-start font-MPlusLight justify-start w-full pl-0 relative project-link min-h-16 project-card border-b-1 ",
            {
              "bg-background-grey font-MPlusMedium": pathname === item.link,
            },
          )}
          onPress={() => router.push(item.link)}
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
          <span className=" text-black/70 p-4 pt-5 text-md"> {t(item.title)}</span>
          <div className="hover-cover absolute bg-grey/5 rounded w-full h-full top-0 hidden" />
        </Button>
      ))}
    </main>
  );
}
