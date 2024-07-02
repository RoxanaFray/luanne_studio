import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Avatar } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import TranslateButtons from "@/app/ui-components/translateButtons";

export default function Team() {
  const { t } = useTranslation();
  const teamList = [
    {
      name: "Alik",
      img: "/images/team_photoes/team_member_1.png",
      link: "@shrekfactory",
    },
    {
      name: "Sergey",
      img: "/images/team_photoes/team_member_2.png",
      link: "@gastar"
    },
    {
      name: "Tanya",
      img: "/images/team_photoes/team_member_3.png",
      link: "@roxanafray"
    },
    {
      name: "Liana",
      img: "/images/team_photoes/team_member_4.png",
      link: "@lulun"
    },
  ];

  return (
      <main className="w-full">
        <div id="team" className="absolute top-10"/>
        <div className="font-MPlusLight flex flex-col items-center sm:items-start px-8 sm:px-48">
          <div className="block sm:hidden absolute w-8 top-2 right-2">
            <TranslateButtons/>
          </div>
          <div className="block sm:hidden mt-16 py-0 px-2">
          <span
              className="text-black/60 uppercase font-MPlusRegular text-3xl">
            {t("luanne_studio")}
          </span>
          </div>
          <h1 className="hidden sm:inline font-MPlusRegular pt-28 sm:pt-36 tracking-wide text-black/15 uppercase text-5xl sm:text-9xl antialiased">
            {t("team")}
          </h1>
          <h5 className="text-xl sm:text-3xl mb-12 sm:mb-20 mt-8 sm:mt-16 max-w-full sm:max-w-4xl text-center sm:text-start text-black/70 leading-normal tracking-wide antialiased">
            {t("team_description")}
          </h5>
          <div className="gap-12 sm:gap-20 grid grid-cols-2 items-center sm:grid-cols-4">
            {teamList.map((item, index) => (
                <div className="flex flex-col items-center gap-1" key={index}>
                  <Avatar
                      isBordered
                      src={item.img}
                      className="w-50 h-50 text-large mb-5 "
                  />

                  <h4 className="font-bold text-large text-black/70">
                    {t(item.name)}
                  </h4>
                  <Link href="/projects" target="_blank" rel="noreferrer">
                    <small className="text-default-500 text-black/70 underline ">
                      {item.link}
                    </small>
                  </Link>
                </div>
            ))}
          </div>
        </div>
        <Divider className="hidden sm:block mt-16 mb-0 sm:my-16 w-full"/>
      </main>
  );
}
