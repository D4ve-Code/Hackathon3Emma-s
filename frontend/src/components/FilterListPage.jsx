import { useState } from "react";

const FilterListPage = () => {
  const [activeFilterGenre] = useState("Tous");
  const [showDropdownGenre, setShowDropdownGenre] = useState(false);

  // const handleSelectGenre = (filterGenre) => {
  //   setActiveFilterGenre(filterGenre);
  //   setShowDropdownGenre(false);
  // };

  //   const filtersGenre = [
  //     "Tous",
  //     ...catalog.reduce((acc, curr) => {
  //       const genres = curr.genres.split(",");
  //       genres.forEach((genre) => {
  //         if (!acc.includes(genre.trim())) {
  //           acc.push(genre.trim());
  //         }
  //       });
  //       return acc;
  //     }, []),
  //   ].sort((a, b) => {
  //     if (a === "Tous") {
  //       return -1;
  //     } else if (b === "Tous") {
  //       return 1;
  //     } else {
  //       return a.localeCompare(b);
  //     }
  //   });

  //   const filtersEtat = [
  //     "Tous",
  //     ...catalog.reduce((acc, curr) => {
  //       const etat = curr.etat.split(",");
  //       etat.forEach((etat) => {
  //         if (!acc.includes(etat.trim())) {
  //           acc.push(etat.trim());
  //         }
  //       });
  //       return acc;
  //     }, []),
  //   ].sort((a, b) => {
  //     if (a === "Tous") {
  //       return -1;
  //     } else if (b === "Tous") {
  //       return 1;
  //     } else {
  //       return a.localeCompare(b);
  //     }
  //   });

  const handleDropdownGenreToggle = () => {
    setShowDropdownGenre(!showDropdownGenre);
  };

  return (
    <div className="filter__list__container">
      <div className="filterOption-box">
        <div className="filter__Title">Marque :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownGenreToggle}>
            <div>{activeFilterGenre}</div> <div>&#x25BE;</div>
          </button>
          {showDropdownGenre && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">modele</li>
              <li className="filterDropdownItem">marque</li>
              <li className="filterDropdownItem">couleur</li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Modèle :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownGenreToggle}>
            <div>{activeFilterGenre}</div> <div>&#x25BE;</div>
          </button>
          {showDropdownGenre && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">modele</li>
              <li className="filterDropdownItem">marque</li>
              <li className="filterDropdownItem">couleur</li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Etat :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownGenreToggle}>
            <div>{activeFilterGenre}</div> <div>&#x25BE;</div>
          </button>
          {showDropdownGenre && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">modele</li>
              <li className="filterDropdownItem">marque</li>
              <li className="filterDropdownItem">couleur</li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">RAM :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownGenreToggle}>
            <div>{activeFilterGenre}</div> <div>&#x25BE;</div>
          </button>
          {showDropdownGenre && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">modele</li>
              <li className="filterDropdownItem">marque</li>
              <li className="filterDropdownItem">couleur</li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Stockage :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownGenreToggle}>
            <div>{activeFilterGenre}</div> <div>&#x25BE;</div>
          </button>
          {showDropdownGenre && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">modele</li>
              <li className="filterDropdownItem">marque</li>
              <li className="filterDropdownItem">couleur</li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Catégorie :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownGenreToggle}>
            <div>{activeFilterGenre}</div> <div>&#x25BE;</div>
          </button>
          {showDropdownGenre && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">modele</li>
              <li className="filterDropdownItem">marque</li>
              <li className="filterDropdownItem">couleur</li>
            </ul>
          )}
        </div>
      </div>
      <div className="filterOption-box">
        <div className="filter__Title">Ville :</div>
        <div className="filter__Container">
          <button className="filterButton" onClick={handleDropdownGenreToggle}>
            <div>{activeFilterGenre}</div> <div>&#x25BE;</div>
          </button>
          {showDropdownGenre && (
            <ul className="filterDropdown">
              <li className="filterDropdownItem">modele</li>
              <li className="filterDropdownItem">marque</li>
              <li className="filterDropdownItem">couleur</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterListPage;
