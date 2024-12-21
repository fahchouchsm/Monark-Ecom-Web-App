import { Search, X } from "lucide-react";
import { FC, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavBarDeskSearchInt {}
const NavBarDeskSearch: FC<NavBarDeskSearchInt> = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      {openSearch ? (
        <div className="flex items-center justify-center border border-neutral-500">
          <input
            type="search"
            className="hidden max-h-6 w-44 bg-transparent px-1.5 py-1 text-xs text-white outline-none placeholder:text-neutral-500 md:block"
            placeholder="Search"
            aria-label="Search the website"
          />
          <div
            className="flex cursor-pointer items-center justify-center text-sm hover:bg-neutral-900 hover:text-white"
            aria-label="Close search input"
            role="button"
            onClick={() => {
              setOpenSearch(false);
            }}
          >
            <X className="w-9/12" />
          </div>
        </div>
      ) : (
        <button
          aria-label="Open search"
          onClick={() => setOpenSearch(true)}
          className="h-auto w-5"
        >
          <Search className="h-auto w-full" />
        </button>
      )}
    </>
  );
};
export default NavBarDeskSearch;
