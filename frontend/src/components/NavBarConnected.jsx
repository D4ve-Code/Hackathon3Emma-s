import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiOutlineUnlock } from "react-icons/ai";
import { useState } from "react";
import LogoutModal from "./LogoutModal";
import EmmausLogo from "../assets/images/emmaus_connect.png";

const NavBar = ({ setIsConnected }) => {
  const [logoutModals, setLogoutModals] = useState(false);

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
              className="nav__button__logout"
              onClick={() => {
                setLogoutModals(true);
              }}
            >
              espace bénévole n°15121{" "}
              <span className="lock">
                <AiOutlineUnlock />
              </span>
            </button>
            {logoutModals && (
              <LogoutModal
                closeModal={setLogoutModals}
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
