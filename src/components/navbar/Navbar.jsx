import "./navbar.css";

import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <nav>
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
