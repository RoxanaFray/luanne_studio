import {Image} from "@nextui-org/image";
import {useTranslation} from "next-i18next";
import {Button, Tooltip} from "@nextui-org/react";
import screenWidth from "@/app/utils/screenWidth";
import {useEffect, useState} from "react";

export default function Footer() {
    const {t} = useTranslation();
    const widthOfScreen= screenWidth();
    const sm = 640;
    const [width, setWidth] = useState(widthOfScreen);

    useEffect(() => {
        setWidth(widthOfScreen)
    }, [widthOfScreen]);

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
            <div className="w-full border-t-1 border-black/10 object-center pt-8 pb-4 sm:pb-12"/>
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-start px-8 h-fit sm:h-auto sm:px-48 mb-56 sm:mb-20 gap-12 sm:gap-20">
                <h5 className="hidden sm:block font-MPlusMedium tracking-wide text-black/10 uppercase text-5xl sm:text-7xl antialiased">
                    {t("connect_us")}
                </h5>
                <div className="flex flex-row items-center sm:items-center sm:pl-12 justify-between gap-5 sm:gap-10">
                    {meansOfCommunication.map((item, index) => (
                        <Tooltip content={item.title} key={index}>
                            <Button
                                isIconOnly
                                variant="solid"
                                className="w-14 sm:w-16 h-14 sm:h-16  justify-center gap-7 sm:gap-0 border-1 border-black/10 bg-white/50"
                                size="lg"
                            >
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
                                    radius="none"
                                    src={item.img}
                                    alt={item.title}
                                    title={item.title}
                                    width={width < sm ? 30 : 40}
                                    height={width < sm ? 30 : 40}
                                />
                            </Button>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </main>
    );
}
