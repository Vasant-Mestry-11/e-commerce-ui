import Product from "../../components/Product";
import "./Products.css";

const Products = ({ items }) => {
  return (
    <div className="products">
      {items.map(({ id, name, description, category, price, url }, index) => {
        return (
          <Product
            key={index}
            id={id}
            name={name}
            description={description}
            category={category}
            price={price}
            url={url}
          />
        );
      })}
    </div>
  );
};

export default Products;
