import React, { useEffect, useState } from "react";
import CardDesk from "../commons/cardsDeks.json";
import { cardW, cardB } from "../commons/types";
import Card from "../components/atoms/Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface randomCardInterface {
  B: {
    card: cardB;
    color: string;
  };
  W: {
    cards: cardW[];
    color: string;
  };
}

//TODO:
//estrazione carte randomica -> 10 carte bianche - 1 carta nera
//eliminazione dal mazzo di carte -> eliminaizone 10 carte bianche - 1 carta nera
//implementare UI con react beautiful dnd

const blackCards = CardDesk[0].black;
const whiteCards = CardDesk[0].white;

//CREAZIONE MAZZO DI CARTE
const deckCreation = (deck: cardW[] | cardB[], numberCardInDeck: number) => {
  const result: cardW[] | cardB[] = [];
  if (numberCardInDeck >= deck.length) {
    deck.push(...deck.sort(() => Math.random() - 0.5));
  } else {
    const indices = new Set<number>();
    while (indices.size < numberCardInDeck) {
      indices.add(Math.floor(Math.random() * deck.length));
    }
    indices.forEach((index) => {
      result.push(deck[index]);
    });
  }
  return result;
};

const whiteDeck = deckCreation(whiteCards, 150);
const blackDeck = deckCreation(blackCards, 50);

//ESTRAZIONE SINGOLA carte
const randomiCard = (cardBlack: cardB[], cardWhite: cardW[]) => {
  const newWhiteArr = [];
  const randomBCard = cardBlack[Math.floor(Math.random() * cardBlack.length)];

  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * cardWhite.length);
    newWhiteArr.push(cardWhite[randomNumber]);
  }

  const dataCards = {
    B: { card: randomBCard, color: "black" },
    W: { cards: newWhiteArr, color: "white" },
  };
  console.log(dataCards);
  return dataCards;
};

const selectCard = (e: any) => {
  console.log(e);
};

function PlayOne() {
  const [randomicCards, setRandomicCards] = useState<randomCardInterface>();

  useEffect(() => {
    const randomcards = randomiCard(blackCards, whiteCards);
    setRandomicCards(randomcards);
  }, []);

  const [select, setSelect] = useState();

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="bg-[black] h-screen">
        <h1 className="text-[20px] font-bold w-full text-center text-[white] p-2">
          Gioca umano!
        </h1>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col items-center justify-center w-full"
            >
              <Card
                text={randomicCards?.B.card.text}
                color={randomicCards?.B.color}
              />
            </div>
          )}
        </Droppable>
        <h1 className="text-[20px] font-bold w-full text-center text-[white] p-2">
          Scegli dal tuo mazzo e fammi ridere
        </h1>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-row items-center  justify-start overflow-x-scroll shadow-md"
            >
              {randomicCards?.W.cards.map((data, idk) => {
                return (
                  <Draggable draggableId={data.text} index={idk} key={idk}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card
                          text={data.text}
                          color={randomicCards?.W.color}
                          // onClick={selectCard}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default PlayOne;
