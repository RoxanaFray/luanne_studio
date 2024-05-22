"use client";
import i18n from "../i18n";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation } from "next-i18next";
import "../globals.css";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

export default function TranslateDropdown() {
  const { t }: any = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "en");
  const changeLanguage = (lan: string) => {
    i18n.changeLanguage(lan);
    setLanguage(lan);
  };
  const list = [
    {
      label: "EN",
      value: "en",
    },

    {
      label: "RU",
      value: "ru",
    },
  ];
  const list1 = ["en", "ru"];
  console.log("1", list);
  console.log("2", ["en"]);
  return (
    <div className="hidden lg:flex justify-end gap-1 fixed top-2 right-2 w-28">
      <Select
        aria-label="Language"
        defaultSelectedKeys={["en"]}
        disallowEmptySelection={true}
        className="max-w-lg"
        isRequired
      >
        {list.map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
