import React, { useEffect, useState } from "react";
import { getList } from "./list-service";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(getList());
  }, []);

  const goToList = (name) => {
    const path = `list/${name}`;
    navigate(path);
  };

  return (
    <>
      <div className="flex flex-col w-full mt-6">
        {lists.map((list) => {
          return (
            <>
              <div
                onClick={() => goToList(list.name)}
                className="cursor-pointer hover:bg-primary/20 mx-7 lg:mx-20 grid h-16 card bg-base-300 rounded-box place-items-center font-bold uppercase "
              >
                {list.name}
              </div>
              <div className="divider"></div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
