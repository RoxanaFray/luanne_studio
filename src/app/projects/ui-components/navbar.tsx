import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function NavBar() {
  const { t }: any = useTranslation();

  const list = [
    {
      title: t("game-1 title"),
      img: "/images/B4.jpg",
      description: t("game-1 description"),
      link: "projects",
    },
    {
      title: t("game-2 title"),
      img: "/images/run_use_gun.jpg",
      description: t("game-2 description"),
      link: "projects",
    },
    {
      title: t("game-3 title"),
      img: "/images/summon.png",
      description: t("game-3 description"),
      link: "projects",
    },
    {
      title: t("game-4 title"),
      img: "/images/B5.jpg",
      description: t("game-4 description"),
      link: "projects",
    },
    {
      title: t("game-5 title"),
      img: "/images/rick.jpg",
      description: t("game-5 description"),
      link: "projects",
    },
  ];

  return (
    <main>
      <div className="w-1/5 ">
        <Navbar className="h-screen shadow-xl border-2">
          {/* <NavbarBrand>
            <p className="font-MPlusRegular text-3xl">LUANNE STUDIO</p>
          </NavbarBrand> */}
          <NavbarContent
            className="hidden sm:flex flex-col gap-4"
            justify="center"
          >
            {list.map((item, index) => (
              <NavbarItem key={index}>
                <Link
                  color="foreground"
                  className="flex flex-row"
                  href={item.link}
                >
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                  {item.title}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </Navbar>
      </div>
    </main>
  );
}
