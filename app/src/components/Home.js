import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompress, faExpand, faGamepad, faHeart, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'

import "../assets/scss/components/home.scss";

const Home = () => {

  const [user, setUser] = useState({});
  const [channelInfo, setChannelInfo] = useState({});
  const [openTheater, setOpenTheater] = useState('stream');
  const [host, setHost] = useState(new URL(window.location.href).hostname);

  const OPTIONS = { method: 'GET',
                    headers: {
                      'Accept': '*/*',
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': "*"
                    }
                  }

  const fetchData = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/user/profile/${Cookies.get('twitch_access_token')}`, OPTIONS)
    .then(res => { return res.json() })
    .then(data => {
      setUser(data);
    });
    fetch(`${process.env.REACT_APP_API_HOST}/channel/${Cookies.get('twitch_access_token')}`, OPTIONS)
    .then(res => { return res.json() })
    .then(data => {
      setChannelInfo(data);
    });
  }

  const twitchFollowBtn = () => {
    window.open('https://twitch.tv/bapmarty', '_blank');
  }

  const streamLabsDonation = () => {
    window.open('https://streamlabs.com/bapmarty1', '_blank');
  }

  const openTheaterScreen = () => {
    if (openTheater === 'stream') {
      setOpenTheater('stream theater-on');
    }
    else {
      setOpenTheater('stream');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className={openTheater}>
        <section className="header-live">
          <div className="title">
            <p><span>[<strong>{channelInfo.broadcaster_language ? channelInfo.broadcaster_language.toUpperCase() : 'FR'}</strong>]</span>{channelInfo.status ? channelInfo.status : 'Rien de spécial'}</p>
          </div>
          <div className="game">
            <p>{channelInfo.game ? channelInfo.game : ''}</p>
            <span>
              <FontAwesomeIcon icon={faGamepad} />
            </span>
          </div>
          <div className="close-theater-btn">
            <button className="theater-btn" onClick={openTheaterScreen}>Mode théâtre <FontAwesomeIcon icon={faCompress} /></button>
          </div>
        </section>
        <section className="stream-embed">
          <div className="live-embed">
            <iframe src={`https://player.twitch.tv/?channel=bapmarty&parent=${host}`}
                    title="twitch_player"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    frameBorder="0">
            </iframe>
          </div>
          <div className="chat-embed">
            <iframe frameBorder="0"
                    title="twitch_chat"
                    scrolling="no"
                    id="chat_embed"
                    src={`https://www.twitch.tv/embed/bapmarty/chat?parent=${host}&darkpopout`}
                    height="100%"
                    width="100%">
              </iframe>
          </div>
        </section>
        <section className="btns-section">
          <button className="follow-btn" onClick={twitchFollowBtn}><FontAwesomeIcon icon={faHeart} /> Suivre</button>
          <button className="disable subscribe-btn">S'abonner</button>
          <button className="donation-btn" onClick={streamLabsDonation}><FontAwesomeIcon icon={faMoneyBillAlt} /> Faire un don</button>
          <button className="theater-btn" onClick={openTheaterScreen}>Mode théâtre <FontAwesomeIcon icon={faExpand} /></button>
        </section>
      </section>
    </>
  );
}

export default Home;