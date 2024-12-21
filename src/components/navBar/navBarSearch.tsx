import { X } from "lucide-react";
import { FC } from "react";

interface NavBarSearchInt {
  setSearchOpen: (e: boolean) => void;
}

const NavBarSearch: FC<NavBarSearchInt> = ({ setSearchOpen }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-white">
        <div className="relative h-20">
          <input
            type="search"
            className="h-full w-full rounded-none border-0 bg-black px-5 pr-10 text-white outline-none ring-0"
            placeholder="Search"
            aria-label="Search the website"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 transform text-white"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            <X />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBarSearch;
