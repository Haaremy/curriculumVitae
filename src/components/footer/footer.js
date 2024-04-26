import React from "react";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';
import { mdiCellphone } from '@mdi/js';
import { mdiHumanGreetingProximity } from '@mdi/js';

class Footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <footer>
        <div class="line"></div>
        {/*Draws Line*/}

        <footer-box>
          <br />
          {/*All Links*/}
          <ul id="foot" className="footul">
            <li className="footli">
            <div className="footP1">
            <a href="mailto:webmaster@haaremy.de">
            <Icon path={mdiEmail} size={1} />
              </a>
              <a href="#">
              {t("imprint")}
              </a>
              </div>
              
            </li>
            <li className="footli">
              <a href="tel:+49(0)15730062682">
              <Icon path={mdiCellphone} size={1} />
              </a>
            </li>
            <li className="footli">
              <div className="footP1">
                <div className="dropup">
                  <button className="dropbtn"><Icon path={mdiHumanGreetingProximity} size={1} /></button> {/*Dropdown for the Designs*/}
                  <div
                    id="myDropdown"
                    className="dropup-content"
                    onClick={console.log()}
                    >
                  <a
                    id="Instagram"
                    href="https://instagram.com/haaremy"
                  >
                    {t("Instagram")}
                  </a>
                  <a
                    id="Youtube"
                    href="https://www.youtube.com/@haaremy"
                    >
                    {t("Youtube")}
                  </a>         
                  <a
                    id="Github"
                    href="https://github.com/Haaremy"
                  >
                    {t("Github")}
                  </a>
          	    </div>
              </div>

              <a href="#">
              © 2024 Haaremy Productions
              </a>
              </div>
              
            </li>
          </ul>
        </footer-box>
      </footer>
    );
  }
}

export default withTranslation()(Footer);
