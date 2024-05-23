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
    <div className="hidden lg:flex flex-col justify-end absolute gap-2">
      <Button
        isIconOnly
        onClick={() => openSelect(!isSelectOpened)}
        variant="solid"
        data-hover="hovered"
        disableRipple={true}
        className="border-1 border-black/20 w-12 rounded px-2 bg-gray-50"
        size="md"
      >
        <span className="font-MPlusMedium text-xs text-black/50 pr-2">
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
      {lans.map((item, index) => (
        <Button
          key={index}
          className={
            isSelectOpened && item != language
              ? "block border-1 border-black/20 w-12 rounded px-2 pr-6 lan-button bg-gray-50"
              : "hidden"
          }
          isIconOnly
          variant="solid"
          data-hover="hovered"
          disableRipple={true}
          size="md"
          onClick={() => changeLanguage(item)}
        >
          <span className="font-MPlusMedium text-xs text-black/50">
            {t(item)}
          </span>
        </Button>
      ))}
    </div>
  );
}
