import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

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
      <main className="bg-[black] h-screen">
        <div className="text-[22px] font-bold w-full text-center text-[white] p-2">
          THIS IS CARDS AGAINST HUMANITY 🖕🏻
        </div>
      </main>
    </>
  );
}
