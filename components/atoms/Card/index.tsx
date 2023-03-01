import React from "react";

type Props = {
  text?: string;
  color?: string;
  cardNumber?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deselect?: () => void;
  select?: boolean;
  IdData?: string;
};

const Card: React.FC<Props> = ({
  text,
  color,
  onClick,
  cardNumber,
  select,
  IdData,
  deselect,
}) => {
  return (
    <div className="flex flex-col items-center">
      <button
        id={cardNumber?.toString()}
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
      </button>
      {select ? (
        <div className="flex flex-row w-full items-center justify-around">
          {/* <button className="h-[40px] w-[40px] bg-white rounded-full">+</button> */}
          <button
            className="p-2 w-full mx-4 mt-2 bg-white rounded-full"
            onClick={deselect}
          >
            Deselect
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
