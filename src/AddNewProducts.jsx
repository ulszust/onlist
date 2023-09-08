import React, { useState } from "react";

export const AddNewProducts = ({ addProduct }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  function onAddProductClick() {
    if (product === "") {
      window.alert("Musisz uzupełnić produkt :)");
    } else {
      addProduct(product, quantity);
      clearInput();
    }
  }

  function clearInput() {
    setProduct("");
    setQuantity("");
  }

  return (
    <>
      <div className="card w-50 lg:w-fit lg:mx-auto mt-10 lg:mt-1 mx-3 mb-2 lg:mb-7 bg-neutral/50 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="flex flex-col">
            <div className="form-control">
              <div className="flex flex-col gap-y-3 pb-2">
                <input
                  type="text"
                  id="product"
                  placeholder="Produkt..."
                  className="input input-bordered"
                  value={product}
                  onChange={(event) => setProduct(event.target.value)}
                />

                <input
                  type="text"
                  id="quantity"
                  placeholder="Ilość..."
                  className="input input-bordered"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                />
              </div>
              <button
                onClick={onAddProductClick}
                className="btn btn-primary cursor-pointer mt-4 w-20 place-self-center font-bold lg:text-lg"
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
