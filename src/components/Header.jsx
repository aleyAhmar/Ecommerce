import React from "react";
import { NavLink } from "react-router-dom";
import ProductPage from './ProductPage'
import HomePage from './HomePage'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"> 
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          AHC - Surgical Equipments
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" element={<HomePage/>}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products" element={<ProductPage/>}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" element={<AboutPage/>}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" element={<ContactPage/>}>
                Contact Us
              </NavLink>
            </li>
            
              {/* <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Something else here
                  </NavLink>
                </li>
              </ul> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
