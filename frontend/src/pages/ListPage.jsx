import { FiSearch } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import imageStickerList from "../assets/images/materiel-partenaires.jpg";
import FilterListPage from "@components/FilterListPage";

const ListPage = ({ dataPhones }) => {
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [filteredItems, setFilteredItems] = useState(dataPhones);
  const [searchId, setSearchId] = useState("");
  const [filteredCount, setFilteredCount] = useState(dataPhones.length);
  const [modification, setModification] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(filteredItems);

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

  const handleModification = () => {
    setModification((modification) => !modification);
  };

  const constructeurInputRef = useRef();
  const modeleInputRef = useRef();
  const statutInputRef = useRef();
  const ram_nbInputRef = useRef();
  const stockage_nbInputRef = useRef();
  const antutuInputRef = useRef();
  const ponderation_tauxInputRef = useRef();
  const localisationInputRef = useRef();

  const handleUpdate = (id) => {
    const constructeur = constructeurInputRef.current.value;
    const modele = modeleInputRef.current.value;
    const statut = statutInputRef.current.value;
    const ram_nb = ram_nbInputRef.current.value;
    const stockage_nb = stockage_nbInputRef.current.value;
    const antutu = antutuInputRef.current.value;
    const ponderation_taux = ponderation_tauxInputRef.current.value;
    const localisation = localisationInputRef.current.value;

    setDataUpdate({
      ...filteredItems,
      constructeur: constructeur,
      modele: modele,
      statut: statut,
      ram_nb: ram_nb,
      stockage_nb: stockage_nb,
      antutu: antutu,
      ponderation_taux: ponderation_taux,
      localisation: localisation,
    });
  };

  useEffect(() => {
    setDataUpdate(filteredItems);
  }, [filteredItems]);

  useEffect(() => {
    setFilteredCount(filteredItems.length);
  }, [filteredItems]);

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
        <div className="listPage__count">
          <p className="count__text">
            <span className="color__count">{filteredCount}</span> smartphone(s)
            trouvé(s)
          </p>
        </div>
        <div className="listPage__container__list">
          {console.log("dataUpdate: ", dataUpdate)}
          {filteredItems.map((phone) => (
            <div className="listPage__container__table" key={phone.id}>
              {console.log("filteredItems", filteredItems)}
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
                    {!modification && <td>{phone.id_emmaus_connect}</td>}
                    {modification && (
                      <td>
                        <input
                          type="number"
                          value={phone.id_emmaus_connect}
                          className="tr__container"
                          onChange={(e) => handleUpdate(phone.id)}
                        />
                      </td>
                    )}
                    {!modification && <td>{phone.constructeur}</td>}
                    {modification && (
                      <td>
                        <input
                          type="text"
                          value={phone.constructeur}
                          className="tr__container"
                          onChange={handleUpdate}
                          ref={constructeurInputRef}
                        />
                      </td>
                    )}
                    {!modification && <td>{phone.modele}</td>}
                    {modification && (
                      <td>
                        <input
                          type="text"
                          value={phone.modele}
                          className="tr__container"
                          onChange={handleUpdate}
                          ref={modeleInputRef}
                        />
                      </td>
                    )}
                    {!modification && <td>{phone.statut}</td>}
                    {modification && (
                      <td>
                        <input
                          type="text"
                          value={phone.statut}
                          className="tr__container"
                          onChange={handleUpdate}
                          ref={statutInputRef}
                        />
                      </td>
                    )}
                    {!modification && <td>{phone.ram_nb}</td>}
                    {modification && (
                      <td>
                        <input
                          type="number"
                          value={phone.ram_nb}
                          className="tr__container"
                          onChange={handleUpdate}
                          ref={ram_nbInputRef}
                        />
                      </td>
                    )}
                    {!modification && <td>{phone.stockage_nb}</td>}
                    {modification && (
                      <td>
                        <input
                          type="number"
                          value={phone.stockage_nb}
                          className="tr__container"
                          onChange={handleUpdate}
                          ref={stockage_nbInputRef}
                        />
                      </td>
                    )}
                    {!modification && <td>{phone.antutu}</td>}
                    {modification && (
                      <td>
                        <input
                          type="text"
                          value={phone.antutu}
                          className="tr__container"
                          onChange={handleUpdate}
                          ref={antutuInputRef}
                        />
                      </td>
                    )}
                    {!modification && <td>{phone.ponderation_taux}</td>}
                    {modification && (
                      <td>
                        <input
                          type="text"
                          value={phone.ponderation_taux}
                          className="tr__container"
                          onChange={handleUpdate}
                          ref={ponderation_tauxInputRef}
                        />
                      </td>
                    )}
                    {!modification && <td>{phone.ville}</td>}
                    {modification && (
                      <td>
                        <input
                          type="text"
                          value={phone.ville}
                          className="tr__container"
                          onChange={handleUpdate}
                          ref={localisationInputRef}
                        />
                      </td>
                    )}
                    {!modification && <td>{phone.categorie_name}</td>}
                    {modification && (
                      <td>
                        <input
                          type="text"
                          value={phone.categorie_name}
                          className="tr__container"
                          onChange={handleUpdate}
                          ref={categorieInputRef}
                        />
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
              <Link to={"/modify/" + dataPhones.id}>
                <button
                  className="btn__modif"
                  // onClick={handleModification}
                >
                  "modifier"
                  {/* {!modification ? "modifier" : "valider"} */}
                </button>
              </Link>
              {/* <button className="btn__modif" onClick={handleModification}>
                {!modification ? "modifier" : "valider"}
              </button> */}
            </div>
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
