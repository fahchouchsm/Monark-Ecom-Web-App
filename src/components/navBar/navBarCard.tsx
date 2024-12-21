import { FC } from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavBarCardInt {}

const NavBarCard: FC<NavBarCardInt> = () => {
  return (
    <>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Card</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </>
  );
};

export default NavBarCard;
