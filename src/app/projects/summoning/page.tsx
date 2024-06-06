"use client";
import { useTranslation } from "react-i18next";
import TranslateButtons from "../../ui-components/translateButtons";
import GameDescription from "../sections/gameDescription";
import Navbar from "../sections/navbar";
import { useState } from "react";

export default function Page() {
  const { t }: any = useTranslation();

  const [pickedGame, setGame] = useState(null);
  let setActiveGame = (game) => {
    console.log("active game is: ", pickedGame);
    setGame(game);
  };
  return (
    <main className="flex flex-row">
      <Navbar />
      <GameDescription />
    </main>
  );
}
