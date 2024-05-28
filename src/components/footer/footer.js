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
        <div className="footer-table">
          <div className="custom-column" id="left">
            <div className="custom-row">
              <a href="mailto:webmaster@haaremy.de">
                <Icon path={mdiEmail} size={1} />
              </a>
            </div>
            <div className="custom-row">
              <a href="imprint">
                {t("imprint")}
              </a>
            </div>
          </div>
          <div className="custom-column" id="center">
            <div className="custom-row">
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
            </div>
            </div>
          <div className="custom-column" id="right">
            <div className="custom-row">
              <a href="tel:+49(0)15730062682">
                <Icon path={mdiCellphone} size={1} />
              </a>
            </div>
            <div className="custom-row">
              <a href="#">
                © 2024 Haaremy Productions
              </a>
            </div>
        </div>
      </div>












       
      </footer>
    );
  }
}

export default withTranslation()(Footer);
