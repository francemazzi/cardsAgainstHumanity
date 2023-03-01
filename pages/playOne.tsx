import React, { useEffect, useState } from "react";
import CardDesk from "../commons/cardsDeks.json";
import { cardW, cardB } from "../commons/types";
import Card from "../components/atoms/Card";
import { GetServerSideProps } from "next";

interface randomCardInterface {
  B: {
    card: cardB;
    color: string;
    id?: string;
  };
  W: {
    cards: cardW[];
    color: string;
    id?: string;
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
  color?: string;
  pack?: number;
}

//TODO:
//estrazione carte randomica -> 10 carte bianche - 1 carta nera
//eliminazione dal mazzo di carte -> eliminaizone 10 carte bianche - 1 carta nera
//implementare UI con react beautiful dnd

//FUNZIONE CREAZIONE ID RANDOMICO di 6 lettere
export function generateRandomId(): string {
  const characters = "123456789";
  let id = "";
  for (let i = 0; i < 10; i++) {
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

//DECKS ready to use
const whiteDeck = deckCreation(whiteCards, 50);
const blackDeck = deckCreation(blackCards, 10);

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

// TODO: doppio select se hanno due _ quindi seleziona due carte -> fare una funzione che analizza test

function PlayOne() {
  //mano di gioco
  const [randomicCards, setRandomicCards] = useState<randomCardInterface>();
  const [select, setSelect] = useState(false);
  const [idData, setIdData] = useState("");
  const [selectedObj, setSelectedObj] = useState<whiteCardInterface | any>();

  // define when cards change
  useEffect(() => {
    const deck = randomiCard(blackDeck, whiteDeck);
    setRandomicCards(deck);
  }, []);

  return (
    <div className="bg-[black] h-screen">
      <h1 className="text-[20px] font-bold w-full text-center text-[white] p-2">
        Gioca umano!
      </h1>

      <div className="flex flex-row items-center justify-center w-full overflow-x-scroll">
        <Card
          text={randomicCards?.B.card.text}
          color={randomicCards?.B.color}
        />

        {select ? (
          <Card color={randomicCards?.W.color} text={selectedObj?.text} />
        ) : (
          ""
        )}
      </div>

      <h1 className="text-[20px] font-bold w-full text-center text-[white] p-2">
        Scegli dal tuo mazzo e fammi ridere
      </h1>

      <div className="flex  flex-row items-center justify-start overflow-x-scroll shadow-md">
        {randomicCards?.W.cards.map((data, index) => {
          return (
            <div key={index}>
              <Card
                cardNumber={index}
                select={select}
                text={data.text}
                IdData={idData}
                color={randomicCards?.W.color}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (e.currentTarget.id === index.toString()) {
                    console.log(data);
                    setSelectedObj(data);
                    setIdData(e.currentTarget.id);
                    setSelect(true);
                  }
                }}
                deselect={() => {
                  setSelect(false);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlayOne;
