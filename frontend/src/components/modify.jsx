import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Modify = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log("props", props);
  const { id } = useParams();

  const handelSub = () => {
    console.log("pouuuuurrzerazeaze");
    axios
      .put(`http://localhost:5000/phonesmodi/${id}`, data)
      .then(
        (res) =>
          props.setPouletRefresh(!props.pouletRefresh) || navigate("/listpage")
      );
  };

  const handelChange = (value, name) => {
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/phones/${id}`)
      .then((res) => console.log(res.data) || setData(res.data));
  }, []);
  return (
    <div className="listPage__container__table">
      <h2>Modifier un téléphone</h2>
      {console.log(data)}
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
            <td>
              <input
                type="text"
                value={data.id_emmaus_connect}
                name="id_emmaus_connect"
                onChange={(e) => handelChange(e.target.value, e.target.name)}
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                value={data.constructeur}
                name="constructeur"
                onChange={(e) => handelChange(e.target.value, e.target.name)}
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                value={data.modele}
                name="modele"
                onChange={(e) => handelChange(e.target.value, e.target.name)}
              />
            </td>
            <td>
              <input
                type="text"
                value={data.statut}
                name="statut"
                onChange={(e) => handelChange(e.target.value, e.target.name)}
              />
            </td>
            <td>
              <input
                type="text"
                value={data.ram_nb}
                name="ram_nb"
                onChange={(e) => handelChange(e.target.value, e.target.name)}
              />
            </td>
            <td>
              <input
                type="text"
                value={data.stockage_nb}
                name="stockage_nb"
                onChange={(e) => handelChange(e.target.value, e.target.name)}
              />
            </td>
            <td>
              <input
                type="text"
                value={data.antutu}
                name="antutu"
                onChange={(e) => handelChange(e.target.value, e.target.name)}
              />
            </td>
            <td>
              <input
                type="text"
                value={data.ponderation_taux}
                name="ponderation_taux"
                onChange={(e) => handelChange(e.target.value, e.target.name)}
              />
            </td>
            <td>
              <input
                type="text"
                value={data.ville}
                name="ville"
                onChange={(e) => handelChange(e.target.value, e.target.name)}
              />
            </td>
            <td>
              <input
                type="text"
                value={data.categorie_name}
                name="categorie_name"
                onChange={(e) => handelChange(e.target.value, e.target.name)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn__modif" onClick={handelSub}>
        {" "}
        "modifier"
      </button>
    </div>
  );
};

export default Modify;
