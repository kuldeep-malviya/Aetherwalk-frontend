import React, { useContext, useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../store/AppContext";
import { FaBarsStaggered, FaXmark, FaCircleUser } from "react-icons/fa6";
import Navlogo from "../assets/imgs/Store-Logo-removebg-preview.png";
import "./navbar.css"
const Navbar = () => {
  const { cart } = useContext(AppContext);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

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

  return (
    <header className="navbar" ref={headerRef}>
      <div className="nav-container">
        
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img className="navbar-logo" src={Navlogo} alt="logo" />
        </Link>

        {/* Nav Links */}
        <ul className={`nav-links ${open ? "active" : ""}`} ref={navRef}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="nav-icons">
          <Link to="/user">
            <FaCircleUser style={{ position: "relative", top: "-8px" }} className="icon mx-4" />
          </Link>

          <Link to="/cart" className="cart-icon">
            <FaShoppingCart style={{ position: "relative", top: "-8px" }} />
            {cart.length > 0 && <span>{cart.length}</span>}
          </Link>

          <button className="menu-btn" onClick={toggleMenu}>
            {open ? <FaXmark /> : <FaBarsStaggered />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
