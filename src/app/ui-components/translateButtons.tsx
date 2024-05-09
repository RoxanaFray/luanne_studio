"use client";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../hooks/useLocalStorage";
import i18n from "../i18n";
import "../globals.css";
import { Button, ButtonGroup } from "@nextui-org/react";
import ScrollPosition from "@/utils/scrollPosition";
import PropTypes, { InferProps } from "prop-types";

export default function TranslateButtons({
  isHidden,
}: InferProps<typeof TranslateButtons.propTypes>) {
  const { t }: any = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "en");
  const changeLanguage = (lan: string) => {
    i18n.changeLanguage(lan);
    setLanguage(lan);
  };
  let scrollPosition = ScrollPosition();
  let buttonsAppearPos = 700;
  let backgroundOpacity = scrollPosition / buttonsAppearPos;
  let style: object = {
    opacity: backgroundOpacity,
  };
  let noStyle = {
    opacity: 1,
  };
  return (
    <div
      style={scrollPosition < buttonsAppearPos && isHidden ? style : noStyle}
      className="hidden lg:flex justify-end gap-1 fixed top-2 right-2"
    >
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

TranslateButtons.propTypes = {
  isHidden: PropTypes.bool,
};
