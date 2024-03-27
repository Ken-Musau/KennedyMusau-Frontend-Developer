function MealCard({ meal }) {
  const { idMeal, strMeal, strMealThumb } = meal;
  return (
    <div>
      <p>{idMeal}</p>
      <p>{strMeal}</p>
      <img src={strMealThumb} alt="" />
    </div>
  );
}

export default MealCard;
