import React from "react";
import { Link } from "react-router-dom";

import imageStickerAdd from "../assets/images/img_4436-paris-point-daccueil-et-benevoles-mb-francois-silvestre-de-sacy.jpg";
import imageStickerList from "../assets/images/materiel-partenaires.jpg";

const Home = () => {
  return (
    <div className="home_page">
      <div className="page_text">
        <h2 className="page_title">
          Bienvenue sur la page de gestion des smartphones reconditionnés
        </h2>
        <div className="page_description">
          <span className="span_description">Il vous est possible de:</span>
          <ol>
            <li>
              Trouver un téléphone dans notre stock via la 1ere vignette
              <span> "Liste des téléphones disponibles"</span>{" "}
            </li>
            <li>
              Ajouter un téléphone à notre parc national via la 2e vignette
              <span> "Ajouter un téléphone"</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="page_stickers">
        <Link className="sticker_list" to="/listpage">
          <img
            className="sticker_list_image"
            src={imageStickerList}
            alt="image de téléphones"
          />
          <button className="sticker_list_button">
            Voir les téléphones disponibles
          </button>
        </Link>
        <Link className="sticker_add" to="/addpage">
          <img
            className="sticker_add_image"
            src={imageStickerAdd}
            alt="image d'un téléphone"
          />
          <button className="sticker_add_button">Ajouter un téléphone</button>
        </Link>
      </div>
      <div className="faq">FAQ</div>
    </div>
  );
};

export default Home;
