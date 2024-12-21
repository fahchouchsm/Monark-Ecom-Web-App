import { FC } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HomePageInt {}

const HomePage: FC<HomePageInt> = () => {
  return (
    <>
      <Link to={"/products/haha"}>Home</Link>
    </>
  );
};

export default HomePage;
