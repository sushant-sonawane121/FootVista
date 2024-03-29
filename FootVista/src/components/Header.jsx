import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              FootVista
            </Link>
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"products"} className="nav-link">
                    Men
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"products"} className="nav-link">
                    Women
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"products"} className="nav-link">
                    Kids
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"new"} className="nav-link">
                    New Arrivals
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav d-lg-flex d-sm-flex flex-row gap-3 xalign-items-center">
                <li className="nav-item">
                  <Link to={"login"} className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"cart"} className="nav-link">
                    <FaShoppingCart />
                  </Link>
                </li>
                
              </ul>
              <form className="d-flex me-auto d-lg-none">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  <FaSearch />
                </button>
              </form>
              
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
