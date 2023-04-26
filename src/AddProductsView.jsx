import React, { useEffect, useState } from "react";
import { addNewListItem, getList } from "./list-service";
import { useParams } from "react-router-dom";
import { AddNewProducts } from "./AddNewProducts";
import { ProductsOnTheList } from "./ProductsOnTheList";

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
            <div className="mt-2 bg-success p-2 px-5 rounded-md text-white font-bold">
              {name}
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center">
            {isFound(true) ? (
              <>
                <div className="border px-3 pt-1 pb-3 border-primary/10 border-4 rounded-xl shadow-xl">
                  <ProductsOnTheList list={list} />
                </div>
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
