import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { addNewListItem } from "./list-service";
function AddProducts() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const addProduct = () => {
    addNewListItem(product, quantity);
  };
  return (
    <>
      <div className="card w-96 bg-neutral/50 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="flex flex-col gap-px">
            <div className="form-control">
              <div className="input-group flex flex-col">
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
              <button className="btn ">Zapisz</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddProducts;
