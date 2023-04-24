import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
export const EditProductModal = ({
  item,
  showModal,
  onModalClosed,
  onSaveClicked,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState(null);
  const [updatedQuantity, setUpdatedQuantity] = useState(null);

  useEffect(() => {
    setUpdatedProduct(item.product);
    setUpdatedQuantity(item.quantity);
  }, [item]);

  const onCloseModalClick = () => {
    onModalClosed();
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none !ml-0 ">
            <div className="border-8 border-primary/30 rounded-lg bg-base-100 shadow-xl">
              <XMarkIcon
                onClick={onCloseModalClick}
                className=" w-9 h-9 ml-80 mt-1"
              />
              <div className="flex flex-row space-x-3">
                <div className="flex flex-col space-y-12 ">
                  <div className=" ml-2 mt-5 uppercase font-bold">Produkt</div>
                  <div className=" ml-8 uppercase font-bold">Ilość</div>
                </div>
                <div className="flex flex-col space-y-6">
                  <div>
                    <input
                      type="text"
                      defaultValue={item.product}
                      className="input input-bordered mt-3 mr-5"
                      onChange={(e) => setUpdatedProduct(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      defaultValue={item.quantity}
                      className="input input-bordered mr-2"
                      onChange={(e) => setUpdatedQuantity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div
                  onClick={() => onSaveClicked(updatedProduct, updatedQuantity)}
                  className="btn text-center font-bold text-neutral border-primary bg-primary mt-8 flex justify-center mr-28 ml-32 mb-5"
                >
                  Zapisz
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
