const LogoutModal = ({ closeModal, setIsConnected }) => {
  const handleLogout = () => {
    setIsConnected(false);
  };

  return (
    <div className="logoutModalBackground">
      <div className="logoutModalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Voulez-vous vraiment vous déconnecter ?</h1>
        </div>
        <div className="btn__logout__container">
          <button className="stay__connected" onClick={() => closeModal(false)}>
            Rester connecté
          </button>
          <button className="logout" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
