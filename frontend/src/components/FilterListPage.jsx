import { useState } from "react";

const FilterListPage = () => {
  const [activeFilterMarque] = useState("Tous");
  const [showDropdownMarque, setShowDropdownMarque] = useState(false);

  const [activeFilterModel] = useState("Tous");
  const [showDropdownModel, setShowDropdownModel] = useState(false);

  const [activeFilterEtat] = useState("Tous");
  const [showDropdownEtat, setShowDropdownEtat] = useState(false);

  const [activeFilterRam] = useState("Tous");
  const [showDropdownRam, setShowDropdownRam] = useState(false);

  const [activeFilterStockage] = useState("Tous");
  const [showDropdownStockage, setShowDropdownStockage] = useState(false);

  const [activeFilterCategory] = useState("Tous");
  const [showDropdownCategory, setShowDropdownCategory] = useState(false);

  const [activeFilterCity] = useState("Tous");
  const [showDropdownCity, setShowDropdownCity] = useState(false);

  const handleDropdownMarqueToggle = () => {
    setShowDropdownMarque(!showDropdownMarque);
  };
  const handleDropdownModelToggle = () => {
    setShowDropdownModel(!showDropdownModel);
  };
  const handleDropdownEtatToggle = () => {
    setShowDropdownEtat(!showDropdownEtat);
  };
  const handleDropdownRamToggle = () => {
    setShowDropdownRam(!showDropdownRam);
  };
  const handleDropdownStockageToggle = () => {
    setShowDropdownStockage(!showDropdownStockage);
  };
  const handleDropdownCategoryToggle = () => {
    setShowDropdownCategory(!showDropdownCategory);
  };
  const handleDropdownCityToggle = () => {
    setShowDropdownCity(!showDropdownCity);
  };

  return (
    <div className="filter__list__container">
      <div className="filterOption-box">
        <div className="filter__Title">Marque :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownMarqueToggle}>
            <div>{activeFilterMarque}</div>{" "}
            <div className="icon__filter">&#x25BE;</div>
          </button>
          {showDropdownMarque && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">
                <label htmlFor="check" className="label__filter">
                  <input type="checkbox" id="check" /> Apple
                </label>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Modèle :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownModelToggle}>
            <div>{activeFilterModel}</div>{" "}
            <div className="icon__filter">&#x25BE;</div>
          </button>
          {showDropdownModel && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">
                <label htmlFor="check" className="label__filter">
                  <input type="checkbox" id="check" /> Iphone 12
                </label>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Etat :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownEtatToggle}>
            <div>{activeFilterEtat}</div>{" "}
            <div className="icon__filter">&#x25BE;</div>
          </button>
          {showDropdownEtat && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">
                <label htmlFor="check" className="label__filter">
                  <input type="checkbox" id="check" /> DEEE
                </label>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">RAM :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownRamToggle}>
            <div>{activeFilterRam}</div>{" "}
            <div className="icon__filter">&#x25BE;</div>
          </button>
          {showDropdownRam && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">
                <label htmlFor="check" className="label__filter">
                  <input type="checkbox" id="check" /> 1 Go
                </label>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Stockage :</div>
        <div className="filter__Container">
          <button
            className="filterButton"
            onClick={handleDropdownStockageToggle}
          >
            <div>{activeFilterStockage}</div>{" "}
            <div className="icon__filter">&#x25BE;</div>
          </button>
          {showDropdownStockage && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">
                <label htmlFor="check" className="label__filter">
                  <input type="checkbox" id="check" /> 32 Go
                </label>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Catégorie :</div>
        <div className="filter__Container">
          <button
            className="filterButton"
            onClick={handleDropdownCategoryToggle}
          >
            <div>{activeFilterCategory}</div>{" "}
            <div className="icon__filter">&#x25BE;</div>
          </button>
          {showDropdownCategory && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">
                <label htmlFor="check" className="label__filter">
                  <input type="checkbox" id="check" /> 3 - B
                </label>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Ville :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownCityToggle}>
            <div>{activeFilterCity}</div>{" "}
            <div className="icon__filter">&#x25BE;</div>
          </button>
          {showDropdownCity && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">
                <label htmlFor="check" className="label__filter">
                  <input type="checkbox" id="check" /> Reims
                </label>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterListPage;
