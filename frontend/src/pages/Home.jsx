import React, { useState } from "react";
import { Link } from "react-router-dom";

import PlayerVideo from "../components/PlayerVideo";

import imageStickerAdd from "../assets/images/img_4436-paris-point-daccueil-et-benevoles-mb-francois-silvestre-de-sacy.jpg";
import imageStickerList from "../assets/images/materiel-partenaires.jpg";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
import banniere from "../assets/images/imgbanniere.jpg";

// import { element } from "prop-types";

const Home = ({ isConnected }) => {
  // const handleClickBot = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  const [faqDisplay, setFaqDisplay] = useState(false);

  return (
    <div className="home_page">
      {isConnected ? (
        <>
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
              <button className="sticker_add_button">
                Ajouter un téléphone
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="page_text_logout">
          <h2 className="page_title_logout">
            Bienvenue sur la page de gestion des smartphones reconditionnés
          </h2>
          <div className="page_description__logout">
            <img className="banniere" src={banniere} alt="image" />
            <span className="span_description__logout">
              Vous devez être connecté pour accéder à cette page !
            </span>
          </div>
        </div>
      )}
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
              <PlayerVideo />
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
  );
};

export default Home;
