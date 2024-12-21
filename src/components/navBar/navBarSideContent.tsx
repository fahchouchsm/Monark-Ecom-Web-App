import { FC } from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavBarSideContentInt {}

const NavBarSideContent: FC<NavBarSideContentInt> = () => {
  return (
    <>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </>
  );
};

export default NavBarSideContent;
