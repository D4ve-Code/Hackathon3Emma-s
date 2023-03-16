import React, { useState } from "react";
// import axios from "axios";
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
                placeholder="Noter le donateur du téléphone - Ex: Nom Prénom"
              ></input>
            </label>
            <button className="button_next">next slider</button>
          </form>
          <form className="form_slider_two">
            <label className="input">
              <input
                type="text"
                className="constructeur"
                placeholder="Selectionner le constructeur - Ex: Samsung"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="modele"
                placeholder="Modèle du téléphone - Ex: Galaxy S9"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="couleur"
                placeholder="Couleur du téléphone"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="etat"
                placeholder="Etat du téléphone"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="chargeur"
                placeholder="Présence ou non d'un chargeur"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="operateur"
                placeholder="Opérateur du téléphone - Ex: SFR"
              ></input>
            </label>
            <button className="button_next">next slider</button>
          </form>
          <form className="form_slider_three">
            <label className="input">
              <input
                type="text"
                className="batterie"
                placeholder="Préciser l'état de la batterie - Ex: 30%"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="processeur"
                placeholder="Type de processeur - Ex: Samsung Exynos 9810"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="exploitation"
                placeholder="Système d'exploitation - Ex: Android 8"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="taille"
                placeholder="Taille de l'écran - Ex: 5.8"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="resolution"
                placeholder="Resolution de l'écran - Ex: 568 ppp"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="ram"
                placeholder="RAM du téléphone"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="stockage"
                placeholder="Stockage du téléphone"
              ></input>
            </label>
            <button className="button_next">next slider</button>
          </form>
          <form className="form_slider_four">
            <label className="input">
              <input
                type="text"
                className="antutu"
                placeholder="Score Antutu"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="ponderation"
                placeholder="Sélectionner la pondération"
              ></input>
            </label>
            <label className="input">
              <input
                type="text"
                className="commentaire"
                placeholder="Commentaire sur le choix de pondération"
              ></input>
            </label>
            <button className="button_post">route POST</button>
          </form>
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

// return (

// ----------------------------- ESSAI NPM REACT SLICK ----------------------------
// ---------------------------------------------------------------------------

// import React, { useState } from "react";
// import Slider from "react-slick";
// // import axios from "axios";
// import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
// import PlayerVideoForm from "../components/PlayerVideoForm";

// import imageStickerAdd from "../assets/images/img_4436-paris-point-daccueil-et-benevoles-mb-francois-silvestre-de-sacy.jpg";

// const FormPage = () => {
//   const [faqDisplayForm, setFaqDisplayForm] = useState(false);

//   const [formValues, setFormValues] = useState({
//     question1: "",
//     question2: "",
//     question3: "",
//   });

//   //   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleFormSubmit = (event) => {
//     console.warn("axios");
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       [name]: value,
//     }));
//   };

//   //   const handleSlideChange = (index) => {
//   //     setCurrentSlide(index);
//   //   };

//   const sliderSettings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // beforeChange: handleSlideChange,
//   };

//   return (
//     <div className="form_page">
//       <h1>Ajout d'un téléphone par formulaire</h1>
//       <div className="form_text">
//         <img src={imageStickerAdd} alt="image d'un téléphone" />
//         <p>
//           Merci de remplir chacune des lignes du formulaires. Vous serez guidés
//           pas à pas.
//           <br />
//           Si vous avez des questions, n'hésitez pas à consulter la FAQ
//         </p>
//       </div>
//       <div className="form">
//         <div className="form_progressbar"> barre de progression</div>
//         <div className="form_slider">
//           <form className="form_slider_one" onSubmit={handleFormSubmit}>
//             <Slider {...sliderSettings}>
//               <div>
//                 <label className="input" htmlFor="question1">
//                   <input
//                     id="question1"
//                     name="question1"
//                     type="text"
//                     value={formValues.question1}
//                     onChange={handleInputChange}
//                     placeholder="Identifiant Emmaüs_Connect - Ex: 15AZ781CL6"
//                   ></input>
//                 </label>
//                 <label className="input" htmlFor="question2">
//                   <input
//                     id="question2"
//                     name="question2"
//                     type="number"
//                     value={formValues.question2}
//                     onChange={handleInputChange}
//                     placeholder="Numéro IMEI du téléphone - Ex: 165131874321"
//                   ></input>
//                 </label>
//                 <label className="input">
//                   <input
//                     id="question3"
//                     name="question3"
//                     type="text"
//                     value={formValues.question3}
//                     onChange={handleInputChange}
//                     placeholder="Selectionner la ville de rattachement"
//                   ></input>
//                 </label>
//                 <button className="button_next">next slider</button>
//               </div>
//             </Slider>
//             {/* {currentSlide === 3 && <button type="submit">POST</button>} */}
//           </form>
//         </div>
//       </div>
//       <div className="faq">
//         <div className="faq_title">
//           <h2>
//             <span>Besoin d'aide ?</span> Vous pouvez cliquer sur la flèche pour
//             voir une vidéo explicative !
//           </h2>
//           {faqDisplayForm ? (
//             <BiDownArrow
//               className="faq_arrow"
//               onClick={() => setFaqDisplayForm(!faqDisplayForm)}
//             />
//           ) : (
//             <BiLeftArrow
//               className="faq_arrow"
//               onClick={() => setFaqDisplayForm(!faqDisplayForm)}
//             />
//           )}
//         </div>
//         {faqDisplayForm && (
//           <div className="faq_infos">
//             <div className="video_faq">
//               <PlayerVideoForm />
//             </div>
//             <p>
//               Si vous êtes coincés, vous pouvez nous appeler au{" "}
//               <span>01 27 54 98 36</span> ou nous contacter à{" "}
//               <span>emmaus-contact@contact.org</span>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
