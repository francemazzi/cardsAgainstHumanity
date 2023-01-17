import React, { useState } from "react";
import CardDesk from "../commons/cardsDeks.json";
import { cardW, cardB } from "../commons/types";
import Card from "../components/atoms/Card";

const blackCards = CardDesk[0].black;
const whiteCards = CardDesk[0].white;

const randomiCard = (cardBlack: cardB[], cardWhite: cardW[]) => {
  const newWhiteArr = [];
  const randomBCard = cardBlack[Math.floor(Math.random() * cardBlack.length)];

  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * cardWhite.length);
    newWhiteArr.push(cardWhite[randomNumber]);
  }
  console.log(newWhiteArr);

  const dataCards = {
    B: { card: randomBCard, color: "black" },
    W: { cards: newWhiteArr, color: "white" },
  };

  return dataCards;
};

const selectCard = (e: any) => {
  console.log(e);
};

function PlayOne() {
  const randomcards = randomiCard(blackCards, whiteCards);
  console.log(randomcards);

  const [select, setSelect] = useState();

  return (
    <div className="bg-[black] h-screen">
      <h1 className="text-[20px] font-bold w-full text-center text-[white] p-2">
        Gioca umano!
      </h1>
      <div className="flex flex-col items-center justify-center">
        <Card text={randomcards.B.card.text} color={randomcards.B.color} />
      </div>
      <h1 className="text-[20px] font-bold w-full text-center text-[white] p-2">
        Scegli dal tuo mazzo e fammi ridere
      </h1>
      <div className="flex flex-row items-center md:justify-center lg:justify-center sm:justify-start overflow-x-scroll  shadow-md">
        {randomcards.W.cards.map((data, idk) => {
          return (
            <div key={idk}>
              <Card
                text={data.text}
                color={randomcards.W.color}
                // onClick={selectCard}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlayOne;
//<Card text={randomcards.B.card.text} color={randomcards.B.color} />
