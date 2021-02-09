import Head from '../assets/img/bapmarty-head.png';
import Devices from '../assets/img/devices.svg';

import "../assets/scss/components/informations.scss";

const Informations = () => {
  return (
    <>
      <section className="pres-section">
        <div className="logo">
          <img src={Head} alt="bapmarty instagram logo" />
        </div>
        <div className="presentation">
          <p className="text">
            Salut, moi c'est Baptiste AKA Bapmarty. J'ai 20 ans et je suis étudiant en informatique à 42 et encadrant d'escalade. 
            À travers ce site internet je souhaite te faire decouvrir un peu monde et comment je passe mon temps. 
            Tu trouveras plus bas un peu plus d'informations sur moi en escalade et en informatique mais aussi en gaming <span className="italic">(Et oui de temps en temps je joue...)</span>.
            <br /><br />Bienvenue sur ma chaîne !
          </p>
        </div>
      </section>

      <section className="setup-section">
        <div className="setup-title">
          <h1><span className="surligned">Mon setup</span></h1>
        </div>
        <div className="setup-content">
          <div className="devices-img">
            <img src={Devices} alt="devices" />
          </div>
          <div className="config-live">
            <h3>PC live</h3>
            <ul>
              <li>NZXT H510i</li>
              <li>MSI B450-A PRO MAX</li>
              <li>Processeur AMD RYZEN7 3800x</li>
              <li>MSI GeForce RTX 2060 SUPER GAMING X</li>
              <li>DDR4 HyperX Fury RGB - 16 Go 3200 MHz</li>
              <li>NZXT Kraken X62 280 mm</li>
              <li>Samsung 970 EVO Plus NVMe M.2 (500 Go)</li>
              <li>Seagate Barracuda 2To</li>
              <li>Seagate Barracuda 1To</li>
              <li>Corsair RM650x (v2), 650W</li>
              <li>Ecran 1</li>
              <li>Ecran 2</li>
              <li>Clavier</li>
              <li>Corsair M65 Elite</li>
              <li>Corsair Casque</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Informations;