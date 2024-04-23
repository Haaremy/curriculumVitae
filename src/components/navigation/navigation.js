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
                <ul id="navi" className="navul"> {/* Dropdown Menu */}
                  <li>
                    <div className="dropdown">
                      <div className="dropdown">
                        <button className="dropbtn">Einstellungen</button> {/*Dropdown Button */}
                          <div
                            id="myDropdown"
                            className="dropdown-content"
                            onClick={console.log()}
                          >
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
                              <li>
                              <button className="dropbtn">Design</button>  
                                <ul class="dropdown-menu dropdown-submenu" >    {/*Dropdown Submenu 1*/}
                                                                                {/*Dropdown Option 1.1 */}
                                    <a  id="light"  href="#" value="light"      
                                      onClick={() =>
                                        document.documentElement.setAttribute(
                                        "class",
                                        "light"
                                        )
                                      }
                                    >
                                      {t("light")}{" "}</a>  
                                                                                {/*Dropdown Option 1.2 */}
                                      <a  id="dark"  href="#" value="dark"
                                      onClick={() =>
                                        document.documentElement.setAttribute(
                                        "class",
                                        "dark"
                                        )
                                      }
                                    >
                                      {t("dark")}{" "}</a>         
                                </ul>
                              </li>
                              <li>
                              <button className="dropbtn">Sprache</button>
                                <ul class="dropdown-menu dropdown-submenu" >    {/*Dropdown Submenu 2*/}
                                                                                {/*Dropdown Option 2.1*/}
                                    <a  id="de"  href="#" value="light"
                                      onClick={() =>
                                        i18n.changeLanguage(
                                          this.props.changeLanguage("de")
                                        )
                                      }
                                    >
                                      {t("Deutsch")}{" "}</a>                                                                  
                                                                                {/*Dropdown Option 2.2*/}
                                <a  id="en"  href="#" value="light"
                                      onClick={() =>
                                        i18n.changeLanguage(
                                          this.props.changeLanguage("en")
                                        )
                                      }
                                    >
                                      {t("English")}{" "}</a>        
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="navli"
                      onClick={() => this.props.changeScreen("index")}
                    >
                    <a>{t("Startseite")}</a>
                    </li>

                  
                  <li>
                    <div className="dropdown">
                      <button className="dropbtn">Social Media</button> {/*Dropdown for the Designs*/}
                      <div
                        id="myDropdown"
                        className="dropdown-content"
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
                  </li>
                </ul>
              </nav>
            </div>
            <div class="line" />
          </div>
        </nav>
      </main>
    );
  }
}

export default withTranslation()(Navigation);
