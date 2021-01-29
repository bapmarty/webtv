import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faInstagram, faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

import "../assets/scss/layouts/navbar.scss";
import { useState } from "react";
const Navbar = () => {

  const [icon, setIcon] = useState(faBars);
  const [navbarOpen, setNavbarOpen] = useState("navbar-nav");
  const [user, setUser] = useState([]);

  const handleClick = () => {
    if (icon === faBars) {
      setIcon(faTimes);
      setNavbarOpen("navbar-nav open");
    } else {
      setIcon(faBars);
      setNavbarOpen("navbar-nav");
    }
  }

  const handleClickConnectTwitch = () => {
    window.open(`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_API_HOST}/auth/callback&response_type=code&scope=user%3Aread%3Aemail`);
  }

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-header">
          <div className="navbar-header-title">
            <h1><NavLink exact to="/"><span>B</span>apmarty</NavLink></h1>
          </div>
          <div className="navbar-header-bars" onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
        <div className={navbarOpen}>
          <ul className="navbar-nav-list">
            <li className="navbar-nav-item"><NavLink exact to='/' activeClassName="active">Direct <FontAwesomeIcon icon={faCircle} /></NavLink></li>
            <li className="navbar-nav-item"><NavLink exact to='/prog' activeClassName="active">Programmation</NavLink></li>
            <li className="navbar-nav-item"><NavLink exact to='/info' activeClassName="active">Informations</NavLink></li>
            <li className="navbar-nav-item"><NavLink exact to='/rediff' activeClassName="active">Rediffusions</NavLink></li>
          </ul>
          <ul className="auth-mobile-btn">
            <li onClick={handleClickConnectTwitch}>Se connecter <FontAwesomeIcon icon={faTwitch} /></li>
          </ul>
          <ul  className="navbar-social-list">
            <li className="navbar-social-item"><a href="https://discord.bapmarty.fr"><FontAwesomeIcon icon={faDiscord} /></a></li>
            <li className="navbar-social-item"><a href="https://twitch.tv/mrtwizard"><FontAwesomeIcon icon={faTwitch} /></a></li>
            <li className="navbar-social-item"><a href="https://instagram.com/baptistemrrt"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li className="navbar-social-item"><a href="https://youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a></li>
            <li className="navbar-social-item"><a href="https://github.com/baptistemrt"><FontAwesomeIcon icon={faGithub} /></a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;