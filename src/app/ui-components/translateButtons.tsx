"use client";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../hooks/useLocalStorage";
import i18n from "../i18n";
import "../globals.css";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function Home() {
  const { t }: any = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "en");

  const changeLanguage = (lan: string) => {
    i18n.changeLanguage(lan);
    setLanguage(lan);
  };
  return (
    <div className="hidden lg:flex justify-end gap-1 fixed top-2 right-2">
      <Button
        className=""
        isIconOnly
        variant="faded"
        onClick={() => changeLanguage("ru")}
      >
        <small className="font-MPlusMedium text-default-500 text-black/70">
          {t("russian")}
        </small>
      </Button>
      <Button
        className=""
        isIconOnly
        variant="faded"
        onClick={() => changeLanguage("en")}
      >
        <small className="font-MPlusMedium text-default-500 text-black/70">
          {t("english")}
        </small>
      </Button>
    </div>
  );
}