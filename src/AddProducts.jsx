import React, { useEffect, useState } from "react";
import { getList } from "./list-service";
import { addNewListItem } from "./list-service";
import { useParams } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid";
function AddProducts() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const { name } = useParams();
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  const addProduct = () => {
    addNewListItem(name, product, quantity);
    setCounter(counter + 1);
    clearInput();
  };

  useEffect(() => {
    setLoading(true);
    setList(getList(name));
    setLoading(false);
  }, [name, counter]);

  function clearInput() {
    document.getElementById("product").value = "";
    document.getElementById("quantity").value = "";
  }

  return (
    <>
      {loading || (
        <>
          <div className="card w-50 mt-10 mx-3 mb-2 bg-neutral/50 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="flex flex-col">
                <div className="form-control">
                  <div className="flex flex-col gap-y-3">
                    <input
                      type="text"
                      id="product"
                      placeholder="Produkt..."
                      className="input input-bordered"
                      onChange={(event) => setProduct(event.target.value)}
                    />

                    <input
                      type="text"
                      id="quantity"
                      placeholder="Ilość..."
                      className="input input-bordered"
                      onChange={(event) => setQuantity(event.target.value)}
                    />
                  </div>
                  <button
                    onClick={addProduct}
                    className="btn bg-neutral/60 cursor-pointer mt-4 w-20 place-self-center text-white"
                  >
                    Dodaj
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="uppercase font-semibold mx-7 mb-2 mt-5 lg:mx-20 flex flex-row justify-center">
            <div className="mt-4 bg-success p-2 px-5 rounded-md text-white">
              {name}
            </div>
          </div>
          <div className="flex flex-col">
            {list.items.map((it) => (
              <div className="flex flex-row space-x-3">
                <div>
                  <CheckIcon className="mt-4 w-7 h-5" />
                </div>
                <div className=" mt-3">{it.product}</div>
                <div className="mt-3">{it.quantity}</div>
              </div>
            ))}
          </div>
        </>
      )}
      {loading && "Ładowanie"}
    </>
  );
}
export default AddProducts;
