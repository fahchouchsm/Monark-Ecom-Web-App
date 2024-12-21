import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { productInt } from "@/interfaces/globaleInterfaces";
import { FC } from "react";

interface BreadCrumbInt {
  secondary: string[];
  main: productInt;
}

const BreadCrumb: FC<BreadCrumbInt> = ({ main, secondary }) => {
  return (
    <>
      <div className="items-center hidden text-xs font-medium sm:flex sm:text-sm">
        <ul className="flex">
          {secondary.map((sec, i) => (
            <li key={i} className="flex items-center justify-center">
              <Link to={`${sec}`} className="first-letter:uppercase">
                {sec}
              </Link>
              <ChevronRight className="h-4 text-neutral-500" />
            </li>
          ))}
        </ul>
        <div className="flex-1 overflow-hidden">
          <Link
            to={`/${main.id}`}
            className="overflow-hidden capitalize text-ellipsis whitespace-nowrap text-neutral-500"
          >
            {main.name.replace(/-/g, " ")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
