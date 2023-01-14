import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Button from "../components/molecols/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fuck Humans 🖕🏻 | CARDS AGAINST HUMANITY</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[black] flex flex-col justify-center items-center h-screen">
        <h1 className="text-[50px] font-bold w-full text-center text-[white] p-2">
          THIS IS CARDS AGAINST HUMANITY 🖕🏻
        </h1>
        <div className="flex flex-row w-full justify-around items-center">
          <Button text="Go to packs" link="/cards" />
          <Button text="Play!" link="/play" />
        </div>
      </main>
    </>
  );
}
