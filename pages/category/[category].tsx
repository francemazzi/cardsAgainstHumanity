import { useRouter } from "next/router";
import React, { useState } from "react";
import CardList from "../../components/molecols/CardList";
import CardDesk from "../../commons/cardsDeks.json";
import Link from "next/link";

function Category() {
  const router = useRouter();
  const categoryId = router.query.category;
  const card = CardDesk.filter((data) => data.name === categoryId);

  const [colorW, setColorW] = useState(false);
  const [colorB, setColorB] = useState(false);

  return (
    <div className="bg-[black]">
      <div className=" w-full">
        <h1 className="text-[50px] font-bold text-[white] text-center p-4">
          {" "}
          {categoryId}
        </h1>

        <Link href="/cards" className="absolute top-1 ">
          <p className="text-[12px] text-[white] font-bold">
            🖕🏻 Return to category
          </p>
        </Link>
        <div className="p-2 flex flex-row items-center w-full justify-center">
          <button
            onClick={() => {
              setColorW(true);
              setColorB(false);
            }}
            className="p-2 text-[14px] font-bold m-2 bg-white rounded-md"
          >
            White
          </button>
          <button
            onClick={() => {
              setColorB(true);
              setColorW(false);
            }}
            className="p-2 text-[14px] font-bold m-2 bg-white rounded-md"
          >
            Black
          </button>
        </div>
      </div>
      <CardList card={card} color={colorW} />
    </div>
  );
}

export default Category;
