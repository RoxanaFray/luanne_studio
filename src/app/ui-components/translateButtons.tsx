"use client";
import i18n from "../i18n";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation } from "next-i18next";
import "../globals.css";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function TranslateButtons() {
  const { t }: any = useTranslation();

  const lans = ["ru", "en"];

  const [language, setLanguage] = useLocalStorage("language", "en");
  const [isSelectOpened, openSelect] = useState(false);

  const changeLanguage = (lan: string) => {
    i18n.changeLanguage(lan);
    setLanguage(lan);
    openSelect(false);
  };

  document.addEventListener("mousedown", () => openSelect(false));

  return (
    <div className="hidden lg:flex flex-col justify-end fixed gap-1 top-8 right-8">
      <Button
        isIconOnly
        onClick={() => openSelect(!isSelectOpened)}
        variant="light"
        data-hover="hovered"
        disableRipple={true}
        className="border-1 border-black/50 w-12 rounded py-1 px-2"
      >
        <span className="font-MPlusMedium text-xs text-default-500 text-black/80 pr-2">
          {t(language)}
        </span>
        <span
          id="arrow"
          className={
            (isSelectOpened ? "rotated-up" : "rotated-down") +
            " font-MPlusMedium select-arrow-down text-xs text-default-500 text-black/80"
          }
        >
          ❮
        </span>
      </Button>
      {lans.map((item, index) => (
        <Button
          key={index}
          className={
            isSelectOpened && item != language
              ? "block border-1 border-black/50 w-12 rounded py-1 px-2 pr-6 bg-background-grey "
              : "hidden"
          }
          isIconOnly
          variant="solid"
          data-hover="hovered"
          disableRipple={true}
          onClick={() => changeLanguage(item)}
        >
          <span className="font-MPlusMedium text-xs text-default-500 text-black/80">
            {t(item)}
          </span>
        </Button>
      ))}
    </div>
  );
}
