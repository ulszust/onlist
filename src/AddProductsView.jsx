import React, { useEffect, useState } from "react";
import { addNewListItem, getList } from "./list-service";
import { useParams } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid";
import { AddNewProducts } from "./AddNewProducts";

function AddProductsView() {
  const { name } = useParams();
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  const addProduct = (product, quantity) => {
    addNewListItem(name, product, quantity);
    setCounter(counter + 1);
  };

  useEffect(() => {
    setLoading(true);
    setList(getList(name));
    setLoading(false);
  }, [name, counter]);
  const isFound = () => {
    if (list.items.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <>
      {loading || (
        <>
          <AddNewProducts addProduct={addProduct} />
          <div className="uppercase font-semibold mx-7 mb-2 mt-5 lg:mx-20 flex flex-row justify-center">
            <div className="mt-4 bg-success p-2 px-5 rounded-md text-white">
              {name}
            </div>
          </div>
          <div className="flex flex-col">
            {isFound(true) ? (
              <>
                {list.items.map((it) => (
                  <div className="flex flex-row space-x-3">
                    <div>
                      <CheckIcon className="mt-4 w-7 h-5" />
                    </div>
                    <div className=" mt-3">{it.product}</div>
                    <div className="mt-3">{it.quantity}</div>
                  </div>
                ))}
              </>
            ) : (
              <div className="place-self-center mt-10 font-bold">
                Brak produktów
              </div>
            )}
          </div>
        </>
      )}
      {loading && "Ładowanie"}
    </>
  );
}

export default AddProductsView;
