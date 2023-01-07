import { useRouter } from "next/router";
import React from "react";
import CardList from "../../components/molecols/CardList";
import CardDesk from "../../commons/cardsDeks.json";
import Link from "next/link";

function Category() {
  const router = useRouter();
  const categoryId = router.query.category;
  const card = CardDesk.filter((data) => data.name === categoryId);
  console.log(card);

  return (
    <div className="bg-[black]">
      <div className=" w-full">
        <h1 className="text-[50px] font-bold text-[white] text-center p-4">
          {" "}
          {categoryId}
        </h1>

        <Link href="/cards" className="absolute top-1 ">
          <p className="text-[12px] text-[white] font-bold">
            🖕🏻 Return to category
          </p>
        </Link>
      </div>
      <CardList card={card} />
    </div>
  );
}

export default Category;
