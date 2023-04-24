import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { findListByNameOrProduct } from "./list-service";
import { useNavigate } from "react-router-dom";
function Search() {
  const [query, setQuery] = useState("");
  const [matchedLists, setMatchedLists] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!query) {
      setMatchedLists([]);
    } else {
      setMatchedLists(findListByNameOrProduct(query));
    }
  }, [query]);

  const goToList = (name) => {
    const path = `/list/${name}`;
    navigate(path);
  };

  return (
    <>
      <div className=" flex justify-center mt-9">
        <div className="form-control ">
          <div className="input-group ">
            <input
              type="text"
              placeholder="Szukaj listy..."
              className="input input-bordered text-xl"
              onChange={(e) => setQuery(e.target.value?.toLowerCase())}
            />
            <div className="btn btn-square bg-success/80 border-success">
              <MagnifyingGlassIcon className="w-8 "></MagnifyingGlassIcon>
            </div>
          </div>
        </div>
      </div>
      <div>
        {matchedLists.map((list) => {
          return (
            <div className=" mx-3 border-2 border-success/50 rounded-lg mt-7 lg:w-fit mx-auto cursor-pointer hover:bg-primary">
              <div
                onClick={() => goToList(list.name)}
                className="pl-3 lg:px-16 lg:py-1 bg-success/80 font-extrabold text-white/70 text-lg lg:text-2xl"
              >
                {list.name}
              </div>
              <div className="pb-1 pl-3 lg:px-16 lg:py-1 bg-success/80 text-neutral lg:text-lg">
                {list.items.map((item) => item.product).join(", ")}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Search;
