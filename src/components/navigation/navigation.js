import React from "react";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import Icon from '@mdi/react';
import { mdiHumanGreetingProximity } from '@mdi/js';
import { mdiCog } from '@mdi/js';

class Navigation extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <main>
        <nav>
          <div>
           
              <nav>
                <ul id="navi" className="navul"> {/* Dropdown Menu */}
                  <li>
                    <div className="dropdown">
                      <div className="dropdown">
                        <div className="dropbtn"><Icon path={mdiCog} size={1} /></div> {/*Dropdown Button */}
                          <div
                            id="myDropdown"
                            className="dropdown-content"
                            onClick={console.log()}
                          >
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
                              <li>
                                {t("design")}
                              
                                <ul class="dropdown-menu dropdown-submenu" >    {/*Dropdown Submenu 1*/}
                                                                                {/*Dropdown Option 1.1 */}
                                    <a  id="light"  href="#" value="light"      
                                      onClick={() =>

                                        this.props.changeTheme("light")
                                      }
                                    >
                                      {t("light")}{" "}</a>  
                                                                                {/*Dropdown Option 1.2 */}
                                      <a  id="dark"  href="#" value="dark"
                                      onClick={() =>
                                        this.props.changeTheme("dark")
                                      }
                                    >
                                      {t("dark")}{" "}</a>         
                                </ul>
                              </li>
                              <li>
                              {t("language")}
                                <ul class="dropdown-menu dropdown-submenu" >    {/*Dropdown Submenu 2*/}
                                                                                {/*Dropdown Option 2.1*/}
                                    <a  id="de"  href="#" value="light"
                                      onClick={() => {
                                        
                                          this.props.changeLanguage("de")
                                          i18n.changeLanguage("de")
                                      }
                                          
                                        
                                      }
                                    >
                                      {t("Deutsch")}{" "}</a>                                                                  
                                                                                {/*Dropdown Option 2.2*/}
                                <a  id="en"  href="#" value="light"
                                      onClick={() => {
                                        i18n.changeLanguage("en")
                                          this.props.changeLanguage("en")
                                      }
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
                      id="pageTitle"
                      onClick={() => this.props.changeScreen("index")}
                    >
                    <a>{t("webTitle")}</a>
                    </li>

                  
                  <li>
                    <div className="dropdown">
                      <button className="dropbtn"><Icon path={mdiHumanGreetingProximity} size={1} /></button> {/*Dropdown for the Designs*/}
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
        </nav>
      </main>
    );
  }
}

export default withTranslation()(Navigation);
