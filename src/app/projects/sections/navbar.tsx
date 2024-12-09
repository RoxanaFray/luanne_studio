import React from "react";
import { useTranslation } from "react-i18next";
import { Divider } from "@nextui-org/divider";
import GameList from "../ui-components/gameList";
import { ScrollShadow } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import HoverBlock from "@/app/utils/hoverBlock";

export default function NavBar() {
  const { t }  = useTranslation();
  const router = useRouter();

  return (
    <main className="navbar basis-1/5 z-10">
      <div className="h-screen shadow-xl border-1 border-grey-border bg-light-background">
        <div className="hidden sm:flex flex-col w-full items-center h-screen justify-center">
          <Button
            variant="light"
            data-hover="hoverable"
            disableRipple={true}
            className="border-1 border-black/70 rounded py-1 px-2 mb-8 mt-8"
            onPress={() => router.push("/")}
          >
              <HoverBlock/>
            <span className="text-black/60 uppercase font-MPlusMedium text-lg">
              {t("hog_sheep_studio")}
            </span>
          </Button>
          <Divider className="w-full p-0" />
          <ScrollShadow className="h-full w-full bg-light-background">
            <GameList/>
          </ScrollShadow>
        </div>
      </div>
    </main>
  );
}
