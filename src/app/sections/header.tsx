"use client";
import {useTranslation} from "next-i18next";
import {Button} from "@nextui-org/button";
import TranslateButtons from "../ui-components/translateButtons";

export default function Header() {
    const {t} = useTranslation();
    const menuItems = ["team", "projects", "contacts"]

    const smoothScrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    };

    return (
        <main className="border-b-1 border-black/30 fixed max-h-[100px] sm:max-h-[120px] w-full z-40 bg-background-grey">
            <div className="flex px-8 sm:px-48 grey-text flex-row items-center justify-between pt-3 sm:pt-4 pb-2">
                <Button
                    variant="light"
                    data-hover="hovered"
                    disableRipple={true}
                    className="border-1 border-black/40 sm:border-black/70 rounded py-0 sm:py-1 px-2 mb-1 sm:mb-4 mt-0 sm:mt-2"
                    onPress={() => smoothScrollTo("top_point")}
                >
          <span className="text-typing text-black/60 sm:text-black/60 uppercase font-MPlusRegular sm:font-MPlusMedium text-sm sm:text-lg">
            {t("luanne_studio")}
          </span>
                </Button>
                <div className="hidden sm:flex flex-row items-end gap-10 pt-4">
                    {menuItems.map((item, index) => (
                        <Button
                            variant="light"
                            onClick={() => smoothScrollTo(item)}
                            disableRipple={true}
                            data-hover="hovered"
                            key={index}
                        >
              <span className="text-black/30 uppercase font-MPlusBold text-xl">
                {t(item)}
              </span>
                        </Button>
                    ))}
                </div>
                <div className="absolute w-16 sm:h-12 top-4 sm:top-7 right-3">
                    <TranslateButtons/>
                </div>
            </div>
        </main>
    );
}
