import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <div>
            <h1><span>B</span>apmarty</h1>
          </div>
          <div>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div>
          <ul>
            <li><NavLink to='/'>Direct <FontAwesomeIcon icon={faCircle} /></NavLink></li>
            <li><NavLink to='/prog'>Programmation</NavLink></li>
            <li><NavLink to='/info'>Informations</NavLink></li>
            <li><NavLink to='/rediff'>Rediffusions</NavLink></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="https://discord.bapmarty.fr"><FontAwesomeIcon icon={faDiscord} /></a></li>
            <li><a href="https://instagram.com/baptistemrrt"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a></li>
            <li><a href="https://github.com/baptistemrt"><FontAwesomeIcon icon={faGithub} /></a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;