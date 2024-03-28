import { useEffect, useState } from "react";
import "./main.css";
import { IoFilterOutline } from "react-icons/io5";
import { FaSortAlphaUp } from "react-icons/fa";
import MealList from "../mealList/MealList";
import Dropdown from "./Dropdown";

function Main() {
  const [meals, setMeals] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedArea, setSelectedArea] = useState("indian");
  const [sortBy, setSortBy] = useState(null);

  const baseUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`;

  const areas = ["Indian", "Kenyan", "Canadian", "Jamaican", "American"];

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        let sortedMeals = data.meals;
        if (sortBy === "asc") {
          sortedMeals = data.meals
            .slice()
            .sort((a, b) => a.strMeal.localeCompare(b.strMeal));
        } else if (sortBy === "desc") {
          sortedMeals = data.meals
            .slice()
            .sort((a, b) => b.strMeal.localeCompare(a.strMeal));
        }
        setMeals(sortedMeals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMeals();
  }, [baseUrl, sortBy]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const applyFilter = () => {
    // Apply filter
    console.log("Selected Area:", selectedArea);
    // Close dropdown after applying filter
    setShowDropdown(false);
  };

  const handleSortBy = () => {
    // Toggle sorting order between ascending and descending
    setSortBy(sortBy === "asc" ? "desc" : "asc");
  };

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
          <button className="btn sortBy" onClick={handleSortBy}>
            Sort By <FaSortAlphaUp />
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
          <MealList selectedArea={selectedArea} meals={meals} />
        </div>
      </div>
    </div>
  );
}

export default Main;
