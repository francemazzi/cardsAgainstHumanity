import React from "react";

type Props = {
  card: {
    name: string;
    white: {
      text: string;
      pack: number;
    }[];
    black: {
      text: string;
      pick: number;
      pack: number;
    }[];
    official: boolean;
  }[];
  color: boolean;
};

function CardList({ card, color }: Props) {
  return (
    <div className="flex flex-wrap justify-center p-2">
      {card.map((data) => {
        return (color ? data.white : data.black).map((cards, id) => {
          let i = 1;
          return (
            // CARD component
            <div
              key={id}
              className={`flex flex-col justify-center items-center m-2  h-[14rem] w-[10rem] md:h-[30rem] md:w-[20rem] lg:h-[30rem] lg:w-[20rem] bg-[${
                color ? "white" : "black"
              }] cursor-pointer overflow-hidden shadow-lg rounded-md hover:scale-105 transition-all duration-150 aese-out shadow-cyan-500/50`}
            >
              <p
                className={`text-[${
                  color ? "black" : "white"
                }] font-bold p-2 text-center text-[15px] lg:text-[25px]`}
              >
                {cards.text}
              </p>
            </div>
          );
        });
      })}
    </div>
  );
}

export default CardList;

// for (let i = 0; i < data.white.length; i++) {
//   console.log(data.white[i].text);

// }
