import React, { useState } from "react";
import AddProducts from "./AddProducts";
import { useNavigate } from "react-router-dom";
import { addNewList } from "./list-service";

function AddList() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const addList = () => {
    addNewList(name);
    routeChange();
  };
  const routeChange = () => {
    const path = `products`;
    navigate(path);
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nazwa listy..."
            className="input input-bordered w-full max-w-xs"
          />
          <div className="card-actions">
            <button onClick={addList} className="btn btn-primary">
              Zapisz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddList;
