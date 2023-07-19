import { NavLink } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/UserSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout);
  };
  return (
    <header className="header">
      <div className="header__logo">PW</div>

      <nav className="navbar">
        <ul className="nav__items">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/checkout"
          >
            Checkout
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
