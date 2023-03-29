import React, { useEffect, useState } from "react";
import { getList } from "./list-service";
import { addNewListItem } from "./list-service";
import { useParams } from "react-router-dom";
import { MinusSmallIcon } from "@heroicons/react/20/solid";
function AddProducts() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const { name } = useParams();
  const [list, setList] = useState([]);

  const addProduct = () => {
    addNewListItem(product, quantity);
  };

  useEffect(() => {
    setList(getList(name));
  }, [name]);

  return (
    <>
      <div className="card w-50 mt-10 mx-3 mb-2 bg-neutral/50 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="flex flex-col">
            <div className="form-control">
              <div className="flex flex-col gap-y-3">
                <input
                  type="text"
                  placeholder="Produkt..."
                  className="input input-bordered"
                  onChange={(event) => setProduct(event.target.value)}
                />

                <input
                  type="text"
                  placeholder="Ilość..."
                  className="input input-bordered"
                  onChange={(event) => setQuantity(event.target.value)}
                />
              </div>
              <div className="btn cursor-pointer hover:bg-primary/20 mt-4 w-20 place-self-center">
                Dodaj
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uppercase font-semibold mx-7 mb-2 lg:mx-20 flex flex-row justify-center">
        <div className="mt-4"> {name}</div>
      </div>
      <div className="flex flex-col">
        {list.items.map((it) => (
          <div className="flex flex-row space-x-2">
            <div>
              <MinusSmallIcon className="mt-2 w-8 h-8" />{" "}
            </div>
            <div className=" mt-3">{it.product}</div>
            <div className="mt-3">{it.quantity}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default AddProducts;
