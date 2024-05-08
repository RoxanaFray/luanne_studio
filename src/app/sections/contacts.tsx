import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button, Tooltip } from "@nextui-org/react";

export default function Header() {
  const { t }: any = useTranslation();

  const list1 = [
    {
      title: "Discord",
      img: "/images/contact_icons/discord_grey.svg",
      link: "#",
    },
    {
      title: "UpWork",
      img: "/images/contact_icons/upwork_grey.svg",
      link: "#",
    },
    {
      title: "Gmail",
      img: "/images/contact_icons/gmail_grey.svg",
      link: "#",
    },
    {
      title: "GitHub",
      img: "/images/contact_icons/github_grey.svg",
      link: "#",
    },
    {
      title: "LinkedIn",
      img: "/images/contact_icons/linkedin_grey.svg",
      link: "#",
    },
  ];

  const list = [
    {
      title: "Discord",
      img: "/images/contact_icons/discord_color.svg",
      link: "#",
    },
    {
      title: "UpWork",
      img: "/images/contact_icons/upwork_color.png",
      link: "#",
    },
    {
      title: "Gmail",
      img: "/images/contact_icons/gmail_color.svg",
      link: "#",
    },
    {
      title: "GitHub",
      img: "/images/contact_icons/github_filled.svg",
      link: "#",
    },
    {
      title: "LinkedIn",
      img: "/images/contact_icons/linkedin_color1.png",
      link: "#",
    },
  ];
  return (
    <main className="flex flex-col items-center pb-20">
      <div className="w-2/3 border-t-1 border-black/20 object-center p-8 pb-12" />
      {/* <div className="font-MPlusMedium pb-20 text-grey uppercase text-8xl tracking-widest text-center antialiased">
        Write us
      </div> */}
      <div className="grid grid-cols-5 items-center justify-between gap-8">
        {list.map((item, index) => (
          <Button variant="bordered" size="lg" key={index}>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
              src={item.img}
              alt={item.title}
              title={item.title}
              width={30}
              height={30}
              priority
            />
            <span>{item.title}</span>
          </Button>
        ))}
      </div>
    </main>
  );
}
