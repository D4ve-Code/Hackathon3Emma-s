import React, { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
import PlayerVideoForm from "../components/PlayerVideoForm";

import imageStickerAdd from "../assets/images/img_4436-paris-point-daccueil-et-benevoles-mb-francois-silvestre-de-sacy.jpg";

const FormPage = () => {
  const [faqDisplayForm, setFaqDisplayForm] = useState(false);

  return (
    <div className="form_page">
      <h1>Ajout d'un téléphone par formulaire</h1>
      <div className="form_text">
        <img src={imageStickerAdd} alt="image d'un téléphone" />
        <p>
          Merci de remplir chacune des lignes du formulaires. Vous serez guidés
          pas à pas.
          <br />
          Si vous avez des questions, n'hésitez pas à consulter la FAQ
        </p>
      </div>
      <div className="form">
        <div className="form_progressbar"> barre de progression</div>
        <div className="form_slider">
          <form className="form_slider_one">
            <label className="input">
              <input
                type="text"
                className="identifiant"
                placeholder="Identifiant Emmaüs_Connect - Ex: 15AZ781CL6"
              ></input>
            </label>
            <label className="input">
              <input
                type="number"
                className="imei"
                placeholder="Numéro IMEI du téléphone - Ex: 165131874321"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="ville"
                placeholder="Selectionner la ville de rattachement"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="donateur"
                placeholder="Noter le donateur du téléphone"
              ></input>
            </label>
            <button className="button_next">next slider</button>
          </form>
          {/* <form className="form_slider_two">
            <label className="input">
              <input
                type="text"
                className="constructeur"
                placeholder="Inscrire l'identifiant Emmaüs_Connect"
              ></input>
            </label>
            <label className="input">
              <input
                type="number"
                className="modele"
                placeholder="Quel est le numéro IMEI du téléphone ?"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="modele"
                placeholder="Selectionner la ville de rattachement"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="modele"
                placeholder="Noter le donateur du téléphone"
              ></input>
            </label>
            <button className="button_next">next slider</button>
          </form> */}
        </div>
      </div>
      <div className="faq">
        <div className="faq_title">
          <h2>
            <span>Besoin d'aide ?</span> Vous pouvez cliquer sur la flèche pour
            voir une vidéo explicative !
          </h2>
          {faqDisplayForm ? (
            <BiDownArrow
              className="faq_arrow"
              onClick={() => setFaqDisplayForm(!faqDisplayForm)}
            />
          ) : (
            <BiLeftArrow
              className="faq_arrow"
              onClick={() => setFaqDisplayForm(!faqDisplayForm)}
            />
          )}
        </div>
        {faqDisplayForm && (
          <div className="faq_infos">
            <div className="video_faq">
              <PlayerVideoForm />
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

export default FormPage;
