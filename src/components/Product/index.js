import Button from "../Button";
import "./Product.css";
const Product = ({ id, name, description, price, url, onClick }) => {
  return (
    <div key={id} className="product__container">
      <div className="product__image">
        <img src={url} alt="product" />
      </div>
      <h1 className="product__name">{name}</h1>
      <p className="product__description">{description}</p>
      <p className="product__price">Rs. {price}</p>
      <Button
        name="addToCart"
        classNames="product__btn btn-primary"
        onClick={onClick}
      >
        Add to cart
      </Button>
      {/* <button className="btn product__btn">Add to cart</button> */}
    </div>
  );
};

export default Product;
