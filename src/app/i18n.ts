"use client";
import i18n from "i18next";
import en from "./strings/en.json";
import ru from "./strings/ru.json";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

let localLan = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources,
  lng: localLan ? JSON.parse(localLan) : "en",
  fallbackLng: "en",
});

export default i18n;
