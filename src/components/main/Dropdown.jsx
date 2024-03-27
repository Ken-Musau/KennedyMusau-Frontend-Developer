import "./main.css";

function Dropdown({
  showDropdown,
  areas,
  selectedArea,
  setSelectedArea,
  applyFilter,
}) {
  if (!showDropdown) return null;

  return (
    <div className="dropdown">
      <h3>Filter By Area:</h3>
      <ul>
        {areas.map((area, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`area_${index}`}
              name="area"
              value={area}
              checked={selectedArea === area}
              onChange={() => setSelectedArea(area)}
            />
            <label htmlFor={`area_${index}`}>{area}</label>
          </li>
        ))}
      </ul>
      <button onClick={applyFilter}>Apply</button>
    </div>
  );
}

export default Dropdown;
