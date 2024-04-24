import { withTranslation } from "react-i18next";
import React, { Component } from "react";

class IndexScreen extends Component {
  componentDidMount() {}
  
  
  render() {
    const {t} = this.props;
    return (
      <>
        <aside className="quickNavigation">
        <ul id="navi" className="navul">
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a href="#about">{t("about")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a href="#cv">{t("cv")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a href="#skills">{t("skills")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a href="#refs">{t("refs")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a href="#foot">{t("contacts")}</a>
          </li>
        </ul>
        </aside>
        




      <div>
        <div id="about">
          <div className="about">
            <h1>{t("about")}</h1>
            <br/>
            <br/>
          <p className="about">
            Ich bin Jeremy Becker, IT Student aus Köthen und Begrüße hier recht herzlich auf meiner Website.
          </p>
          </div>
          
          <br/>
        </div>
        <div id="cv" className="cv">
          <h1>{t("cv")}</h1>
          <br/>
          <div class="lebenslauf">

            <div className="stickpunkt">
              <div class="leiste"> 
                Heute
              </div>
              <p className="cvContent">
              </p>
              </div>

              <div className="stickpunkt">
                <div class="leiste"> 
                April. 2023
                </div>
                <p className="cvContent">
                Anstellung an der Hochschule Anhalt im Bereich Marketing und Kommunikation im Auftrag für Bildungsmessen, Schülerbetreuung, Messeaufbau und Interne Aufgaben, wie beispielweise Planung oder Bereiche auf der Website der Hochschule.
                </p>
              </div>

              <div className="stickpunkt">
                <div class="leiste"> 
                Okt. 2021
                </div>
                <p className="cvContent">
                Erste Amtszeit als Fachschaftsrat "Informatik, Medien & Spieleentwicklung", inklusive Titel des Vorsitzenden sowie erste und letzte Amtszeit im Studierendenrat Köthen.
                </p>
              </div>

              <div className="stickpunkt">
                <div class="leiste"> 
                Okt. 2020
                </div>
                <p className="cvContent">
                Anstellung bei Poolbecker Köthen als Aushilfskraft für Montageleistungen und Betreuung der Website.
                </p>
              </div>


              <div className="stickpunkt">
                <div class="leiste"> 
                Okt. 2020
                </div>
                <p className="cvContent">
                Studium im Bachelor an der Hochschule Anhalt im Fachbereich für Informatik und Sprachen
                </p>
              </div>
              
            </div>
            <div class="line"></div>
          <br/>
        </div>
        <div id="skills" className="skills">
          <h1>{t("skills")}</h1>
          <br/>
          <br/>
        </div>
        <div id="refs" className="refs">
          <h1>{t("refs")}</h1>
          <br/>
          <br/>
        </div>
      </div>









      <aside className="cvDownload">

            <a href="https://cloud.beckerbasis.duckdns.org/s/2aGTLw8gnzepBEn/download/Lebenslauf.pdf">{t("download")}</a>
        </aside>
      </>
    );
  }
}

export default withTranslation()(IndexScreen);
