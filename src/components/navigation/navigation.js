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
                        <Icon className="dropbtn" path={mdiCog} size={1} />
                          <div
                            id="myDropdown"
                            className="dropdown-content"
                            onClick={console.log()}
                          >
                            <ul class="dropdown-menu"> 
                              <li >
                                {t("design")}
                              
                                <ul class="dropdown-menu dropdown-submenu" >    {/*Dropdown Submenu 1*/}
                                                                                {/*Dropdown Option 1.1 */}
                                    <a  className="dropItem" id="light"  href="#" value="light"      
                                      onClick={() =>

                                        this.props.changeTheme("light")
                                      }
                                    >
                                      {t("light")}{" "}</a>  
                                                                                {/*Dropdown Option 1.2 */}
                                      <a  className="dropItem" id="dark"  href="#" value="dark"
                                      onClick={() =>
                                        this.props.changeTheme("shadow")
                                      }
                                    >
                                      {t("shadow")}{" "}</a>         
                                </ul>
                              </li>
                              <li>
                              {t("language")}
                                <ul class="dropdown-menu dropdown-submenu" >    {/*Dropdown Submenu 2*/}
                                                                                {/*Dropdown Option 2.1*/}
                                    <a  className="dropItem" id="de"  href="#" value="light"
                                      onClick={() => {
                                        
                                          this.props.changeLanguage("de")
                                          i18n.changeLanguage("de")
                                      }
                                          
                                        
                                      }
                                    >
                                      {t("Deutsch")}{" "}</a>                                                                  
                                                                                {/*Dropdown Option 2.2*/}
                                <a  className="dropItem" id="en"  href="#" value="light"
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
                    <h1>{t("webTitle")}</h1>
                    </li>

                  
                  <li>
                    <div className="dropdown">
                      <Icon className="dropbtn" path={mdiHumanGreetingProximity} size={1} />
                      <div
                        id="myDropdown"
                        className="dropdown-content"
                        onClick={console.log()}
                      >
                        <a
                          className="dropItem"
                          id="Instagram"
                          href="https://instagram.com/haaremy"
                        >
                          {t("Instagram")}
                        </a>
                        <a
                         className="dropItem"
                          id="Youtube"
                          href="https://www.youtube.com/@haaremy"
                        >
                          {t("Youtube")}
                        </a>
                        
                        <a
                          className="dropItem"
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
