"use client";
import i18n from "../i18n";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation } from "next-i18next";
import "../globals.css";
import { Button, ButtonGroup, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Arrow from "../../utils/arrow.svg";

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

  const moveSelect = () => {
    const element = document.getElementById("arrow1");
    element?.classList.add("rotated");
  };

  return (
    <div className="hidden lg:flex flex-col justify-end fixed gap-1 top-8 right-8">
      <Button
        isIconOnly
        onClick={moveSelect}
        variant="light"
        data-hover="hovered"
        disableRipple={true}
        className="border-1 border-black/50 w-16 rounded py-1 px-2"
      >
        <span className="font-MPlusMedium text-xs text-default-500 text-black/80 pr-2">
          {t(language)}
        </span>
        {/* {isSelectOpened ? ( */}
        <span
          id="arrow"
          className="arrow-s font-MPlusMedium select-arrow-down text-xs text-default-500 text-black/80 rotate-90"
        >
          ❮
        </span>
        {/* ) : (
          <span
            id="arrow1"
            className="arrow-s font-MPlusMedium select-arrow-up text-xs text-default-500 text-black/80 rotate-90"
          >
            ❯ */}
        {/* </span> */}
        {/* )} */}
      </Button>
      {lans.map((item, index) =>
        item == language ? (
          <div key="index" />
        ) : (
          <Button
            key={index}
            className={
              isSelectOpened
                ? "block border-1 border-black/40 rounded py-1 px-2 bg-background-grey"
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
        ),
      )}
    </div>
  );
}
