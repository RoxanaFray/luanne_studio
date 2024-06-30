"use client";
import i18n from "../i18n";
import useLocalStorage from "@/app/utils/useLocalStorage";
import { useTranslation } from "next-i18next";
import "../globals.css";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function TranslateButtons() {
  const { t } = useTranslation();
  const langs : Array<"ru" | "en"> = ["ru", "en"];
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [isSelectOpened, openSelect] = useState(false);

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
        size="md"
        className="text-black/10 border-1 font-MPlusMedium text-sm w-12 border-black/20 rounded tracking-wider px-4 py-0"
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
      {langs.map((item, index) => (
        <Button
          key={index}
          className={
            isSelectOpened && item != language
              ? `block border-1 border-black/20 w-12 rounded px-2 pr-6 lan-button bg-background-grey`
              : "hidden"
          }
          isIconOnly
          data-hover="hovered"
          variant="light"
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
