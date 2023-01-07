import React from "react";

type Props = {};

function play({}: Props) {
  return (
    <div className="bg-[black] flex flex-col justify-center items-center h-screen">
      <div className="text-[50px] font-bold w-full text-center text-[white] p-2">
        The game will be available before may
      </div>
      <div className="border-solid border-gray-200 border-t-cyan-500/50 rounded-full w-[80px] h-[80px] animate-spin border-t-[10px] border-[10px] text-center text-[50px]">
        🖕🏻
      </div>
    </div>
  );
}

export default play;
