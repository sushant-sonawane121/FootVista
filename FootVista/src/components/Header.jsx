import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header border border-1 py-2">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="header-title">
            <h2 className="text-light">FootVista</h2>
          </div>
          <nav>
            <ul className="d-flex gap-5 list-unstyled mb-0">
              <li>
                <Link to={"/"} className="text-decoration-none text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"listings"}
                  className="text-decoration-none text-dark"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to={"listings"}
                  className="text-decoration-none text-dark"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to={"listings"}
                  className="text-decoration-none text-dark"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link to={"new"} className="text-decoration-none text-dark">
                  New Arivals
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-right d-flex align-items-center justify-content-evenly w-25">
            <div className="header-serach">
              <form>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn search-btn bg-white" type="submit">
                    <FaSearch />
                  </button>
                </form>
              </form>
            </div>
            <div className="header-btns d-flex align-items-center justify-content-evenly w-50">
              <Link to={"login"} className="btn">
                Login
              </Link>
              <FaShoppingCart className="fs-4 cart" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
