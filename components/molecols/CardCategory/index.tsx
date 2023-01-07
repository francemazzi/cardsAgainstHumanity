import Link from "next/link";
import React from "react";

import CardDesk from "../../../commons/cardsDeks.json";

type Props = {};

function CardCategory({}: Props) {
  return (
    <div className="text-[white] ">
      <div className="flex flex-wrap justify-center">
        {CardDesk.map((data) => {
          return (
            <Link
              href={`/category/${data.name}`}
              className="flex flex-col justify-center items-center h-[20rem] m-2 w-[15rem] bg-[white] cursor-pointer overflow-hidden shadow-lg rounded-md hover:scale-105 transition-all duration-150 aese-out shadow-cyan-500/50"
              key={data.name}
            >
              <p className="text-[black] font-bold p-2 text-center text-[25px]">
                {data.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CardCategory;
