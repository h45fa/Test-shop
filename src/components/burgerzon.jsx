import React, { useState } from "react";
import list from "../data";
const Burgerzon = ({handleClick}) => {
  const [data, setData] = useState(list);
  const filterResult = (carItem) => {
    const result = list.filter((curData)=>{
      return curData.cat===carItem;
    });
    setData(result)
  };
  return (
    <div class="flex w-full justify-center">
      <div class="flex w-60 flex-col gap-10 mt-24">
        <button class="w-40 h-10 font-bold bg-amber-200" onClick={()=> filterResult("Mac")}>McDonald's</button>
        <button class="w-40 h-10 font-bold bg-rose-500" onClick={()=> filterResult("KFC")}>KFC</button>
      </div>
      <div class="grid gap-4 grid-cols-3 grid-rows-3 m-auto ml-px mr-px">
        {data.map((value) => {
          const { id, title, price, image } = value;
          return (
            <>
              <div
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                key={id}
              >
                <a href="/">
                  <img class="p-8 rounded-t-lg" src={image} alt="product" />
                </a>
                <div class="px-5 pb-5">
                  <a href="/">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                  </a>
                  <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      {price}$
                    </span>
                    <button
                      onClick={()=>handleClick(value)}
                      href="/"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Burgerzon;
