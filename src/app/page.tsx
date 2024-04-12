
'use client'
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "./hooks/useLocalStorage";
import i18n from "./i18n";
import Header from "./sections/header";
import Projects from "./sections/projects";
import Team from "./sections/team";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {

  const { t }: any = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en')

  const changeLanguage = (lan: string) => {
    i18n.changeLanguage(lan);
    setLanguage(lan);
  }

  return (
    <NextUIProvider>
      <main className="">
        <div className="hidden lg:flex justify-end ">
          <button className="m-3" onClick={() => changeLanguage('ru')}>{t('russian')}</button>
          <button className="m-3" onClick={() => changeLanguage('en')}>{t('english')}</button>
        </div>
        <Header></Header>
        <Projects></Projects>
        <Team></Team>
      </main>
    </NextUIProvider>
  );
}
