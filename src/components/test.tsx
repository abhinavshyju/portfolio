import { useState } from "react";

export default function Test() {
  const [count, setcount] = useState<number>(0);
  return (
    <div className="flex justify-center h-full items-center">
      <div className=" flex flex-col gap-4 items-center">
        <div className=" text-xl font-bold">{count}</div>
        <button
          onClick={() => setcount(count + 1)}
          className="shadow border py-2  px-8 rounded-xl"
        >
          Click
        </button>
      </div>
    </div>
  );
}
