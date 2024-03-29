import { useEffect, useState } from "react";

import "./mealmodal.css";

function Mealmodal({ mealId, onClose }) {
  const baseUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  const [meal, setMeal] = useState([]);
  const { strMeal, strCategory, strArea, strMealThumb, strInstructions } = meal;

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMeals();
  }, [baseUrl]);

  // Trim strInstructions to make it short
  const trimmedInstructions = strInstructions
    ? strInstructions.substring(0, 550)
    : "";
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") {
          onClose(null);
        }
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={() => onClose(null)}>
            &times;
          </p>
        </div>
        <div className="modal-content">
          <div className="meal-title">{strMeal}</div>
        </div>
        <div className="tags">
          <button>{strCategory}</button>
          <button>{strArea}</button>
        </div>

        <div className="mealContent">
          <div className="imageContainer">
            <img src={strMealThumb} alt="" />
          </div>
          <div className="mealRecipe">
            <h3>Recipe</h3>
            <p>{trimmedInstructions}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={() => onClose(null)}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Mealmodal;
