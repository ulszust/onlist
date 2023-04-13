import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { findListByNameOrProduct, getAllLists } from "./list-service";
function Search() {
  const [query, setQuery] = useState("");
  const [allLists, setAllLists] = useState([]);
  const [matchedLists, setMatchedLists] = useState([]);

  useEffect(() => {
    setAllLists(getAllLists());
  }, []);

  useEffect(() => {
    if (!query) {
      setMatchedLists([]);
    } else {
      setMatchedLists(findListByNameOrProduct(query));
    }
  }, [query]);

  console.log(allLists);

  return (
    <>
      <div className=" flex justify-center mt-9">
        <div className="form-control ">
          <div className="input-group">
            <input
              type="text"
              placeholder="Szukaj listy..."
              className="input input-bordered"
              onChange={(e) => setQuery(e.target.value?.toLowerCase())}
            />
            <div className="btn btn-square bg-success border-success">
              <MagnifyingGlassIcon className="w-8"></MagnifyingGlassIcon>
            </div>
          </div>
        </div>
      </div>
      <div>
        {matchedLists.map((list) => {
          return (
            <div>
              <div>{list.name}</div>
              <div>{list.items.map((item) => item.product).join(", ")}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Search;
