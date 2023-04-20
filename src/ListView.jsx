import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addBoughtItem,
  addNewListItem,
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
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

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

  const addProduct = () => {
    addNewListItem(id, product, quantity);
    setCounter(counter + 1);
    clearInput();
  };

  function clearInput() {
    document.getElementById("product").value = "";
    document.getElementById("quantity").value = "";
  }

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
          <div className="uppercase font-semibold lg:font-extrabold mx-7 lg:mx-20 mb-2 lg:mb-10 lg:pb-1 lg:mt-5 lg:pt-1 lg:text-2xl lg:ml-96 lg:mr-96 lg:rounded-full lg:border-4 lg:border-primary/10 lg:shadow-2xl flex flex-row justify-center">
            <div className="mt-4 ml-8 lg:px-3"> {id}</div>
            <div
              className={"lg:hidden"}
              className="rounded-full lg:hover:rounded-lg lg:cursor-pointer lg:hover:bg-primary/20 lg:ml-3"
              title="Dodaj produkty"
            >
              <PlusCircleIcon
                className="w-12 lg:w-14 h-14 ml-2"
                onClick={onAddNewProductClick}
                title="Dodaj produkty"
              />
            </div>
          </div>
          <div
            // className={"sm:hidden"}
            className="hidden lg:block w-50 mt-10 mx-3 mb-2 bg-neutral/50 shadow-xl"
          >
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
                    onClick={addProduct}
                    className="btn btn-primary cursor-pointer mt-4 w-20 place-self-center"
                  >
                    Dodaj
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:ml-80 lg:mr-80 lg:border-t-4 lg:border-r-4 lg:border-l-4 lg:rounded-t-xl lg:shadow-2xl lg:border-primary/10">
            <div className="flex flex-row bg-base-300 lg:rounded-t-xl">
              <div className="uppercase font-semibold lg:font-bold lg:text-xl px-2 py-4 lg:pl-9 lg:mb-1">
                Do kupienia
              </div>
            </div>
            <div className="flex flex-col lg:pb-3">
              {list.items
                .map((it) => ({ ...it, clicked: false }))
                .map((it) => (
                  <div className="flex flex-row lg:flex-none space-x-4">
                    <button
                      className="lg:ml-8 cursor-pointer active:text-white"
                      onClick={handleClick}
                    >
                      <CheckCircleIcon
                        className="w-8 h-8 fill-none stroke-current "
                        onClick={() => boughtProduct(it)}
                        title="Kupione"
                      />
                    </button>
                    <div className="lg:flex-initial w-full lg:w-60 mt-3 lg:text-lg">
                      {it.product}
                    </div>
                    <div className="lg:flex-initial w-full lg:w-40 mt-3 lg:text-lg">
                      {it.quantity}
                    </div>
                    <label
                      htmlFor="edit-modal"
                      className="btn btn-ghost btn-circle lg:flex-initial lg:w-30"
                    >
                      <PencilIcon
                        fill="none"
                        stroke="currentColor "
                        className="w-6 h-10"
                        onClick={() => handleShow(it)}
                        title="Edytuj"
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

                    <div className="btn btn-ghost btn-circle lg:flex-initial lg:w-30">
                      <TrashIcon
                        fill="none"
                        stroke="currentColor "
                        className=" w-6 h-10"
                        onClick={() => onDeleteProductClick(it)}
                        title="Usuń"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="lg:ml-80 lg:mr-80 lg:border-b-4 lg:border-r-4 lg:border-l-4 lg:rounded-b-xl lg:shadow-2xl lg:border-primary/10">
            <div>
              <div className="uppercase lg:text-xl px-2 py-4 font-semibold lg:font-bold bg-base-300 lg:pl-9 lg:mb-1">
                Kupione
              </div>
            </div>
            <div className="flex flex-col lg:pb-3">
              {list.boughtItems.map((it) => (
                <div className="flex lg:flex-none flex-row space-x-4">
                  <div>
                    <CheckCircleIcon className="mt-2 w-8 h-8 lg:ml-8 stroke-current " />
                  </div>
                  <div className="lg:flex-initial w-full lg:w-60 mt-3 ml-3 lg:text-lg">
                    {it.product}
                  </div>
                  <div className="lg:flex-initial w-full lg:w-40 mt-3 lg:text-lg">
                    {it.quantity}
                  </div>
                  <div className="lg:flex-initial lg:w-12"></div>
                  <div className="lg:flex-initial lg:w-30 btn btn-ghost btn-circle">
                    <TrashIcon
                      fill="none"
                      stroke="currentColor "
                      className=" w-6 h-10 "
                      onClick={() => onDeleteBoughtProductClick(it)}
                      title="Usuń"
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
