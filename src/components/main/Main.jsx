import "./main.css";

import { IoFilterOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import MealList from "../mealList/MealList";

function Main() {
  return (
    <div className="main">
      <div className="mainContainer">
        <div className="mainheading">
          <h2>Restaurants with online food delivery</h2>
        </div>

        <div className="sort-btns">
          <button className="btn">
            Filter <IoFilterOutline />
          </button>
          <button className="btn">
            Sorty By <FaAngleDown />
          </button>
          <button className="btn">Fast Delivery</button>
          <button className="btn">New on Feasty</button>
          <button className="btn">Offers</button>
        </div>

        <div>
          <MealList />
        </div>
      </div>
    </div>
  );
}

export default Main;
