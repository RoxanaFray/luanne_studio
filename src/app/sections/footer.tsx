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
    <main id="contacts">
      <div className="w-full border-t-1 border-black/20 object-center pt-8 pb-12" />
      <div className="flex flex-row items-center justify-start px-48 pb-20">
        {/* <h1 className="font-MPlusRegular tracking-wide text-black/10 uppercase mb-16 text-9xl antialiased">
          Connect us
        </h1> */}
        <h5 className="font-MPlusMedium tracking-wide text-black/10 uppercase text-7xl antialiased pr-12">
          Connect us
        </h5>
        <div className="flex items-center pl-12 justify-between gap-10">
          {list.map((item, index) => (
            <Tooltip content={item.title} key={index}>
              <Button
                isIconOnly
                variant="solid"
                className="w-16 h-16 bg-light-grey"
                size="lg"
              >
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
                  src={item.img}
                  alt={item.title}
                  title={item.title}
                  width={45}
                  height={45}
                  priority
                />
              </Button>
            </Tooltip>
          ))}
        </div>
      </div>
    </main>
  );
}
