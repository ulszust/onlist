import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { addNewListItem } from "./list-service";
function AddProducts() {
  const [product, setProduct] = useState("");
  const addProduct = () => {
    addNewListItem(product);
  };
  return (
    <>
      <div className="card w-96 bg-neutral/50 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="flex flex-row gap-px">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Dodaj produkt..."
                  className="input input-bordered"
                  onChange={(event) => setProduct(event.target.value)}
                />
                <button onClick={addProduct} className="btn btn-square">
                  <PlusCircleIcon className="bg-neutral/50" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddProducts;
