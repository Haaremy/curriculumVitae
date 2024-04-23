import React from "react";
import logo from "./../../media/logo192.png";
import { Component } from "react";
import { withTranslation } from "react-i18next";

class Footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <footer>
        <div class="line"></div>
        {/*Draws Line*/}

        <footer-box>
          {t("footerTitle")}
          {/*Title Text*/}
          <br />
          {/*All Links*/}
          <ul id="foot" className="footul">
            <li className="footli">
              <a href="https://webengineering.ins.hs-anhalt.de:40443/api/v1/web/whisk.system/776_master/stjmbeckfirst/index.html">
                Jeremys Gitlab
              </a>
            </li>
            <li className="footli">
              <a href="https://gitlab.hs-anhalt.de/stjmbeck/reactapp-lnw">
                Projektseite
              </a>
            </li>
            <li className="footli">
              <a href="https://webengineering.ins.hs-anhalt.de:40443/api/v1/web/whisk.system/908_master/lnwwum/index.html">
                Prototyp
              </a>
            </li>
          </ul>
          {/*Displays Credits*/}
        </footer-box>
        <br />
        <br />
        <br />
        <div className="credits">{t("footerText")}</div>
        <br />
        <br />
        <br />

        <a href="https://instagram.com/Haaremy">
          {/*My Logo & Instagram*/}
          <img
            src={logo}
            alt="logo"
            onClick={(e) =>
              "window.open(https://instagram.com/haaremy), return false"
            }
          />
        </a>
      </footer>
    );
  }
}

export default withTranslation()(Footer);
