import "./mealcard.css";
import { MdStars } from "react-icons/md";
function MealCard({ meal, onGetMealId }) {
  const { strMeal, strMealThumb, idMeal } = meal;

  // Function to generate a random number between min and max (inclusive)
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // Generating a random number between 1.0 and 5.0

  const rating = getRandomNumber(1.0, 5.0);

  return (
    <div className="mealcard" onClick={() => onGetMealId(idMeal)}>
      <div className="mealCardContainer">
        <div className="mealImageContainer">
          <img src={strMealThumb} alt="" />
        </div>

        <div className="mealDescription">
          <span>
            <MdStars /> {rating.toFixed(1)}
          </span>
          <p>{strMeal}</p>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
