import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t }: any = useTranslation();
  const list = [
    {
      title: "About us",
      id: "about_us",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Contacts",
      id: "contacts",
    },
  ];

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      block: "start",
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <main className="border-b-1 border-black/30 fixed max-h-[120px] w-full z-40 bg-background-grey">
      <div className="flex px-48 grey-text flex-row items-center justify-between pt-4 pb-2">
        <button
          className="border-1 border-black/70 rounded py-1 px-2 mb-4 mt-2"
          onClick={() => smoothScrollTo("about_us")}
        >
          <span className="text-typing text-black/60 uppercase font-MPlusMedium text-lg">
            Luanne Studio
          </span>
        </button>
        <div className="flex flex-row items-end gap-10 pt-4">
          {list.map((item, index) => (
            <button
              onClick={() => smoothScrollTo(item.id)}
              className=""
              key={index}
            >
              <span className="text-black/30 uppercase font-MPlusBold text-xl">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
