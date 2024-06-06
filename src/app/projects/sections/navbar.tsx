import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import GamesList from "../ui-components/gamesList";
import { ScrollShadow } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { t }: any = useTranslation();
  const router = useRouter();

  return (
    <main className="navbar basis-1/5 ">
      <div className="h-screen shadow-xl border-1 border-grey-border bg-light-background">
        <div className="hidden sm:flex flex-col w-full items-center h-screen justify-center">
          <Button
            variant="light"
            data-hover="hovered"
            disableRipple={true}
            className="border-1 border-black/70 rounded py-1 px-2 mb-8 mt-8"
            onPress={() => router.push("/")}
          >
            <span className="text-black/60 uppercase font-MPlusMedium text-lg">
              Luanne Studio
            </span>
          </Button>
          <Divider className="w-full p-0" />
          <ScrollShadow className="h-full w-full bg-light-background">
            <GamesList></GamesList>
          </ScrollShadow>
        </div>
      </div>
    </main>
  );
}
