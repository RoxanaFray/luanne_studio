import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Contacts from "./contacts";

export default function Header() {
const { t }: any = useTranslation();
return (
    <main className="flex flex-col items-center justify-between">
<div className="w-2/3 border-t-2 h-300 object-center">

<Contacts></Contacts>
</div>
      
    </main>
)}