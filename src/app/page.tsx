"use client";
import Header from "./sections/header";
import Projects from "./sections/projects";
import Team from "./sections/about_us";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./sections/footer";
import Contacts from "./sections/contacts";

import { Button, ButtonGroup } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="">
        <div id="top_point" className="absolute top-0" />
        <Header></Header>
        <Team></Team>
        <Projects></Projects>
        {/* <Contacts /> */}
        <Footer></Footer>
      </main>
    </NextUIProvider>
  );
}
