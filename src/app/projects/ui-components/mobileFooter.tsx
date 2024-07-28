"use client";
import {useTranslation} from "next-i18next";
import {Button} from "@nextui-org/button";
import {usePathname, useRouter} from "next/navigation";
import React from "react";
import {Divider} from "@nextui-org/divider";

export default function MobileFooter(props: mobileFooterProps) {
    const {t} = useTranslation();
    const pathname = usePathname();

    return (
        pathname != "/projects" &&
        <main className="block xl:hidden w-screen h-16 fixed bg-light-background bottom-0 left-0 z-40">
            <Divider className="w-full"></Divider>
            <div className="flex flex-row justify-between mx-8 sm:mx-12 md:mx-20 lg:mx-24">
                <Button
                    radius="full"
                    variant="bordered"
                    className="xl:hidden mt-4 mb-4 border-1 border-black/30"
                    onPress={props.showPrevGame}
                >
                    <span className="font-MPlusRegular text-black/50">Previous</span>
                </Button>
                <Button
                    radius="full"
                    variant="bordered"
                    className="flex flex-col xl:hidden mt-4 mb-4 border-1 border-black/30"
                    onPress={props.showNextGame}
                >
                    <span className="font-MPlusRegular text-black/50">Next</span>
                </Button>
            </div>
        </main>
    );
}

interface mobileFooterProps {
    showPrevGame: () => void;
    showNextGame: () => void;
}
