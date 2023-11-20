import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import UnitModal from "../Modals/UnitModal";
import CashModal from "../Modals/CashModal";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar bg-base-100 mb-5 py-2  fixed top-0 left-0 right-0 z-20 border-gray-300  dark:border-gray-600 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Nyumbani</Link>
            </li>
            <li>
              <Link to="/calculator" className="text-green-500 font-bold">
                Calculator
              </Link>
              <ul className="flex flex-col items-center justify-center gap-2 ">
                <li>
                  <button
                    className="btn btn-warning l"
                    onClick={() =>
                      document.getElementById("cash_modal").showModal()
                    }
                  >
                    Kujua Pesa →{" "}
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-success l"
                    onClick={() =>
                      document.getElementById("units_modal").showModal()
                    }
                  >
                    Kujua units →{" "}
                  </button>
                </li>
                <UnitModal />
                <CashModal />
              </ul>
            </li>
            <li>
              <Link to="/about-us">Kuhusu sisi</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl logo green-text-gradient">
          Umemefyy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  ">
          <li>
            <Link to="/">Nyumbani</Link>
          </li>
          <li tabIndex={0}>
            <div
              className="dropdown w-44 flex items-center justify-center z-10 "
              tabIndex={0}
            >
              <p className="text-green-500">Calculator</p>
              <ul
                className="p-2 dropdown-content flex flex-col gap-2 mt-36"
                tabIndex={0}
              >
                <li>
                  <button
                    className="btn btn-warning  "
                    onClick={() =>
                      document.getElementById("cash_modal").showModal()
                    }
                  >
                    Kujua Pesa →{" "}
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-success  "
                    onClick={() =>
                      document.getElementById("units_modal").showModal()
                    }
                  >
                    Kujua units →{" "}
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/about-us">Kuhusu sisi</Link>
          </li>
        </ul>
        <UnitModal />
        <CashModal />
      </div>
      <div className="navbar-end">
        <ThemeToggler />
        {/* <a className=" btn btn-success">Get App</a> */}
      </div>
    </div>
  );
};
export default Navbar;
// todo : dropdown - desktop
// todo : dropdown - desktop
