"use client";
import Header from "./sections/header";
import Projects from "./sections/projects";
import Team from "./sections/team";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./sections/footer";
import { useEffect } from 'react';

export default function Home() {
    useEffect(() =>
    {
        document.body.classList.add("w-fit");
    }, []);
  return (
    <NextUIProvider>
      <main className="">
        <div id="top_point" className="absolute top-0" />
        <Header></Header>
        <Team></Team>
        <Projects></Projects>
        <Footer></Footer>
      </main>
    </NextUIProvider>
  );
}
