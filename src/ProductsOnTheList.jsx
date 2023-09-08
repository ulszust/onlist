import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

export const ProductsOnTheList = ({ list }) => {
  return (
    <>
      {list.items.map((it) => (
        <div className="flex flex-row space-x-3">
          <div>
            <CheckIcon className="mt-4 h-5" />
          </div>
          <div className=" mt-3 break-all w-20">{it.product}</div>
          <div className="mt-3 break-all w-20">{it.quantity}</div>
        </div>
      ))}
    </>
  );
};
