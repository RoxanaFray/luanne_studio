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
            link: "#"
        },
        {
            title: "UpWork",
            img: "/images/contact_icons/upwork_grey.svg",
            link: "#"
        },
        {
            title: "Gmail",
            img: "/images/contact_icons/gmail_grey.svg",
            link: "#"
        },
        {
            title: "GitHub",
            img: "/images/contact_icons/github_grey.svg",
            link: "#"
        },
        {
            title: "LinkedIn",
            img: "/images/contact_icons/linkedin_grey.svg",
            link: "#"
        },
    ];

    const list = [
        {
            title: "Discord",
            img: "/images/contact_icons/discord_color.svg",
            link: "#"
        },
        {
            title: "UpWork",
            img: "/images/contact_icons/upwork_color.png",
            link: "#"
        },
        {
            title: "Gmail",
            img: "/images/contact_icons/gmail_color.svg",
            link: "#"
        },
        {
            title: "GitHub",
            img: "/images/contact_icons/github_filled.svg",
            link: "#"
        },
        {
            title: "LinkedIn",
            img: "/images/contact_icons/linkedin_color1.png",
            link: "#"
        },
    ];
    return (
        <main className="flex flex-col items-center pb-20">
            <div className="w-2/3 border-t-2 border-grey object-center p-8" />
            <div className="flex items-center justify-between gap-10">
                {list.map((item, index) => (
                    <Tooltip content={item.title}>
                        <Button isIconOnly variant="solid" className="bg-light-grey" size="lg">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
                                src={item.img}
                                alt={item.title}
                                title={item.title}
                                width={30}
                                height={30}
                                priority
                            />
                        </Button>
                    </Tooltip>

                ))}
            </div>
        </main>
    )
}