import imageStickerList from "../assets/images/materiel-partenaires.jpg";
import { FiSearch } from "react-icons/fi";
import FilterListPage from "@components/FilterListPage";
import { useState, useEffect } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
import PlayerVideoList from "../components/PlayerVideoList";
import FileCSV from "@components/FileCSV";

const ListPage = ({ dataPhones }) => {
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [selectedEtat, setSelectedEtat] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState(new Set());
  const [selectedCity, setSelectedCity] = useState(new Set());
  const [filteredItems, setFilteredItems] = useState(dataPhones);
  const [faqDisplay, setFaqDisplay] = useState(false);

  const applyFilters = (dataPhones, selectedBrands) => {
    let filteredItems = dataPhones;
    if (selectedBrands.size > 0) {
      filteredItems = filteredItems.filter((item) =>
        selectedBrands.has(item.constructeur)
      );
    }
    if (selectedEtat.size > 0) {
      filteredItems = filteredItems.filter((etat) =>
        selectedEtat.has(etat.statut)
      );
    }
    if (selectedCategory.size > 0) {
      filteredItems = filteredItems.filter((categorie) =>
        selectedCategory.has(categorie.categorie_name)
      );
    }
    if (selectedCity.size > 0) {
      filteredItems = filteredItems.filter((city) =>
        selectedCity.has(city.ville)
      );
    }
    return filteredItems;
  };
  useEffect(() => {
    const newFilteredItems = applyFilters(
      dataPhones,
      selectedBrands,
      selectedEtat,
      selectedCategory,
      selectedCity
    );
    setFilteredItems(newFilteredItems);
  }, [
    selectedBrands,
    dataPhones,
    selectedEtat,
    selectedCategory,
    selectedCity,
  ]);

  return (
    <>
      <div className="listPage__container">
        <div className="listPage__container__title">
          <h1>Liste des smartphones</h1>
        </div>
        <div className="listPage__container__image">
          <img src={imageStickerList} alt="image de la liste des smartphones" />
        </div>
        <FileCSV />
        <div className="listPage__search">
          <h2 className="listPage__title__search">Rechercher par id Emmaus</h2>{" "}
          <input
            type="text"
            placeholder="Entrer un id"
            className="listPage__input"
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
          selectedEtat={selectedEtat}
          setSelectedEtat={setSelectedEtat}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />

        <div className="faq">
          <div className="faq_title">
            <h2>
              <span>Besoin d'aide ?</span> <br /> N'hésitez pas à cliquer sur la
              flèche pour en savoir plus !
            </h2>
            {faqDisplay ? (
              <BiDownArrow
                className="faq_arrow"
                onClick={() => setFaqDisplay(!faqDisplay)}
              />
            ) : (
              <BiLeftArrow
                className="faq_arrow"
                onClick={() => setFaqDisplay(!faqDisplay)}
              />
            )}
          </div>
          {faqDisplay && (
            <div className="faq_infos">
              <div className="video_faq">
                <PlayerVideoList />
              </div>
              <p>
                Si vous êtes coincés, vous pouvez nous appeler au{" "}
                <span>01 27 54 98 36</span> ou nous contacter à{" "}
                <span>emmaus-contact@contact.org</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ListPage;
