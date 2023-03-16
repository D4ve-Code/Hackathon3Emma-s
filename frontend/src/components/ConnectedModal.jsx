const ConnectModal = ({ closeModal, setIsConnected }) => {
  const handleConnexion = (e) => {
    e.preventDefault();
    setIsConnected(true);
    closeModal(false);
  };
  return (
    <div className="connectModalBackground">
      <div className="connectModalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Se Connecter</h1>
        </div>
        <div className="body">
          <form className="connexionForm">
            <div className="emailContainer">
              <label>
                <span className="enterEmail">Entrez votre identifiant :</span>
                <input type="email" />
              </label>
            </div>
            <div className="passwordContainer">
              <label>
                <span className="enterPassword">
                  Entrez votre mot de passe :
                </span>
                <input type="password" />
              </label>
            </div>
            <button className="connexion" onClick={handleConnexion}>
              Connexion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
