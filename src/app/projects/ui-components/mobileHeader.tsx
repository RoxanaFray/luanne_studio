"use client";
import {useTranslation} from "next-i18next";
import {Button} from "@nextui-org/button";
import TranslateButtons from "../../ui-components/translateButtons";
import {usePathname, useRouter} from "next/navigation";
import {Image} from "@nextui-org/image";
import React from "react";

export default function MobileHeader() {
    const {t} = useTranslation();
    const router = useRouter();
    const pathname = usePathname();

    return (
        <main
            className="block xl:hidden fixed top-0 left-0 border-b-1 border-black/30 h-[75px] w-screen z-40 bg-background-grey px-8 sm:px-12 md:px-20 lg:px-24">
            {pathname != "/projects" &&
                <Button
                    isIconOnly
                    variant="bordered"
                    radius="sm"
                    className="absolute top-5 sm:top-5 h-8 w-8 px-2 py-3 text-black/80 border-1 border-black/40"
                    size="sm"
                    onPress={()=> router.push("/projects")}
                >
                    <Image src="/images/svg/arrowbackwardgrey.svg" alt="Close Icon" width={14} height={14}/>
                </Button>

            }
            <div className="flex px-8 sm:px-12 grey-text flex-row items-center justify-center gap-10 sm:justify-center pt-4 pb-4">
                <Button
                    variant="light"
                    radius="sm"
                    data-hover="hovered"
                    disableRipple={true}
                    className="border-1 border-black/40 py-0 px-4 mb-1 mt-0"
                    onPress={() => router.push("/")}
                >
          <span
              className="text-typing text-black/60 uppercase font-MPlusRegular text-sm">
            {t("hog_sheep_studio")}
          </span>
                </Button>
            </div>
            <div className="absolute w-8 top-5 sm:top-5 right-8 sm:right-12 md:right-20 lg:right-24">
                <TranslateButtons/>
            </div>
        </main>
    );
}
