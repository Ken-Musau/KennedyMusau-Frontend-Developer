import { useState } from "react";
import "./main.css";
import { IoFilterOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import MealList from "../mealList/MealList";
import Dropdown from "./Dropdown";

function Main() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedArea, setSelectedArea] = useState("indian");
  const areas = ["Indian", "Kenyan", "Canadian", "Jamaican"];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const applyFilter = () => {
    // Apply filter logic here
    console.log("Selected Area:", selectedArea);
    // Close dropdown after applying filter
    setShowDropdown(false);
  };

  console.log(selectedArea);

  return (
    <div className="main">
      <div className="mainContainer">
        <div className="mainheading">
          <h2>Restaurants with online food delivery</h2>
        </div>

        <div className="sort-btns">
          <button className="btn filterByArea" onClick={toggleDropdown}>
            Filter <IoFilterOutline />
          </button>
          <button className="btn">
            Sort By <FaAngleDown />
          </button>
          <button className="btn">Fast Delivery</button>
          <button className="btn">New on Feasty</button>
          <button className="btn">Offers</button>
        </div>

        <Dropdown
          showDropdown={showDropdown}
          areas={areas}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
          applyFilter={applyFilter}
          toggleDropdown={toggleDropdown}
        />

        <div>
          <MealList selectedArea={selectedArea} />
        </div>
      </div>
    </div>
  );
}

export default Main;
