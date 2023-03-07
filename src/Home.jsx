import React, { useEffect, useState } from "react";
import { getList } from "./list-service";

function Home() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(getList());
  }, []);

  return (
    <>
      <div className="flex flex-col w-full mt-6">
        {lists.map((list) => {
          return (
            <>
              <div className=" mx-7 lg:mx-20 grid h-16 card bg-base-300 rounded-box place-items-center">
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
