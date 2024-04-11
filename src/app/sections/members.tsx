import Link from "next/link";
import { useTranslation } from "react-i18next";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";


export default function Members() {
const { t }: any = useTranslation();
// return (
    
//     <main>




//     </main>

//)

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

            <h1 className={`mb-5 text-5xl font-semibold`}>
                {t('team')}
            </h1>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
 </main> )
}