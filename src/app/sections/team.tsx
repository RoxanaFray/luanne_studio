import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import {User} from "@nextui-org/react";


export default function Team() {
  const { t }: any = useTranslation();
  const list = [
    {
      title: "Orange",
      img: "/images/rick.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/morty.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/jerry.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/morty.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/rick.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/jerry.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/morty.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/rick.jpg",
      price: "$12.20",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <h1 className={`mb-20 text-5xl`}>
        {t('team')}
      </h1>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <User   
          name={item.title}
          description="Product Designer"

          avatarProps={{
            src: item.img,
          }}
        />
        ))}
      </div>
    </main>)
}