import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addBoughtItem, getList } from "./list-service";
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

  useEffect(() => {
    setLoading(true);
    setList(getList(id));
    setLoading(false);
  }, [id, counter]);

  const boughtProduct = ({ product }) => {
    addBoughtItem(id, product);
    setCounter(counter + 1);
  };
  return (
    <>
      {loading || (
        <div>
          <div className="uppercase font-semibold mx-7 mb-2 w-80 lg:mx-20 grid h-10 place-items-center">
            {id}
          </div>
          <div>
            <div className="flex flex-row bg-error/50">
              <span className="uppercase text-white font-semibold px-2 py-4">
                Do kupienia
              </span>
              <div className="btn btn-ghost">
                <PlusCircleIcon className="w-12 h-14 mr-4 mb-2" />
              </div>
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
                    <div className="btn btn-ghost btn-circle">
                      <PencilIcon
                        fill="none"
                        stroke="currentColor "
                        className="w-6 h-10"
                      />
                    </div>
                    <div className="btn btn-ghost btn-circle">
                      <TrashIcon
                        fill="none"
                        stroke="currentColor "
                        className=" w-6 h-10"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <br />
          <div>
            <div>
              <div className="uppercase text-white px-2 py-4 font-semibold bg-success/70">
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
