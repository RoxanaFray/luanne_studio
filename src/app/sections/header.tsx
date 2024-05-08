import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import ScrollPosition from "@/utils/scrollPosition";

export default function Header() {
  const { t }: any = useTranslation();
  let scrollPosition = ScrollPosition();
  console.log("scrollPosition", scrollPosition);
  let buttonsAppearPos = 700;
  function hideTranslateButtons() {
    let backgroundOpacity = 1 - scrollPosition / buttonsAppearPos;
    let style = {
      opacity: backgroundOpacity,
    };
    let hidingBlock = (
      <div
        style={style}
        className="hiding-block w-24 z-10 h-10 lg:flex justify-end gap-1 fixed top-2 right-2 bg-background-grey"
      />
    );
    console.log("BO", backgroundOpacity);
    return hidingBlock;
  }
  return (
    <main className="flex grey-text flex-col items-center p-4 max-h-[850px]">
      {/* <div className="relative flex-column justify-center place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-yellow after:via-[#fcf3d5] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] after:top-72 z-[1]"> */}
      {scrollPosition < buttonsAppearPos ? hideTranslateButtons() : <div />}
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert pt-16"
        src="/images/logo_no_color_grey.png"
        alt="LuanneStudio logo"
        width={550}
        height={550}
        priority
      />
      <div className="flex justify-center border-2 border-black/70 rounded-2xl py-7 px-12 mt-4 content-center mx-auto ">
        <span className="text-typing text-black/70 uppercase font-MPlusRegular text-6xl">
          Luanne Studio
        </span>
      </div>
      {/* </div> */}
    </main>
  );
}
