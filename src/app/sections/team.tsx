import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Avatar } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

export default function Team() {
  const { t } = useTranslation();
  const teamList = [
    {
      name: "Alik",
      img: "/images/team_photoes/Alik-1.jpg",
      link: "@shrekfactory",
    },
    {
      name: "Sergey",
      img: "/images/team_photoes/Sergey-3.jpg",
      link: "@gastar"
    },
    {
      name: "Liana",
      img: "/images/team_photoes/Liana-3.jpg",
      link: "@lulun"
    },
      {
          name: "Tanya",
          img: "/images/team_photoes/Tanya-4.jpg",
          link: "@roxxxana"
      }
  ];

  return (
      <main className="w-full">
        <div id="team" className="absolute top-10"/>
        <div className="font-MPlusLight flex flex-col items-center xl:items-start px-8 sm:px-12 xl:px-28 xl:container xl:mx-auto">
          <div className="block xl:hidden mt-16 sm:mt-20 md:mt-24 py-0 px-2 w-full text-center">
          <span
              className="text-black/15 uppercase leading-tight font-MPlusBold text-5xl sm:text-6xl lg:text-7xl sm:tracking-widest">
            {t("hog_sheep_studio")}
          </span>
              <Divider className="mt-4 sm:mt-8"/>
          </div>
          <h1 className="hidden xl:inline font-MPlusRegular pt-28 xl:pt-36 tracking-wide text-black/15 uppercase text-5xl xl:text-9xl antialiased">
            {t("team")}
          </h1>
          <h5 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl mb-12 sm:mb-16 lg:mb-20 xl:mb-20 mt-8 sm:mt-12 lg:mt-16 xl:mt-16 max-w-full text-center xl:text-start text-black/70 leading-normal tracking-wide antialiased">
            {t("team_description")}
          </h5>
          <div className="gap-12 xl:gap-20 grid grid-cols-2 items-center sm:grid-cols-4">
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
        <Divider className="hidden xl:block mt-16 mb-0 xl:my-16 w-full"/>
      </main>
  );
}
