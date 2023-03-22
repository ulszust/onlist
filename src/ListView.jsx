import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addBoughtItem,
  getList,
  removeBoughtItem,
  removeListItem,
} from "./list-service";
import {
  PencilIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

function ListView() {
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    setList(getList(id));
    setLoading(false);
  }, [id, counter]);

  const handleShow = () => {
    setShowModal(true);
  };

  const boughtProduct = ({ product }) => {
    addBoughtItem(id, product);
    setCounter(counter + 1);
  };

  const onAddNewProductClick = () => {
    const path = `add-products`;
    navigate(path);
  };

  const onDeleteProductClick = ({ product }) => {
    removeListItem(id, product);
    setCounter(counter + 1);
  };

  const onDeleteBoughtProductClick = ({ product }) => {
    removeBoughtItem(id, product);
    setCounter(counter + 1);
  };

  return (
    <>
      {loading || (
        <div>
          <div className="uppercase font-semibold mx-7 mb-2 lg:mx-20 flex flex-row justify-center">
            <div className="mt-4 ml-8"> {id}</div>
            <div className="btn btn-ghost">
              <PlusCircleIcon
                className="w-12 h-14 mb-2"
                onClick={onAddNewProductClick}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-row bg-base-300">
              <span className="uppercase text-white font-semibold px-2 py-4">
                Do kupienia
              </span>
            </div>
            <div className="flex flex-col">
              {list.items
                .map((it) => ({ ...it, clicked: false }))
                .map((it) => (
                  <div className="flex flex-row space-x-4">
                    <div className="btn btn-ghost btn-circle">
                      <CheckCircleIcon
                        className="w-8 h-8 fill-none stroke-current"
                        onClick={() => boughtProduct(it)}
                      />
                    </div>
                    <div className="w-full mt-3">{it.product}</div>
                    <div className="w-full mt-3">{it.quantity}</div>
                    <label
                      htmlFor="edit-modal"
                      className="btn btn-ghost btn-circle"
                    >
                      <PencilIcon
                        fill="none"
                        stroke="currentColor "
                        className="w-6 h-10"
                        onClick={() => handleShow}
                      />
                    </label>
                    <input
                      type="checkbox"
                      id="edit-modal"
                      className="modal-toggle"
                    />
                    <div className="modal !ml-0">
                      <div className="modal-box">
                        <div className="flex flex-row space-x-3 ">
                          <div className="flex flex-col space-y-6">
                            <div>Produkt</div>
                            <div>Ilość</div>
                          </div>
                          <div className="flex flex-col space-y-6">
                            <div>
                              <input
                                type="text"
                                placeholder={it.product}
                                className="input input-bordered w-full max-w-xs"
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                placeholder={it.quantity}
                                className="input input-bordered w-full max-w-xs"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-action">
                          <label htmlFor="edit-modal" className="btn">
                            Zapisz
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="btn btn-ghost btn-circle">
                      <TrashIcon
                        fill="none"
                        stroke="currentColor "
                        className=" w-6 h-10"
                        onClick={() => onDeleteProductClick(it)}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <br />
          <div>
            <div>
              <div className="uppercase text-white px-2 py-4 font-semibold bg-base-300">
                Kupione
              </div>
            </div>
            <div className="flex flex-col">
              {list.boughtItems.map((it) => (
                <div className="flex flex-row space-x-4">
                  <div className="w-full mt-3 ml-3">{it.product}</div>
                  <div className="w-full mt-3">{it.quantity}</div>
                  <div></div>
                  <div className="btn btn-ghost btn-circle">
                    <TrashIcon
                      fill="none"
                      stroke="currentColor "
                      className=" w-6 h-10 "
                      onClick={() => onDeleteBoughtProductClick(it)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {loading && "Ładowanie"}
    </>
  );
}

export default ListView;
