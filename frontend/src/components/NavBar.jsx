import EmmausLogo from "../assets/images/emmaus_connect.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FcKey } from "react-icons/fc";
import { useState } from "react";
import ConnectedModal from "./ConnectedModal";

const NavBar = ({ setIsConnected }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="nav__container">
        <div className="nav__contact__container">
          <div className="nav__contact">
            <ul>
              <li>
                <BsFillTelephoneFill className="phone__icon" /> 01 80 05 98 80
              </li>
              <li>
                <GrMail className="mail__icon" /> standard@emmaus-connect.org
              </li>
            </ul>
          </div>
          <div className="btn__container">
            <button
              className="nav__button__login"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Connexion espace bénévole <FcKey />
            </button>
            {openModal && (
              <ConnectedModal
                closeModal={setOpenModal}
                setIsConnected={setIsConnected}
              />
            )}
          </div>
        </div>
      </div>
      <div className="nav__logo">
        <img src={EmmausLogo} alt="Emmaus_Logo" />
      </div>
    </div>
  );
};

export default NavBar;
