import React, { useContext, useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../store/AppContext";
import { FaBarsStaggered, FaXmark, FaCircleUser } from "react-icons/fa6";
import Navlogo from "../assets/imgs/Store-Logo-removebg-preview.png";
import "./navbar.css";
import { getCart } from "../api/cartApi";

const Navbar = () => {

  const [cart, setCart] = useState([])
  const getdetailsCart = async () => {
    try {
      const res = await getCart()
      setCart(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getdetailsCart()

  })
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // Close menu when clicking on a menu item
  const handleMenuClick = () => {
    setOpen(false);
  };

  // Sticky header on scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("sticky-nav");
      } else {
        headerRef.current.classList.remove("sticky-nav");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header className="navbar" ref={headerRef}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img className="navbar-logo" src={Navlogo} alt="logo" />
        </Link>

        {/* Nav Links */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={handleMenuClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/brands" onClick={handleMenuClick}>
              Brands
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={handleMenuClick}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleMenuClick}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="nav-icons">
          <Link to="/user">
            <FaCircleUser style={{ position: "relative", top: "-8px" }} className="icon mx-4" />
          </Link>

          <Link to="/cart" className="cart-icon">
            <FaShoppingCart className="cart-icon-svg" />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>

          {/* Mobile menu button */}
          <button className="menu-btn" onClick={toggleMenu}>
            {open ? <FaXmark /> : <FaBarsStaggered />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
