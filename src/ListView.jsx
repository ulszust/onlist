import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getList } from "./list-service";

function ListView() {
  const { id } = useParams();
  const [list, setList] = useState(undefined);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setList(getList(id));
  }, [id]);

  useEffect(() => {
    if (!!list) {
      setItems(list.items);
      setLoading(false);
    }
  }, [list]);

  return (
    <>
      {loading || (
        <div className="flex flex-col w-full">
          <div className="mx-7 w-80 lg:mx-20 grid h-10 card bg-base-300 rounded-box place-items-center">
            {id}
          </div>
          {items.map((it) => {
            return <div>{it.product}</div>;
          })}
        </div>
      )}
    </>
  );
}
export default ListView;
