import { FC } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "./components/breadCrumb";
import { productInt } from "@/interfaces/globaleInterfaces";
import ProductCarousel from "./components/productCarousel";
import ProductSideDetails from "./components/productSideDetails";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ProductPageInt {}

const ProductPage: FC<ProductPageInt> = () => {
  const { productId } = useParams();
  console.log(productId);

  const product: productInt = {
    id: "123",
    name: "arcteryx-mantis-26-backpack-arctic-silk name: arctery-mantis-26-backpack-arctic-silk ",
  };

  return (
    <>
      <main className="">
        <BreadCrumb main={product} secondary={["men", "cloth"]} />
        <div className="flex flex-col gap-5 sm:flex-row">
          <ProductCarousel />
          <ProductSideDetails />
        </div>
      </main>
    </>
  );
};

export default ProductPage;
