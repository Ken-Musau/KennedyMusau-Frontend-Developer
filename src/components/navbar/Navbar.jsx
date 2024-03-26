import { useState, useEffect } from "react";
import "./navbar.css";

import { FaSearch } from "react-icons/fa";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">FI3STY</div>
        <div className="search-bar">
          <input type="search" placeholder="Search for restaurant and food" />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
