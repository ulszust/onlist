import React, { useState } from "react";

export const AddNewProducts = ({ addProduct }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  function onAddProductClick() {
    addProduct(product, quantity);
    clearInput();
  }

  function clearInput() {
    document.getElementById("product").value = "";
    document.getElementById("quantity").value = "";
  }

  return (
    <>
      <div className="card w-50 mt-10 mx-3 mb-2 bg-neutral/50 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="flex flex-col">
            <div className="form-control">
              <div className="flex flex-col gap-y-3 pb-2">
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
                onClick={onAddProductClick}
                className="btn btn-primary cursor-pointer mt-4 w-20 place-self-center"
              >
                Dodaj
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
