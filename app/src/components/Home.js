import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGamepad } from '@fortawesome/free-solid-svg-icons'

import "../assets/scss/components/home.scss";

const Home = () => {

  const [channelInfo, setChannelInfo] = useState({});
  const [host, setHost] = useState(new URL(window.location.href).hostname);

  const OPTIONS = { method: 'GET',
                    headers: {
                      'Accept': '*/*',
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': "*"
                    }
                  }

  const fetchData = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/channel/${Cookies.get('twitch_access_token')}`, OPTIONS)
    .then(res => { return res.json() })
    .then(data => {
      console.log(data);
      setChannelInfo(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="stream">
        <div className="header-live">
          <div className="title">
            <span>[<strong>{channelInfo.broadcaster_language ? channelInfo.broadcaster_language.toUpperCase() : 'FR'}</strong>]</span>
            {channelInfo.status ? channelInfo.status : 'Rien de spécial'}
          </div>
          <div className="game">
            <p>{channelInfo.game ? channelInfo.game : ''}</p>
            <span>
              <FontAwesomeIcon icon={faGamepad} />
            </span>
          </div>
        </div>
        <div className="stream-embed">
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
        </div>
      </section>
    </>
  );
}

export default Home;