import { Link } from "react-router-dom";
import { MenuLogo } from "../assets/icons";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <MenuLogo />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Calculator</a>
              <ul className="p-2">
                <li>
                  <Link to="/kujua-malipo">kujua-malipo</Link>
                </li>
                <li>
                  <Link to="/kujua-units-unazopata">kujua-units-unazopata</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl logo text-green-300">
          Umemefyy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Calculator</summary>
              <ul className="p-2">
                <li>
                  <Link to="/kujua-malipo">Malipo</Link>
                </li>
                <li>
                  <Link to="/kujua-units-unazopata">Units</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggler />
        <a className="btn">Get App</a>
      </div>
    </div>
  );
};
export default Navbar;
