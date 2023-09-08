import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewList } from "./list-service";

function AddList() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const addList = () => {
    addNewList(name);
    goToAddProducts();
  };
  const goToAddProducts = () => {
    const path = `${name}/add-products`;
    navigate(path);
  };
  return (
    <>
      <div className="card card w-50 lg:w-fit mt-52 lg:mt-20 lg:px-16 mx-3 lg:mx-auto mb-2 pt-3 pb-3 bg-neutral/50 shadow-xl">
        <div className="card-body items-center text-center">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nazwa listy..."
            className="input input-bordered w-full max-w-xs text-lg"
          />
          <div className=" mt-3 pt-2 card-actions">
            <button
              onClick={addList}
              className="btn btn-primary font-bold text-lg"
            >
              Zapisz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddList;
