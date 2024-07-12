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
            className="block xl:hidden border-b-1 border-black/30 max-h-[100px] w-full z-40 bg-background-grey">
            {pathname != "/projects" &&
                <Button
                    isIconOnly
                    variant="bordered"
                    radius="full"
                    className="absolute left-6 top-4 sm:top-5 h-8 w-8 text-black/80 border-1 border-black/40"
                    size="sm"
                    onPress={()=> router.push("/projects")}
                >
                    <Image src="/images/svg/arrowbackwardgrey.svg" alt="Close Icon" width={14} height={14}/>
                </Button>

            }
            <div className="flex px-8 sm:px-12 grey-text flex-row items-center justify-center gap-10 sm:justify-center pt-3 pb-2">
                <Button
                    variant="light"
                    data-hover="hovered"
                    disableRipple={true}
                    className="border-1 border-black/40 rounded py-0 px-2 mb-1 mt-0"
                    onPress={() => router.push("/")}
                >
          <span
              className="text-typing text-black/60 uppercase font-MPlusRegular text-sm">
            {t("luanne_studio")}
          </span>
                </Button>
            </div>
            <div className="absolute w-8 top-4 sm:top-5 right-6 sm:right-12">
                <TranslateButtons/>
            </div>
        </main>
    );
}
