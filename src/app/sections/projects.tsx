import Link from "next/link";
import { useTranslation } from "react-i18next";

import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";

export default function Projects() {
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
  ];

  function openProjects() {}
  return (
    <main className="flex flex-col items-center pb-28">
      <h1 className="font-MPlusRegular text-black/70 uppercase mb-36 text-5xl antialiased">
        {t("projects")}
      </h1>
      <div className="grid grid-cols-4 gap-10">
        {list.map((item, index) => (
          <Card
            isFooterBlurred
            key={index}
            radius="lg"
            className="project-card border-none"
          >
            <Link href={item.link} className="h-full project-link relative">
              <Image
                alt={item.title}
                src={item.img}
                width={250}
                className="z-0 h-full object-cover"
              />
              <CardFooter className="justify-center h-10 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                {/* <p className="font-MPlusBold text-primary-800 text-sm text-white/80"> */}
                <h6 className="text-white/80 font-medium text-md">
                  {item.title}
                </h6>

                {/* </p> */}
                {/* <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm"> */}
                {/* <span className="font-MPlusBold">{t("more")}</span>
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span> */}
                {/* </Button> */}
              </CardFooter>
              <div className="hover-cover absolute bg-white/20 w-full h-full top-0 hidden">
                {/* <span className="px-24 py-12 text-3xl font-MPlusMedium">
                  Show More
                </span> */}
              </div>
            </Link>
          </Card>
          // <Card
          //   shadow="sm"
          //   key={index}
          //   isPressable
          //   onPress={() => console.log("item pressed")}
          // >
          //   <CardBody className="overflow-visible p-0">
          //     <Image
          //       shadow="sm"
          //       radius="lg"
          //       width="100%"
          //       alt={item.title}
          //       className="w-full object-cover h-[140px]"
          //       src={item.img}
          //     />
          //   </CardBody>
          //   <CardFooter className="text-small justify-between">
          //     <b>{item.title}</b>
          //   </CardFooter>
          // </Card>
          // <Card isFooterBlurred key={index} className="w-full h-[280px] ">
          //   <Image
          //     removeWrapper
          //     alt="Card example background"
          //     className="z-0 w-full h-full object-cover"
          //     src={item.img}
          //   />
          //   <CardFooter className="absolute content-center bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
          //     <div>
          //       <h6 className="text-white font-medium text-lg">{item.title}</h6>
          //     </div>
          //   </CardFooter>
          // </Card>
        ))}
      </div>
      <Link
        className="show-more-button text-default-500 mt-32 px-10 py-2 bg-light-grey text-lg rounded-xl"
        href="projects"
      >
        <span className="show-more-button-text font-MPlusMedium text-black/60">
          {t("show all")}
        </span>

        <span className="show-more-button-arrow inline-block pl-2 transition-transform motion-reduce:transform-none">
          -&gt;
        </span>
      </Link>
    </main>
  );
}
