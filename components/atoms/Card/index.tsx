import React from "react";

type Props = {
  text?: string;
  color?: string;
};

function Card({ text, color }: Props) {
  return (
    <div
      className={`flex flex-col justify-center items-center m-2  h-[14rem] w-[10rem] md:h-[30rem] md:w-[20rem] lg:h-[30rem] lg:w-[20rem] bg-[${color}] cursor-pointer overflow-hidden shadow-lg rounded-md hover:scale-105 transition-all duration-150 aese-out shadow-cyan-500/50`}
    >
      <div
        className={`text-[${(color = "white"
          ? "black"
          : "white")}] font-bold p-2 text-center text-[15px] lg:text-[25px]`}
      >
        {text}
      </div>
    </div>
  );
}

export default Card;
