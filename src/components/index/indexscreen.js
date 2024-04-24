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
