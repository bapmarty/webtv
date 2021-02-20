import { useEffect, useState } from "react";

import "../assets/scss/components/prog.scss";

const Prog = () => {

  const [prog, setProg] = useState({});

  const OPTIONS = { method: 'GET',
                    headers: {
                      'Accept': '*/*',
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': "*"
                    }
                  }

  useEffect(() => {
    const fetchData = () => {
      fetch(`${process.env.REACT_APP_API_HOST}/prog`, OPTIONS)
      .then(res => { return res.json() })
      .then(week => setProg({week}));
    }
    fetchData();
  }, []);

  return (
    <section className="prog-content">
      <section className="prog">
        <section className="title">
          <div>PROGRAMMATION DE LA SEMAINE</div>
        </section>
        <section className="days">
          <section className="day monday">
            <div className="day-name">Lundi</div>
          {prog.week ? prog.week.monday.map((session, i) => {
            return (
              <div className={`stream-session ${session.hour_start} ${session.hour_end}`} key={i}>
                  <p className="game">{session.game}</p>
                  <p className="session-time">{session.hour_start === "24h" ? "00h" : session.hour_start} - {session.hour_end === "24h" ? "00h" : session.hour_end}</p>
                </div>
              )
            }) : ""}
          </section>
          <section className="day tuesday">
            <div className="day-name">Mardi</div>
            {prog.week ? prog.week.tuesday.map((session, i) => {
              return (
                <div className={`stream-session ${session.hour_start} ${session.hour_end}`} key={i}>
                  <p className="game">{session.game}</p>
                  <p className="session-time">{session.hour_start === "24h" ? "00h" : session.hour_start} - {session.hour_end === "24h" ? "00h" : session.hour_end}</p>
                </div>
              )
            }) : ""}
          </section>
          <section className="day wednesday">
            <div className="day-name">Mercredi</div>
            {prog.week ? prog.week.wednesday.map((session, i) => {
              return (
                <div className={`stream-session ${session.hour_start} ${session.hour_end}`} key={i}>
                  <p className="game">{session.game}</p>
                  <p className="session-time">{session.hour_start === "24h" ? "00h" : session.hour_start} - {session.hour_end === "24h" ? "00h" : session.hour_end}</p>
                </div>
              )
            }) : ""}
          </section>
          <section className="day thursday">
            <div className="day-name">Jeudi</div>
            {prog.week ? prog.week.thursday.map((session, i) => {
              return (
                <div className={`stream-session ${session.hour_start} ${session.hour_end}`} key={i}>
                    <p className="game">{session.game}</p>
                    <p className="session-time">{session.hour_start === "24h" ? "00h" : session.hour_start} - {session.hour_end === "24h" ? "00h" : session.hour_end}</p>
                  </div>
                )
              }) : ""}
          </section>
          <section className="day friday">
            <div className="day-name">Vendredi</div>
            {prog.week ? prog.week.friday.map((session, i) => {
              return (
                <div className={`stream-session ${session.hour_start} ${session.hour_end}`} key={i}>
                    <p className="game">{session.game}</p>
                    <p className="session-time">{session.hour_start === "24h" ? "00h" : session.hour_start} - {session.hour_end === "24h" ? "00h" : session.hour_end}</p>
                  </div>
                )
              }) : ""}
          </section>
          <section className="day saturday">
              <div className="day-name">Samedi</div>
            {prog.week ? prog.week.saturday.map((session, i) => {
              return (
                <div className={`stream-session ${session.hour_start} ${session.hour_end}`} key={i}>
                    <p className="game">{session.game}</p>
                    <p className="session-time">{session.hour_start === "24h" ? "00h" : session.hour_start} - {session.hour_end === "24h" ? "00h" : session.hour_end}</p>
                  </div>
                )
              }) : ""}
          </section>
          <section className="day sunday">
              <div className="day-name">Dimanche</div>
            {prog.week ? prog.week.sunday.map((session, i) => {
                return (
                  <div className={`stream-session ${session.hour_start} ${session.hour_end}`} key={i}>
                    <p className="game">{session.game}</p>
                    <p className="session-time">{session.hour_start === "24h" ? "00h" : session.hour_start} - {session.hour_end === "24h" ? "00h" : session.hour_end}</p>
                  </div>
                )
              }) : ""}
          </section>
        </section>
      </section>
    </section>
  )
}

export default Prog;