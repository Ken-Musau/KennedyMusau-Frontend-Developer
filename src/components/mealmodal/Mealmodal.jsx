import { useEffect, useState } from "react";

import "./mealmodal.css";

function Mealmodal({ mealId, onGetMealId }) {
  const baseUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  const [meal, setMeal] = useState([]);
  const { strMeal, strCategory, strArea, strMealThumb, strYoutube } = meal;

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

  console.log(meal);
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={() => onGetMealId("")}>
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

        <div className="media">
          <img src={strMealThumb} alt="" />
          {strYoutube && (
            <video controls>
              <source
                src={strYoutube.replace("watch?v=", "embed/")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}

export default Mealmodal;
