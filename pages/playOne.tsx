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

type blackCard = {
  text: string;
  pick: number;
  pack: number;
  id?: string;
};
type whiteCard = {
  text: string;
  pick?: number;
  pack: number;
  id?: string;
};

interface blackCardInterface {
  id: string;
  card: cardB;
  color: string;
}
interface whiteCardInterface {
  id: string;
  cards: cardW;
  color: string;
}

//DEBUG PROBLEM OF KANBAN
export const useStrictDroppable = (loading: boolean) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let animation: any;

    if (!loading) {
      animation = requestAnimationFrame(() => setEnabled(true));
    }

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, [loading]);

  return [enabled];
};

//TODO:
//estrazione carte randomica -> 10 carte bianche - 1 carta nera
//eliminazione dal mazzo di carte -> eliminaizone 10 carte bianche - 1 carta nera
//implementare UI con react beautiful dnd

//FUNZIONE CREAZIONE ID RANDOMICO di 6 lettere
export function generateRandomId(): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }
  return id;
}

const black = CardDesk[0].black;
const white = CardDesk[0].white;

const addId = (cards: blackCard[] | whiteCard[]) => {
  return cards.map((data: blackCard | whiteCard) => ({
    ...data,
    id: generateRandomId(),
  }));
};

const blackCards = addId(black);
const whiteCards = addId(white);

//CREAZIONE MAZZO DI CARTE
const deckCreation = (deck: cardW[] | cardB[], numberCardInDeck: number) => {
  const result: cardW[] | cardB[] = [];
  if (numberCardInDeck >= deck.length) {
    result.push(...deck.sort(() => Math.random() - 0.5));
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

const whiteDeck = deckCreation(whiteCards, 20);
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

  return dataCards;
};

const selectCard = (e: any) => {
  console.log("e");
};

function PlayOne() {
  const [enabled] = useStrictDroppable(false);
  const [randomicCards, setRandomicCards] = useState<randomCardInterface>();

  useEffect(() => {
    const randomcards = randomiCard(blackCards, whiteCards);
    setRandomicCards(randomcards);
  }, []);

  const [select, setSelect] = useState();

  const onDragEnd = () => {
    console.log("onDragEnd");
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-[black] h-screen">
        <h1 className="text-[20px] font-bold w-full text-center text-[white] p-2">
          Gioca umano!
        </h1>
        {enabled && (
          <Droppable droppableId="characters">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex flex-row items-center justify-center w-full overflow-x-scroll"
              >
                <Card
                  text={randomicCards?.B.card.text}
                  color={randomicCards?.B.color}
                />
              </div>
            )}
          </Droppable>
        )}
        <h1 className="text-[20px] font-bold w-full text-center text-[white] p-2">
          Scegli dal tuo mazzo e fammi ridere
        </h1>
        {enabled && (
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
        )}
      </div>
    </DragDropContext>
  );
}

export default PlayOne;
