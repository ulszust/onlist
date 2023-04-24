import { HomeIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function MobileMenu() {
  return (
    <>
      <div className="flex justify-center absolute text-center w-full bottom-0 mb-4 z-50">
        <ul className="menu menu-horizontal bg-base-100 rounded-box border-4 rounded-lg border-primary grid-cols-3 gap-4 w-fit pl-5 pr-5">
          <li>
            <a href={"/"}>
              <HomeIcon className="h-7 w-7" stroke="currentColor"></HomeIcon>
            </a>
          </li>
          <li>
            <a href={"/search"}>
              <MagnifyingGlassIcon
                className="h-7 w-7"
                stroke="currentColor"
              ></MagnifyingGlassIcon>
            </a>
          </li>
          <li>
            <a href={"/list"}>
              <PlusIcon className="h-7 w-7" stroke="currentColor"></PlusIcon>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
