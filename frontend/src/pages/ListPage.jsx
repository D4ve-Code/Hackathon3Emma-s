import imageStickerList from "../assets/images/materiel-partenaires.jpg";
import { FiSearch } from "react-icons/fi";
import FilterListPage from "@components/FilterListPage";

const ListPage = () => {
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
            type="text"
            placeholder="Entrer un id"
            className="listPage__input"
          />
          <FiSearch className="btn_seacrh" />
        </div>
        <div className="listPage__container__list">
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
                <td>152202</td>
                <td>Apple</td>
                <td>Iphone 12</td>
                <td>DEEE</td>
                <td>2 Go</td>
                <td>32 Go</td>
                <td>120000</td>
                <td>- 10%</td>
                <td>Reims</td>
                <td>2 - C</td>
              </tr>
            </tbody>
          </table>
          <button className="btn__modif">modifier</button>
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
                <td>121521</td>
                <td>Huawai</td>
                <td>P30 pro</td>
                <td>REPARABLE</td>
                <td>1 Go</td>
                <td>16 Go</td>
                <td>140000</td>
                <td> 10%</td>
                <td>Paris</td>
                <td>3 - B</td>
              </tr>
            </tbody>
          </table>
          <button className="btn__modif">modifier</button>
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
                <td>121521</td>
                <td>Huawai</td>
                <td>P30 pro</td>
                <td>REPARABLE</td>
                <td>1 Go</td>
                <td>16 Go</td>
                <td>140000</td>
                <td> 10%</td>
                <td>Paris</td>
                <td>3 - B</td>
              </tr>
            </tbody>
          </table>
          <button className="btn__modif">modifier</button>
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
                <td>121521</td>
                <td>Huawai</td>
                <td>P30 pro</td>
                <td>REPARABLE</td>
                <td>1 Go</td>
                <td>16 Go</td>
                <td>140000</td>
                <td> 10%</td>
                <td>Paris</td>
                <td>3 - B</td>
              </tr>
            </tbody>
          </table>
          <button className="btn__modif">modifier</button>
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
                <td>121521</td>
                <td>Huawai</td>
                <td>P30 pro</td>
                <td>REPARABLE</td>
                <td>1 Go</td>
                <td>16 Go</td>
                <td>140000</td>
                <td> 10%</td>
                <td>Paris</td>
                <td>3 - B</td>
              </tr>
            </tbody>
          </table>
          <button className="btn__modif">modifier</button>
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
                <td>121521</td>
                <td>Huawai</td>
                <td>P30 pro</td>
                <td>REPARABLE</td>
                <td>1 Go</td>
                <td>16 Go</td>
                <td>140000</td>
                <td> 10%</td>
                <td>Paris</td>
                <td>3 - B</td>
              </tr>
            </tbody>
          </table>
          <button className="btn__modif">modifier</button>
        </div>
        <FilterListPage className="filter__list__page" />
      </div>
    </>
  );
};

export default ListPage;
