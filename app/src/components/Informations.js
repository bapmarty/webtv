import Head from '../assets/img/bapmarty-head.png';

import "../assets/scss/components/informations.scss";

const Informations = () => {
  return (
    <>
      <section className="info-pre">
        <div className="logo">
          <img src={Head} alt="bapmarty instagram logo" />
        </div>
        <div className="presentation">
          <p className="text">
            Salut, moi c'est Baptiste AKA <span className="surligned">Bapmarty</span>. J'ai 20 ans et je suis étudiant en informatique à 42 et encadrant d'escalade. 
            À travers ce site internet je souhaite te faire decouvrir un peu monde et comment je passe mon temps. 
            Tu trouveras plus bas un peu plus d'informations sur moi en escalade et en informatique mais aussi en gaming <span className="italic">(Et oui de temps en temps je joue...)</span>.
            <br /><br />Bienvenue sur ma chaîne !
          </p>
        </div>
      </section>
    </>
  )
}

export default Informations;