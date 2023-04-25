import React, { useEffect, useState } from "react";
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
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { AddNewProducts } from "./AddNewProducts";
import { EditProductModal } from "./EditProductModal";

function ListView() {
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const [modalData, setModalData] = useState({});

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    setList(getList(id));
    setLoading(false);
  }, [id, counter]);

  const onShowModalClick = (item) => {
    setModalData(item);
    setShowModal(true);
  };

  const onCloseModalClick = (updatedProduct, updatedQuantity) => {
    setShowModal(false);
    editListItem(id, modalData.product, updatedProduct, updatedQuantity);
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

  const addProduct = (product, quantity) => {
    addNewListItem(id, product, quantity);
    setCounter(counter + 1);
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
          <div className="uppercase lg:bg-base-300 mx-7 lg:mx-auto lg:w-96 mb-2 lg:mb-8 lg:pb-1 lg:mt-5 lg:pt-1 lg:rounded-box lg:shadow-2xl flex flex-row justify-center">
            <div className="mt-4 ml-8 lg:mx-auto lg:pb-3 font-extrabold text-2xl lg:text-2xl">
              {id}
            </div>
            <div className="lg:hidden rounded-full">
              <PlusCircleIcon
                className="w-12 h-14 ml-2"
                onClick={onAddNewProductClick}
                title="Dodaj produkty"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <AddNewProducts addProduct={addProduct} />
          </div>
          <div className="lg:mx-96 lg:border-t-4 lg:border-x-4 lg:rounded-t-xl lg:shadow-2xl lg:border-primary/10">
            <div className="flex flex-row bg-base-300 lg:rounded-t-xl">
              <div className="uppercase font-semibold text-lg lg:text-xl lg:font-bold px-2 py-4 lg:pl-9 lg:mb-1">
                Do kupienia
              </div>
            </div>
            <div className="flex flex-col lg:pb-3">
              {list.items
                .map((it) => ({ ...it, clicked: false }))
                .map((it) => (
                  <div className="flex flex-row space-x-0">
                    <div className="ml-2 cursor-pointer">
                      <CheckCircleIcon
                        className="w-8 h-8 mt-2 fill-none stroke-current "
                        onClick={() => boughtProduct(it)}
                        title="Kupione"
                      />
                    </div>
                    <div className="w-40 lg:w-60 lg:pr-7 pl-2 mt-3 lg:text-lg break-all">
                      {it.product}
                    </div>
                    <div className="w-20 lg:w-32 lg:pr-7 mt-3 lg:text-lg break-all">
                      {it.quantity}
                    </div>
                    <div className="btn btn-ghost btn-circle w-16 lg:w-12">
                      <PencilIcon
                        fill="none"
                        stroke="currentColor "
                        className="w-6 h-10"
                        onClick={() => onShowModalClick(it)}
                        title="Edytuj"
                      />
                    </div>
                    <EditProductModal
                      item={modalData}
                      showModal={showModal}
                      onSaveClicked={onCloseModalClick}
                      onModalClosed={() => setShowModal(false)}
                    />

                    <div className="btn btn-ghost btn-circle w-12 lg:w-30">
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

          <div className="lg:mx-96 lg:border-b-4 lg:border-x-4 lg:rounded-b-xl lg:shadow-2xl lg:border-primary/10">
            <div>
              <div className="uppercase text-lg lg:text-xl px-2 py-4 lg:pl-9 lg:mb-1 font-semibold lg:font-bold bg-base-300 ">
                Kupione
              </div>
            </div>
            <div className="flex flex-col lg:pb-3">
              {list.boughtItems.map((it) => (
                <div className="flex  flex-row space-x-0">
                  <div className="ml-2">
                    <CheckCircleIcon className="mt-2 w-8 h-8 stroke-current " />
                  </div>
                  <div className="w-40 lg:w-60 mt-3 ml-3 pl-2 lg:pr-7 lg:text-lg break-words">
                    {it.product}
                  </div>
                  <div className="w-24 lg:w-32 mt-3 lg:pr-7 lg:text-lg break-words ">
                    {it.quantity}
                  </div>
                  <div className="w-16 lg:w-12"></div>
                  <div className="w-12 lg:w-30 btn btn-ghost btn-circle">
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
