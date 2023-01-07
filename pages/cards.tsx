import { useRouter } from "next/router";
import React from "react";
import CardCategory from "../components/molecols/CardCategory";

type Props = {};

function cardList({}: Props) {
  // router.query.category
  return (
    <div className="bg-[black]">
      <div className="text-[50px] font-bold w-full text-center text-[white] p-2">
        🖕🏻 FUCK HUMANITY - the packs are:
      </div>
      <CardCategory />
    </div>
  );
}

export default cardList;
