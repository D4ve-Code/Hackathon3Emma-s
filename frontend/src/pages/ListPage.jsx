import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import imageStickerList from "../assets/images/materiel-partenaires.jpg";
import FilterListPage from "@components/FilterListPage";

const ListPage = ({ dataPhones }) => {
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [filteredItems, setFilteredItems] = useState(dataPhones);
  const [searchId, setSearchId] = useState("");

  const applyFilters = (dataPhones, selectedBrands, searchId) => {
    let filteredItems = dataPhones;
    if (selectedBrands.size > 0) {
      filteredItems = filteredItems.filter((item) =>
        selectedBrands.has(item.constructeur)
      );
    }
    if (searchId) {
      filteredItems = filteredItems.filter((item) =>
        item.id_emmaus_connect.toString().startsWith(searchId)
      );
    }
    return filteredItems;
  };
  useEffect(() => {
    const newFilteredItems = applyFilters(dataPhones, selectedBrands, searchId);
    setFilteredItems(newFilteredItems);
  }, [selectedBrands, dataPhones, searchId]);

  return (
    <>
      <div className="listPage__container">
        <div className="listPage__container__title">
          <h1>Liste des smartphones</h1>
        </div>
        <div className="listPage__container__image">
          <img src={imageStickerList} alt="image de la liste des smartphones" />
        </div>
        <div className="listPage__search">
          <h2 className="listPage__title__search">Rechercher par id Emmaus</h2>{" "}
          <input
            type="number"
            placeholder="Entrer un id à 6 chiffres"
            className="listPage__input"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <FiSearch className="btn_seacrh" />
        </div>
        <div className="listPage__container__list">
          {filteredItems.map((phone) => (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th>Id Emmaus</th>
                    <th>Marque</th>
                    <th>Modèle</th>
                    <th>Etat</th>
                    <th>RAM</th>
                    <th>Stockage</th>
                    <th>Indice antutu</th>
                    <th>Pondération</th>
                    <th>Localisation</th>
                    <th>Catégorie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{phone.id_emmaus_connect}</td>
                    <td>{phone.constructeur}</td>
                    <td>{phone.modele}</td>
                    <td>{phone.statut}</td>
                    <td>{phone.ram_nb}</td>
                    <td>{phone.stockage_nb}</td>
                    <td>{phone.antutu}</td>
                    <td>{phone.ponderation_taux}</td>
                    <td>{phone.ville}</td>
                    <td>{phone.categorie_name}</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn__modif">modifier</button>
            </>
          ))}
        </div>
        <FilterListPage
          className="filter__list__page"
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
      </div>
    </>
  );
};

export default ListPage;
