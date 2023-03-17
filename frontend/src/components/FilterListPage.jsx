import axios from "axios";
import { useEffect, useState } from "react";

const FilterListPage = ({
  setSelectedBrands,
  selectedBrands,
  setSelectedEtat,
  selectedEtat,
  selectedCategory,
  setSelectedCategory,
  selectedCity,
  setSelectedCity,
}) => {
  const [dataEtat, setDataEtat] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataCity, setDataCity] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/etat").then((response) => {
      setDataEtat(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((response) => {
      setDataCategory(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/localisation").then((response) => {
      setDataCity(response.data);
    });
  }, []);

  const [showDropdownMarque, setShowDropdownMarque] = useState(false);
  const [showDropdownEtat, setShowDropdownEtat] = useState(false);
  const [showDropdownCategory, setShowDropdownCategory] = useState(false);
  const [showDropdownCity, setShowDropdownCity] = useState(false);

  const handleDropdownMarqueToggle = () => {
    setShowDropdownMarque(!showDropdownMarque);
  };
  const handleDropdownEtatToggle = () => {
    setShowDropdownEtat(!showDropdownEtat);
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

  const handleEtatCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (value === "Tous") {
      if (checked) {
        setSelectedEtat(new Set());
      } else {
        setSelectedEtat(new Set(dataEtat.map((etat) => etat.statut)));
      }
    } else {
      const updatedEtats = new Set(selectedEtat);
      if (checked) {
        updatedEtats.add(value);
      } else {
        updatedEtats.delete(value);
      }
      setSelectedEtat(updatedEtats);
    }
  };

  const handleCategoryCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (value === "Tous") {
      if (checked) {
        setSelectedCategory(new Set());
      } else {
        setSelectedCategory(
          new Set(dataCategory.map((Category) => Category.categorie_name))
        );
      }
    } else {
      const updatedCategory = new Set(selectedCategory);
      if (checked) {
        updatedCategory.add(value);
      } else {
        updatedCategory.delete(value);
      }
      setSelectedCategory(updatedCategory);
    }
  };

  const handleCityCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (value === "Tous") {
      if (checked) {
        setSelectedCity(new Set());
      } else {
        setSelectedCity(new Set(dataCity.map((City) => City.ville)));
      }
    } else {
      const updatedCity = new Set(selectedCity);
      if (checked) {
        updatedCity.add(value);
      } else {
        updatedCity.delete(value);
      }
      setSelectedCity(updatedCity);
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
        <div className="filter__Title">État :</div>
        <div className="filter__Container">
          <div className="filterDiv">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="etat-check"
                value="Tous"
                checked={selectedEtat.size === 0}
                onChange={handleEtatCheckboxChange}
              />
              <p>Tous</p>
            </div>
            <div className="icon__filter" onClick={handleDropdownEtatToggle}>
              &#x25BE;
            </div>
          </div>
          {showDropdownEtat && (
            <div className="filterDropdown">
              {dataEtat.map((etat) => (
                <div className="checkbox-item" key={etat.id}>
                  <input
                    type="checkbox"
                    id={`etat-${etat.id}`}
                    value={etat.statut}
                    checked={selectedEtat.has(etat.statut)}
                    onChange={handleEtatCheckboxChange}
                  />
                  <label htmlFor={`etat-${etat.id}`}>{etat.statut}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Catégories :</div>
        <div className="filter__Container">
          <div className="filterDiv">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="etat-check"
                value="Tous"
                checked={selectedCategory.size === 0}
                onChange={handleCategoryCheckboxChange}
              />
              <p>Tous</p>
            </div>
            <div
              className="icon__filter"
              onClick={handleDropdownCategoryToggle}
            >
              &#x25BE;
            </div>
          </div>
          {showDropdownCategory && (
            <div className="filterDropdown">
              {dataCategory.map((categorie) => (
                <div className="checkbox-item" key={categorie.id}>
                  <input
                    type="checkbox"
                    id={`categorie-${categorie.id}`}
                    value={categorie.categorie_name}
                    checked={selectedCategory.has(categorie.categorie_name)}
                    onChange={handleCategoryCheckboxChange}
                  />
                  <label htmlFor={`categorie-${categorie.id}`}>
                    {categorie.categorie_name}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Ville :</div>
        <div className="filter__Container">
          <div className="filterDiv">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="etat-check"
                value="Tous"
                checked={selectedCity.size === 0}
                onChange={handleCityCheckboxChange}
              />
              <p>Tous</p>
            </div>
            <div className="icon__filter" onClick={handleDropdownCityToggle}>
              &#x25BE;
            </div>
          </div>
          {showDropdownCity && (
            <div className="filterDropdown">
              {dataCity.map((city) => (
                <div className="checkbox-item" key={city.id}>
                  <input
                    type="checkbox"
                    id={`city-${city.id}`}
                    value={city.ville}
                    checked={selectedCity.has(city.ville)}
                    onChange={handleCityCheckboxChange}
                  />
                  <label htmlFor={`city-${city.id}`}>{city.ville}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterListPage;
