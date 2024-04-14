import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Link } from "@nextui-org/react";

export default function Contacts() {
    const { t }: any = useTranslation();
    const list = [
        {
            title: "Discord",
            img: "/images/contact_icons/discord_color.svg",
            link: "#"
        },
        {
            title: "UpWork",
            img: "/images/contact_icons/upwork_outline.svg",
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
            img: "/images/contact_icons/linkedin_outline.svg",
            link: "#"
        },
    ];

    return (

        <main className="flex flex-col items-center p-24">

            <h4 className={`mb-20 text-xl`}>
                {t('contacts')}
            </h4>

            <div className="flex items-center justify-between gap-10">
            {list.map((item, index) => (
                <Link href={item.link} color="foreground">
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
                        src={item.img}
                        alt={item.title}
                        width={50}
                        height={50}
                        priority
                    />
                </Link>
            ))}

            </div>
        </main>

    )
}