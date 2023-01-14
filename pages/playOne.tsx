import React from "react";
import CardDesk from "../commons/cardsDeks.json";
import { cardW, cardB } from "../commons/types";
import Card from "../components/atoms/Card";

function PlayOne() {
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

  const randomcards = randomiCard(blackCards, whiteCards);
  // console.log(randomcards);

  return (
    <div className="bg-[black] h-screen">
      <h1 className="text-[20px] font-bold w-full text-center text-[white] p-2">
        Gioca umano!
      </h1>
      {/* TODO: fix it it doesn't work it say 'Error: Text content does not match server-rendered HTML.' what a f*** */}
      {/* 
      {randomcards && (
        <Card text={randomcards.B.card.text} color={randomcards.B.color} />
      )} */}
    </div>
  );
}

export default PlayOne;
