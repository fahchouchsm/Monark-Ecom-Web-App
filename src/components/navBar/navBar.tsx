import { FC, useState } from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import NavBarSideContent from "./navBarSideContent";
import { AlignJustify, Search, ShoppingBag } from "lucide-react";
import NavBarSearch from "./navBarSearch";
import NavBarCard from "./navBarCard";
import NavBarDeskSearch from "./navBarDeskSearch";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavBarInt {}

const NavBar: FC<NavBarInt> = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <nav className="flex h-20 items-center justify-between bg-black px-5 py-4 text-neutral-500 md:h-16 md:px-5 md:py-4">
        <a href="/" aria-label="Go to homepage">
          <img
            src="/imgs/logo/mainLogoWhite.png"
            alt="Company Logo"
            className="max-w-24 md:max-w-20"
          />
        </a>
        <div className="flex gap-4">
          <button
            aria-label="Open search"
            onClick={() => setOpenSearch(true)}
            className="h-auto w-7 md:hidden"
          >
            <Search className="h-auto w-full" />
          </button>
          {/* Desktop Search */}
          <NavBarDeskSearch />
          {/*  */}
          <Sheet>
            <SheetTrigger className="w-7 md:w-5">
              <ShoppingBag
                className="h-auto w-full md:w-full"
                aria-label="Open shopping bag"
              />
            </SheetTrigger>
            <NavBarCard />
          </Sheet>
          <Sheet>
            <SheetTrigger className="w-8 md:hidden">
              <AlignJustify className="h-auto w-full" aria-label="Open menu" />
            </SheetTrigger>
            <NavBarSideContent />
          </Sheet>
        </div>
        {openSearch && <NavBarSearch setSearchOpen={setOpenSearch} />}
      </nav>
    </>
  );
};

export default NavBar;
