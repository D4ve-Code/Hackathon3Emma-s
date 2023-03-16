import { useState } from "react";

const FilterListPage = ({ setSelectedBrands, selectedBrands }) => {
  const [showDropdownMarque, setShowDropdownMarque] = useState(false);
  const [showDropdownModel, setShowDropdownModel] = useState(false);
  const [showDropdownEtat, setShowDropdownEtat] = useState(false);
  const [showDropdownRam, setShowDropdownRam] = useState(false);
  const [showDropdownStockage, setShowDropdownStockage] = useState(false);
  const [showDropdownCategory, setShowDropdownCategory] = useState(false);
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

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (value === "Tous") {
      if (checked) {
        setSelectedBrands(new Set());
      } else {
        setSelectedBrands(
          new Set(["APPLE", "SAMSUNG", "XIAOMI", "GOOGLE", "NOKIA"])
        );
      }
    } else {
      const updatedBrands = new Set(selectedBrands);
      if (checked) {
        updatedBrands.add(value);
      } else {
        updatedBrands.delete(value);
      }
      setSelectedBrands(updatedBrands);
    }
  };

  return (
    <div className="filter__list__container">
      <div className="filterOption-box">
        <div className="filter__Title">Marque :</div>
        <div className="filter__Container">
          <div className="filterDiv">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="check"
                value="Tous"
                checked={selectedBrands.size === 0}
                onChange={handleCheckboxChange}
              />
              <p>Tous</p>
            </div>
            <div className="icon__filter" onClick={handleDropdownMarqueToggle}>
              &#x25BE;
            </div>
          </div>
          {showDropdownMarque && (
            <div className="filterDropdown">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="check"
                  value="APPLE"
                  checked={selectedBrands.has("APPLE")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="check">Apple</label>
              </div>

              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="check"
                  value="GOOGLE"
                  checked={selectedBrands.has("GOOGLE")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="check">Google</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="check"
                  value="NOKIA"
                  checked={selectedBrands.has("NOKIA")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="check">Nokia</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="check"
                  value="SAMSUNG"
                  checked={selectedBrands.has("SAMSUNG")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="check">Samsung</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="check"
                  value="XIAOMI"
                  checked={selectedBrands.has("XIAOMI")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="check">Xiaomi</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="filterOption-box">
        <div className="filter__Title">Modèle :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownModelToggle}>
            <div></div> <div className="icon__filter">&#x25BE;</div>
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
            <div></div> <div className="icon__filter">&#x25BE;</div>
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
            <div></div> <div className="icon__filter">&#x25BE;</div>
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
            <div></div> <div className="icon__filter">&#x25BE;</div>
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
            <div></div> <div className="icon__filter">&#x25BE;</div>
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
            <div></div> <div className="icon__filter">&#x25BE;</div>
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
