import React, { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { getList } from "./list-service";
import { useParams } from "react-router-dom";

export const ProductsOnTheList = ({ list }) => {
  return (
    <>
      {list.items.map((it) => (
        <div className="flex flex-row space-x-3">
          <div>
            <CheckIcon className="mt-4 h-5" />
          </div>
          <div className=" mt-3">{it.product}</div>
          <div className="mt-3">{it.quantity}</div>
        </div>
      ))}
    </>
  );
};
