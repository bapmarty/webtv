import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

import "../assets/scss/layouts/navbar.scss";
const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-header">
          <div className="navbar-header-title">
            <h1><NavLink to="/live"><span>B</span>apmarty</NavLink></h1>
          </div>
          <div className="navbar-header-bars">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="navbar-nav">
          <ul className="navbar-nav-list">
            <li className="navbar-nav-item"><NavLink to='/live' activeClassName="active">Direct <FontAwesomeIcon icon={faCircle} /></NavLink></li>
            <li className="navbar-nav-item"><NavLink to='/prog' activeClassName="active">Programmation</NavLink></li>
            <li className="navbar-nav-item"><NavLink to='/info' activeClassName="active">Informations</NavLink></li>
            <li className="navbar-nav-item"><NavLink to='/rediff' activeClassName="active">Rediffusions</NavLink></li>
          </ul>
          <ul  className="navbar-social-list">
            <li className="navbar-social-item"><a href="https://discord.bapmarty.fr"><FontAwesomeIcon icon={faDiscord} /></a></li>
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