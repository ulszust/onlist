import React from 'react';
import {PlusCircleIcon} from "@heroicons/react/24/solid";
function NewList() {
    return (
        <>
            <h1>Nowa lista</h1>
            <div className="card w-96 bg-neutral/50 shadow-xl">
                <div className="card-body items-center text-center">
                    <div class="flex flex-row gap-px">
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Dodaj produkt..." className="input input-bordered" />
                                <button className="btn btn-square">
                                    <PlusCircleIcon className="bg-neutral/50"> className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></PlusCircleIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewList;