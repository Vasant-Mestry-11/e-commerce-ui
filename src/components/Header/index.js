import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">PW</div>

      <nav className="navbar">
        <ul className="nav__items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
