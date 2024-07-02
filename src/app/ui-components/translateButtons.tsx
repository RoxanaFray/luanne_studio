"use client";
import i18n from "../i18n";
import useLocalStorage from "@/app/utils/useLocalStorage";
import { useTranslation } from "next-i18next";
import "../globals.css";
import { Button } from "@nextui-org/react";
import { useState, useEffect  } from "react";
import screenWidth from "@/app/utils/screenWidth";

export default function TranslateButtons() {
  const { t } = useTranslation();
  const langs : Array<"ru" | "en"> = ["ru", "en"];
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [isSelectOpened, openSelect] = useState(false);
  const widthOfScreen= screenWidth();
  const sm = 640;
  const [width, setWidth] = useState(widthOfScreen);

  useEffect(() => {
    setWidth(widthOfScreen)
  }, [widthOfScreen]);

  const changeLanguage = (lan: string) => {
    i18n.changeLanguage(lan);
    setLanguage(lan);
    openSelect(false);
  };

  document.addEventListener("mousedown", () => openSelect(false));

  return (
    <div className="absolute">
      <Button
        isIconOnly
        variant="light"
        data-hover="hovered"
        onPress={() => openSelect(!isSelectOpened)}
        size={width < sm ? "sm" : "md"}
        className="hidden sm:flex border-1 border-black/20 w-12 h-10 rounded px-4 py-0"
      >
        <span className="font-MPlusRegular sm:font-MPlusMedium text-xs text-black/50 pr-2 tracking-wider">
          {t(language)}
        </span>
        <span
          id="arrow"
          className={
            (isSelectOpened ? "rotated-up" : "rotated-down") +
            " text-xs text-black/50"
          }
        >
          ❮
        </span>
      </Button>
      <Button
          isIconOnly
          variant="light"
          data-hover="hovered"
          onPress={() => changeLanguage(language == "en" ? "ru" : "en")}
          size={width < sm ? "sm" : "md"}
          className="flex sm:hidden border-1 border-black/20 w-8 h-8 rounded-md pl-2 py-3"
      >
        <span className="font-MPlusRegular sm:font-MPlusMedium text-xs text-black/50 pr-2 tracking-wider">
          {t(language == "en" ? "ru" : "en")}
        </span>
      </Button>
      {langs.map((item, index) => (
        <Button
          key={index}
          className={
            isSelectOpened && item != language
              ? `block border-1 border-black/20 w-12 h-10 rounded pl-2 pr-6 lan-button bg-background-grey`
              : "hidden"
          }
          isIconOnly
          data-hover="hovered"
          variant="light"
          disableRipple={true}
          size="md"
          onClick={() => changeLanguage(item)}
        >
          <span className="font-MPlusMedium text-xs text-black/50 tracking-wider">
            {t(item)}
          </span>
        </Button>
      ))}
    </div>
  );
}
