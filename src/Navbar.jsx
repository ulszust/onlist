import {
  Bars3BottomLeftIcon,
  DocumentTextIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function Navbar() {
  return (
    <>
      <div className=" mx-0 lg:mx-1 ">
        <div className=" lg:rounded-lg navbar bg-neutral/70">
          <div className="navbar-start">
            <div className="hidden lg:dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <Bars3BottomLeftIcon
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></Bars3BottomLeftIcon>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral/90 rounded-box w-52"
              >
                <li>
                  <a href={"/"}>
                    <HomeIcon
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ></HomeIcon>
                    Home
                  </a>
                </li>
                <li>
                  <a href={"/"}>
                    <DocumentTextIcon
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ></DocumentTextIcon>
                    Moje listy
                  </a>
                </li>
                <li>
                  <a href={"/list"}>
                    <PlusIcon
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ></PlusIcon>
                    Dodaj nową listę
                  </a>
                </li>
                <li>
                  <a href={"/search"}>
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ></MagnifyingGlassIcon>
                    Szukaj
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl" href={"/"}>
              onLIST
            </a>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
