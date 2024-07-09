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
        <main
            className="border-b-1 border-black/30 relative xl:fixed max-h-[100px] xl:max-h-[120px] w-full z-40 bg-background-grey">
            <div className="hidden xl:flex px-8 xl:px-48 grey-text flex-row items-center justify-between pt-3 xl:pt-4 pb-2">
                <Button
                    variant="light"
                    data-hover="hovered"
                    disableRipple={true}
                    className="border-1 border-black/40 xl:border-black/70 rounded py-0 xl:py-1 px-2 mb-1 xl:mb-4 mt-0 xl:mt-2"
                    onPress={() => smoothScrollTo("top_point")}
                >
          <span
              className="text-typing text-black/60 uppercase font-MPlusRegular xl:font-MPlusMedium text-sm xl:text-lg">
            {t("luanne_studio")}
          </span>
                </Button>
                <div className="hidden xl:flex flex-row items-end gap-10 pt-4">
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
            </div>
            <div className="absolute w-8 xl:w-16 xl:h-12 top-2 xl:top-7 right-2 xl:right-3">
                <TranslateButtons/>
            </div>
        </main>
    );
}
