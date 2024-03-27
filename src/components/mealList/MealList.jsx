import { useEffect, useState } from "react";
import MealCard from "../mealcard/MealCard";
import "./meallist.css";

function MealList() {
  const baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian";
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMeals(data.meals);
        console.log(data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div>
      <div className="mealListContainer">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default MealList;
