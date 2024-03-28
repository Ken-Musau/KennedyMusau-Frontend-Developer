import { useState } from "react";
import MealCard from "../mealcard/MealCard";
import "./meallist.css";
import Mealmodal from "../mealmodal/Mealmodal";
import { createPortal } from "react-dom";
import Pagination from "../pagination/Pagination";

function MealList({ meals }) {
  const [selectedMeal, setSelectedMeal] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const handleGetMealId = (id) => {
    setSelectedMeal(id);
  };

  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = meals.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <div className="mealListContainer">
        {currentPosts.map((meal) => (
          <MealCard
            key={meal.idMeal}
            meal={meal}
            onGetMealId={handleGetMealId}
          />
        ))}
      </div>

      {selectedMeal &&
        createPortal(
          <Mealmodal mealId={selectedMeal} onClose={handleGetMealId} />,
          document.body
        )}
      <Pagination
        totalPosts={meals.length}
        postsPerPage={postsPerPage}
        setCurrenPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default MealList;
