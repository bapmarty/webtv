import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle, faSignOutAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faInstagram, faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

import "../assets/scss/layouts/navbar.scss";

const Navbar = () => {

  const [icon, setIcon] = useState(faBars);
  const [navbarOpen, setNavbarOpen] = useState("navbar-nav");
  const [liveUp, setliveUp] = useState("live");
  const [user, setUser] = useState({});

  const OPTIONS = { method: 'GET',
                    headers: {
                      'Accept': '*/*',
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': "*"
                    }
                  }

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
    window.open(`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_API_HOST}/auth/callback&response_type=code&scope=user_read%20user_follows_edit`, '_self');
  }

  const handleClickLogoutTwitch = () => {
    Cookies.remove('twitch_access_token');
    Cookies.remove('twitch_refresh_token');
    setUser({});
  }

  const fetchUserData = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/user/profile/${Cookies.get('twitch_access_token')}`, OPTIONS)
    .then(res => { return res.json() })
    .then(data => {
      setUser(data);
    });
  }

  const fetchLiveData = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/stream/${Cookies.get('twitch_access_token')}`, OPTIONS)
    .then(res => { return res.json() })
    .then(data => {
      (data.stream === null) ? setliveUp('live off') : setliveUp('live on');
    });
  }

  useEffect(() => {
    if (Cookies.get('twitch_access_token')) {
      fetchUserData();
    }
    fetchLiveData();
  }, []);

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-header">
          <div className="navbar-header-title">
            <h1><NavLink exact to="/"><span>B</span>ap<span>m</span>arty</NavLink></h1>
          </div>
          <div className="navbar-header-bars" onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
        <div className={navbarOpen}>
          <ul className="navbar-nav-list">
            <li className="navbar-nav-item"><NavLink exact to='/' activeClassName="active">Direct <FontAwesomeIcon className={liveUp} icon={faCircle} /></NavLink></li>
            <li className="navbar-nav-item"><NavLink exact to='/prog' activeClassName="active">Programmation</NavLink></li>
            <li className="navbar-nav-item"><NavLink exact to='/info' activeClassName="active">Informations</NavLink></li>
            <li className="navbar-nav-item"><NavLink exact to='/rediff' activeClassName="active">Rediffusions</NavLink></li>
          </ul>
          <ul className="auth-mobile-btn">
            {user.name ? (<li><div>{user.display_name}</div><div onClick={handleClickLogoutTwitch}><FontAwesomeIcon icon={faSignOutAlt} /></div></li>) : (<li onClick={handleClickConnectTwitch}>Se connecter <FontAwesomeIcon icon={faTwitch} /></li>)}
          </ul>
          <ul  className="navbar-social-list">
            <li className="navbar-social-item"><a href="https://discord.bapmarty.fr"><FontAwesomeIcon icon={faDiscord} /></a></li>
            <li className="navbar-social-item"><a href="https://twitch.tv/mrtwizard"><FontAwesomeIcon icon={faTwitch} /></a></li>
            <li className="navbar-social-item"><a href="https://instagram.com/baptistemrrt"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li className="navbar-social-item"><a href="https://youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a></li>
            <li className="navbar-social-item"><a href="https://github.com/baptistemrt"><FontAwesomeIcon icon={faGithub} /></a></li>
          </ul>
          <ul className="auth-desktop-btn">
            {user.name ? (
              <li className="auth-desktop-account">
                <div className="logo">
                  <img src={user.logo} alt={user.name} />
                </div>
                <div className="name">
                  <span>{user.display_name}</span>
                </div>
                <div className="logout-btn" onClick={handleClickLogoutTwitch}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
              </li>
              ) : (
              <li className="auth-btn" onClick={handleClickConnectTwitch}>Se connecter <FontAwesomeIcon icon={faTwitch} /></li>
              )}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;