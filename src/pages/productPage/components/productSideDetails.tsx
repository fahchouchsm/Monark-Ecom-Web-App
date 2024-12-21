import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ProductSideDetailsInt {}

const ProductSideDetails: FC<ProductSideDetailsInt> = () => {
  return (
    <>
      <section className="flex flex-col gap-3 px-4">
        <div className="">
          <h2 className="text-2xl font-bold uppercase">Stone Island</h2>
          <h1 className="text-lg font-semibold">
            Loom Woven Chamber Recycled Nylon Down-TC Jacket Black
          </h1>
        </div>
        <div className="gap gap-4 md:gap-8">
          <div>
            <div className="flex space-x-2 text-base">
              <div className="font-semibold text-red-600">$605.00</div>
              <div className="font-semibold text-neutral-500 line-through">
                $754.00
              </div>
            </div>
            <div className="text-subdued flex items-center text-xs">
              <p>
                or 4 interest-free payments of <span>$151.25</span> with after
                payments
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSideDetails;
