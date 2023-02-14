import React from "react";

type Props = {
  text?: string;
  color?: string;
  onClick?: () => void;
};

function Card({ text, color, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-center items-center  m-2  h-[14rem] w-[10rem] md:h-[19rem] md:w-[15rem] lg:h-[20rem] lg:w-[16rem] bg-[${color}] cursor-pointer overflow-hidden shadow-lg rounded-md hover:scale-105 hover:rounded-md transition-all duration-150 aese-out shadow-cyan-500/50`}
    >
      <p
        className={`text-[${
          color == "white" ? "black" : "white"
        }] font-bold p-2 text-center text-[15px] lg:text-[25px]`}
      >
        {text}
      </p>
    </div>
  );
}

export default Card;
