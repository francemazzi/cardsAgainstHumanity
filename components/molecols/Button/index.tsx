import Link from "next/link";
import React from "react";

type Props = { text: string; link: string };

function Button({ text, link }: Props) {
  return (
    <Link href={link}>
      <button className="bg-[white] p-3 cursor-pointer overflow-hidden shadow-lg rounded-md hover:scale-105 transition-all duration-150 aese-out shadow-cyan-500/50">
        {text}
      </button>
    </Link>
  );
}

export default Button;
