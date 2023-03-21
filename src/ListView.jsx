import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addBoughtItem, getList } from "./list-service";
import {
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

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
        <div className="flex flex-col w-full">
          <div className="font-semibold mx-7 w-80 lg:mx-20 grid h-10 place-items-center">
            {id}
          </div>
          <div className="overflow-x-auto w-full">
            <div className="flex justify-between">
              <div className="font-semibold px-2 py-4">Do kupienia</div>
              <PlusCircleIcon className="w-14 h-14 mr-12"></PlusCircleIcon>
            </div>
            <table className="table w-full ">
              <thead></thead>
              <tbody>
                {list.items.map((it) => (
                  <tr>
                    <th>
                      <div className=" w-8 h-8 btn btn-ghost btn-circle  ">
                        <CheckCircleIcon
                          className="  fill-none  stroke-current"
                          onClick={() => boughtProduct(it)}
                        />
                      </div>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div>{it.product}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {it.quantity}
                      <br />
                    </td>
                    <td>
                      <div className="btn btn-ghost btn-circle">
                        <PencilIcon
                          fill="none"
                          stroke="currentColor "
                          className=" w-6 h-10 "
                        />
                      </div>
                    </td>
                    <td>
                      <div className="btn btn-ghost btn-circle">
                        <TrashIcon
                          fill="none"
                          stroke="currentColor "
                          className=" w-6 h-10 "
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto w-full">
            <div>
              <div className="px-2 py-4 font-semibold">Kupione</div>
            </div>
            <table className="table w-full ">
              <thead></thead>
              <tbody>
                {list.boughtItems.map((it) => (
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div>{it.product}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {it.quantity}
                      <br />
                    </td>
                    <td>
                      <div className="btn btn-ghost btn-circle">
                        <PencilIcon
                          fill="none"
                          stroke="currentColor "
                          className=" w-6 h-10 "
                        />
                      </div>
                    </td>
                    <td>
                      <div className="btn btn-ghost btn-circle">
                        <TrashIcon
                          fill="none"
                          stroke="currentColor "
                          className=" w-6 h-10 "
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {loading && "Ładowanie"}
    </>
  );
}

export default ListView;
