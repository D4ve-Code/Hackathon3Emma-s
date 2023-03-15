import EmmausLogo from "../assets/images/emmaus_connect.png";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav__logo">
        <img src={EmmausLogo} alt="Emmaus Logo" />
      </div>
    </div>
  );
};

export default NavBar;
