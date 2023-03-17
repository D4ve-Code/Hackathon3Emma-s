import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
import PlayerVideoForm from "../components/PlayerVideoForm";

const FormPage = () => {
  const [formData, setFormData] = useState({
    constructeur: "",
    modele: "",
    commentaire: "",
    donateur: "",
    id_emmaus_connect: "",
    info_batterie: "",
    numero_imei: "",
    processeur: "",
    sys_exploitation: "",
    taille_ecran: "",
    resolution: "",
    chargeur: "",
    operateur: "",
    couleur: "",
    localisation_id: "",
    RAM_id: "",
    Stockage_id: "",
    Antutu_id: "",
    ponderation_id: "",
    etat_id: "",
  });
  const [antutuList, setAntutuList] = useState([]);
  const [ponderationList, setPonderationList] = useState([]);
  const [stockageList, setStockageList] = useState([]);
  const [ramList, setRamList] = useState([]);
  const [villeList, setVilleList] = useState([]);
  const [etatList, setEtatList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [faqDisplay, setFaqDisplay] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/localisation");
        setVilleList(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/etat");
        setEtatList(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/antutu");
        setAntutuList(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/ram");
        setRamList(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/ponderation");
        setPonderationList(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/stockage");
        setStockageList(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }

    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/phones", formData);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
    }
    setLoading(false);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <h1 className="fromPage-h1">Ajout d'un téléphone par formulaire</h1>
            {/* <img src={imageStickerAdd} alt="image d'un téléphone" /> */}
            <p className="formPage-para">
              Merci de remplir chacune des lignes du formulaires. Vous serez
              guidés pas à pas.
              <br />
              Si vous avez des questions, n'hésitez pas à consulter la FAQ
            </p>
            <label htmlFor="identifiant">Identifiant:</label>
            <input
              type="text"
              name="id_emmaus_connect"
              id="identifiant"
              placeholder="Identifiant Emmaüs_Connect - Ex: 15AZ781CL6"
              value={formData.id_emmaus_connect}
              onChange={handleChange}
            />
            <label htmlFor="imei">Numéro IME:</label>
            <input
              type="number"
              name="numero_imei"
              id="imei"
              placeholder="Numéro IMEI du téléphone - Ex: 165131874321"
              value={formData.numero_imei}
              onChange={handleChange}
            />

            <label htmlFor="localisation_id">
              <select
                name="localisation_id"
                value={formData.localisation_id}
                onChange={handleChange}
                required
              >
                <option value="">--Sélectionnez la ville--</option>

                {villeList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.ville}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="donateur">Donateur:</label>
            <input
              type="text"
              name="donateur"
              id="donateur"
              placeholder="Noter le donateur du téléphone - Ex: Nom Prénom"
              value={formData.donateur}
              onChange={handleChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <label htmlFor="constructeur">Constructeur:</label>
            <input
              type="text"
              name="constructeur"
              id="constructeur"
              placeholder="Selectionner le constructeur - Ex: Samsung"
              value={formData.constructeur}
              onChange={handleChange}
            />
            <label htmlFor="modele">Modèle:</label>
            <input
              type="text"
              name="modele"
              id="modele"
              placeholder="Modèle du téléphone - Ex: Galaxy S9"
              value={formData.modele}
              onChange={handleChange}
            />
            <label htmlFor="couleur">Couleur:</label>
            <input
              type="text"
              name="couleur"
              id="couleur"
              placeholder="Couleur du téléphone"
              value={formData.couleur}
              onChange={handleChange}
            />

            <label htmlFor="etat_id">
              <select
                name="etat_id"
                value={formData.etat_id}
                onChange={handleChange}
                required
              >
                <option value="">--Sélectionnez l'état--</option>
                {etatList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.statut}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="chargeur">Chargeur:</label>
            <input
              type="text"
              name="chargeur"
              id="chargeur"
              value={formData.chargeur}
              placeholder="Présence ou non d'un chargeur"
              onChange={handleChange}
            />
            <label htmlFor="operateur">Opérateur:</label>
            <input
              type="text"
              name="operateur"
              id="operateur"
              value={formData.operateur}
              placeholder="Opérateur du téléphone - Ex: SFR"
              onChange={handleChange}
            />
          </>
        );
      case 3:
        return (
          <>
            <label htmlFor="batterie">Batterie:</label>
            <input
              type="text"
              name="info_batterie"
              id="batterie"
              value={formData.info_batterie}
              placeholder="Préciser l'état de la batterie - Ex: 30%"
              onChange={handleChange}
            />
            <label htmlFor="processeur">Processeur:</label>
            <input
              type="text"
              name="processeur"
              id="processeur"
              value={formData.processeur}
              placeholder="Type de processeur - Ex: Samsung Exynos 9810"
              onChange={handleChange}
            />
            <label htmlFor="exploitation">Exploitation:</label>
            <input
              type="text"
              name="sys_exploitation"
              id="exploitation"
              value={formData.sys_exploitation}
              placeholder="Système d'exploitation - Ex: Android 8"
              onChange={handleChange}
            />
            <label htmlFor="taille">Taille:</label>
            <input
              type="text"
              name="taille_ecran"
              id="taille"
              value={formData.taille_ecran}
              placeholder="Taille de l'écran - Ex: 5.8"
              onChange={handleChange}
            />
            <label htmlFor="resolution">Resolution:</label>
            <input
              type="text"
              name="resolution"
              id="resolution"
              value={formData.resolution}
              placeholder="Resolution de l'écran - Ex: 568 ppp"
              onChange={handleChange}
            />
            <label htmlFor="RAM_id">
              <select
                name="RAM_id"
                value={formData.RAM_id}
                onChange={handleChange}
                required
              >
                <option value="">--Sélectionnez la RAM--</option>
                {ramList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.ram_nb}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="Stockage_id">
              <select
                name="Stockage_id"
                value={formData.Stockage_id}
                onChange={handleChange}
                required
              >
                <option value="">--Sélectionnez le stockage--</option>
                {stockageList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.stockage_nb}
                  </option>
                ))}
              </select>
            </label>
          </>
        );
      case 4:
        return (
          <>
            <label htmlFor="Antutu_id">
              <select
                name="Antutu_id"
                value={formData.Antutu_id}
                onChange={handleChange}
                required
              >
                <option value="">--Sélectionnez le score Aututu--</option>
                {antutuList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.intervalle}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="ponderation_id">
              <select
                name="ponderation_id"
                value={formData.ponderation_id}
                onChange={handleChange}
                required
              >
                <option value="">
                  --Sélectionnez le taux de pondération--
                </option>
                {ponderationList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.taux}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="ponderation_commentaire">Commentaire:</label>
            <textarea
              className="form-commentaire"
              type="text"
              placeholder="Commentaire sur le choix de pondération"
              value={formData.ponderation_commentaire}
              onChange={handleChange}
            />
          </>
        );
      default:
        return <Navigate to="/" />;
    }
  };

  return (
    <div className="form-container">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {renderPage()}
        <div className="form-btn">
          {currentPage > 1 && (
            <button
              className="form-precedent"
              type="button"
              onClick={handlePrev}
            >
              Précédent
            </button>
          )}
          {currentPage < 4 && (
            <button className="form-suivant" type="submit" onClick={handleNext}>
              Suivant
            </button>
          )}
          {currentPage === 4 && (
            <button
              className="form-soumettre"
              type="submit"
              onClick={handleSubmit}
            >
              {" "}
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
          )}
        </div>
      </motion.form>
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
