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
            <a>{t("about")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a>{t("cv")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a>{t("skills")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a>{t("refs")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a>{t("contact")}</a>
          </li>
        </ul>
          

        </aside>
        
      </>
    );
  }
}

export default withTranslation()(IndexScreen);
