import React from "react";
import { Component } from "react";
import logo from "./../../media/logo192.png";
import { withTranslation } from "react-i18next";

class Navigation extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <main>
        <nav>
          <div>
            <div className="scrollmenu">{/*Displays all NavigationBar Items*/}
              <nav>
                <ul id="navi" className="navul">
                  <li
                    className="navli"
                    onClick={() => this.props.changeScreen("index")}
                  >
                    <a>{t("Startseite")}</a>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="dropbtn">Designs</button> {/*Dropdown for the Designs*/}
                      <div
                        id="myDropdown"
                        className="dropdown-content"
                        onClick={console.log()}
                      >
                        <a
                          id="light"
                          href="#"
                          value="light"
                          onClick={() =>
                            document.documentElement.setAttribute(
                              "class",
                              "light"
                            )
                          }
                        >
                          {t("light")}{" "}
                        </a>
                        <a
                          id="dark"
                          href="#"
                          value="dark"
                          onClick={() =>
                            document.documentElement.setAttribute(
                              "class",
                              "dark"
                            )
                          }
                        >
                          {t("dark")}
                        </a>{/*Fire was renamed to colorfull*/}
                        <a
                          id="fire"
                          href="#"
                          value="fire"
                          onClick={() =>
                            document.documentElement.setAttribute(
                              "class",
                              "fire"
                            )
                          }
                        >
                          {t("fire")}
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="line" />
          </div>
        </nav>
        <aside>
          <div id="app-cover">
            {" "}
            {/* https://codepen.io/himalayasingh/pen/EdVzNL*/}{/*Language-Switch with really bad British Flag*/}
            <div class="row">
              <div class="toggle-button-cover">
                <div class="button-cover">
                  <div class="button r" id="button-1">
                    <input
                      type="checkbox"
                      class="checkbox"
                      onClick={() =>
                        i18n.changeLanguage(
                          this.props.changeLanguage(this.props.lang)
                        )
                      }
                    ></input>
                    <div class="knobs"></div>
                    <div class="layer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    );
  }
}

export default withTranslation()(Navigation);
