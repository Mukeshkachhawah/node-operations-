import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./index.css"; // Add your custom styles if needed
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <button
            className="btn btn-outline-light me-3"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`sidebar bg-primary text-white ${
          isSidebarOpen ? "open" : ""
        }`}
      >
        <button className="close-btn text-white" onClick={toggleSidebar}>
          ✕
        </button>
        <ul className="sidebar-menu">
          <li>
            <Link
              to="/all-product"
              className="sidebar-link"
              onClick={toggleSidebar}
            >
              All Products
            </Link>
          </li>
          <li>
            <Link
              to="/add-product"
              className="sidebar-link"
              onClick={toggleSidebar}
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link
              to="/updateProduct"
              className="sidebar-link"
              onClick={toggleSidebar}
            >
              Update Product
            </Link>
          </li>
          <li>
            <Link
              to="/delete-product"
              className="sidebar-link"
              onClick={toggleSidebar}
            >
              Delete Product
            </Link>
            <Link
              to="/add-user"
              className="sidebar-link"
              onClick={toggleSidebar}
            >
              Add user
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
