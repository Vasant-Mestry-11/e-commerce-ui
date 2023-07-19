import Products from "../../Pages/Products";
import { PRODUCTS_LIST } from "../../constants/Products";
import Header from "../Header";

const Home = () => {
  return (
    <>
      <Header />
      <Products items={PRODUCTS_LIST} />
    </>
  );
};

export default Home;
