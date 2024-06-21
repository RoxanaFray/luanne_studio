import {Image} from "@nextui-org/image";
import {useTranslation} from "next-i18next";
import {Button, Tooltip} from "@nextui-org/react";

export default function Footer() {
    const {t} = useTranslation();
    const meansOfCommunication = [
        {
            title: "Discord",
            img: "/images/contact_icons/discord_color.svg",
            link: "https://discord.com/",
        },
        {
            title: "UpWork",
            img: "/images/contact_icons/upwork_color.png",
            link: "https://www.upwork.com/",
        },
        {
            title: "Gmail",
            img: "/images/contact_icons/gmail_color.svg",
            link: "https://mail.google.com/",
        },
        {
            title: "GitHub",
            img: "/images/contact_icons/github_filled.svg",
            link: "https://github.com/"
        },
        {
            title: "LinkedIn",
            img: "/images/contact_icons/linkedin_no_border.svg",
            link: "https://linkedin.com/",
        },
    ];

    return (
        <main id="contacts">
            <div className="w-full border-t-1 border-black/20 object-center pt-8 pb-12"/>
            <div className="flex flex-row items-stretch justify-start px-48 pb-20 gap-20">
                <h5 className="font-MPlusMedium tracking-wide text-black/10 uppercase text-7xl antialiased">
                    {t("connect_us")}
                </h5>
                <div className="flex items-center pl-12 justify-between gap-10">
                    {meansOfCommunication.map((item, index) => (
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
                                />
                            </Button>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </main>
    );
}
