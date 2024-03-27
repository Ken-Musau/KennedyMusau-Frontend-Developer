import { useState } from "react";
import MealCard from "../mealcard/MealCard";
import "./meallist.css";
import Mealmodal from "../mealmodal/Mealmodal";

function MealList({ meals }) {
  // const [openModal, setOpenModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState("");

  const handleGetMealId = (id) => {
    setSelectedMeal(id);
  };

  console.log(selectedMeal);

  // if (selectedMeal) return <Mealmodal />;

  return (
    <div>
      <div className="mealListContainer">
        {meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            meal={meal}
            onGetMealId={handleGetMealId}
          />
        ))}
      </div>
      {selectedMeal && (
        <Mealmodal mealId={selectedMeal} onGetMealId={handleGetMealId} />
      )}
    </div>
  );
}

export default MealList;
