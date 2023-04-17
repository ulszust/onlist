import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addBoughtItem,
  editListItem,
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
  const [modalData, setModalData] = useState({});
  const [updatedProduct, setUpdatedProduct] = useState(null);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    setLoading(true);
    setList(getList(id));
    setLoading(false);
  }, [id, counter]);

  const handleShow = (item) => {
    setModalData(item);
  };

  const boughtProduct = ({ product }) => {
    setTimeout(() => {
      addBoughtItem(id, product);
      setCounter(counter + 1);
    }, 1000);
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
                    <button
                      className="cursor-pointer active:text-white"
                      onClick={handleClick}
                    >
                      <CheckCircleIcon
                        className="w-8 h-8 fill-none stroke-current "
                        onClick={() => boughtProduct(it)}
                      />
                    </button>
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
                        onClick={() => handleShow(it)}
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
                          <div className="flex flex-col space-y-12">
                            <div className="mt-3 uppercase">Produkt</div>
                            <div className="ml-6 uppercase">Ilość</div>
                          </div>
                          <div className="flex flex-col space-y-6">
                            <div>
                              <input
                                type="text"
                                value={modalData.product}
                                className="input input-bordered w-full max-w-xs"
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                value={modalData.quantity}
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
                  <div>
                    <CheckCircleIcon className="mt-2 w-8 h-8 stroke-current " />
                  </div>
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
