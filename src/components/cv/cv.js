import { withTranslation } from "react-i18next";
import React, { Component } from "react";
import Icon from '@mdi/react';
import { mdiSortBoolAscendingVariant } from '@mdi/js';

let toggleType = [ true, true, true];

const sortTable = (n) => {
  var name = "myTable", table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  if(document?.getElementById(name)==null){
    return null;
  }
  table = document.getElementById(name);
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

class CV extends Component {

  constructor(){
    super();
    this.state = {
      toggleState0 : true,
      toggleState1 : true,
      toggleState2 : true,
    }
  }
  
  changeToggle = (n) =>{
    toggleType[n] = !toggleType[n];
    if(n === 0){
      this.setState({toggleState0 : toggleType[n]})
    }
    if(n === 1){
      this.setState({toggleState1 : toggleType[n]})
    }
    if(n === 2){
      this.setState({toggleState2 : toggleType[n]})
    }
  }

  
  render() {
    const {t} = this.props;
    let toggleWork = this.state.toggleState0 ? "istoggled" : "nottoggled";
    let toggleEdu = this.state.toggleState1 ? "istoggled" : "nottoggled";
    let togglePursuit = this.state.toggleState2 ? "istoggled" : "nottoggled";

    return (
      <>
        <aside className="quickNavigation">
        <ul id="navi" className="navul">
          <li
            className="navli"
            >
            <a href="#about">{t("about")}</a>
          </li>
          <li
            className="navli"
            >
            <a href="#cv">{t("cv-s")}</a>
          </li>
          <li
            className="navli"
            >
            <a href="#skills">{t("skills")}</a>
          </li>
          <li
            className="navli"
            >
            <a href="#refs">{t("refs")}</a>
          </li>
          <li
            className="navli"
            >
            <a href="#foot">{t("contacts")}</a>
          </li>
        </ul>
        </aside>
        




      <div className="indexContent">
        
        <div className="about-main" id="about">


        <div class="flip-card-cv">
              <div class="flip-card-inner-cv about-text-cv">
                <div class="flip-card-front-cv">
                  
                  <div className="about">
                    <div className="about-text">
                      <h1>Abriss</h1>
                      <h1>Jeremy Becker</h1>
                    </div>
                  </div>
                </div>
              <div class="flip-card-back-cv">
              
              <div className="about-flipped">
                    <div className="about-text-flipped">
                      <h1><br/>{t("about-caption")}</h1>
                    </div>
                  </div>
              </div>
              </div>
            </div>
            <br/><br/>
          <div class="line"/>
            <br/>
        </div>
        <div id="cv" className="cv">
          <h1>{t("cv")}</h1>
       
          
          <div class="lebenslauf">
            <table id="myTable">
              <tr className="even">
                <th id = "th1" onClick={() => sortTable(0)}><div className="categoryHead">
                  <li>
                    <div className="dropdown">
                      <Icon className="dropbtn" path={mdiSortBoolAscendingVariant}  />
                      <div
                        id="myDropdown"
                        className="dropdown-content"                      >
                        <a 
                          className="dropItem"
                          onClick={() => this.changeToggle(0)}
                          href="#"
                        >
                          <input 
                            type="checkbox"
                            checked={toggleType[0]}
                            
                          />
                          {t("work")}
                        </a>
                        <a 
                          className="dropItem"
                         onClick={() => this.changeToggle(1)}
                        >
                          <input 
                            type="checkbox"
                            checked={toggleType[1]}
                            
                            />
                          {t("edu")}
                        </a>
                        <a 
                          className="dropItem"
                          onClick={() => this.changeToggle(2)}
                        >
                          <input 
                            type="checkbox"
                            checked={toggleType[2]}
                            
                          />
                          {t("pursuits")}
                        </a>
                      </div>
                    </div>   
                  </li>
                </div>
                <div className="categoryName"> {t("type")}</div>
              </th>
              <th id = "th2" onClick={() => sortTable(1)}>{t("time")}</th>
              <th id = "th3" >{t("description")}</th>
            </tr>
            <tr className="odd">
              <td className="type"></td>
              <td className="date">{t("today")}</td>
              <td className="description"></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type">{t("work")}</td>
              <td className="date">2023 {t("apr")}</td>
              <td className="description">{t("dewo23/04")}<br/><br/></td>
            </tr>
            <tr className={togglePursuit}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2022 {t("feb")}</td>
              <td className="description">{t("depu22/02")}<br/><br/></td>
            </tr>
            <tr className={togglePursuit}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2021 {t("oct")}</td>
              <td className="description">{t("depu21/10")}<br/><br/></td>
            </tr>
            <tr className={togglePursuit}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2021 {t("apr")}</td>
              <td className="description">{t("depu21/04")}<br/><br/></td>
            </tr>
            <tr className={togglePursuit}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2021 {t("feb")}</td>
              <td className="description">{t("depu21/02")}<br/><br/></td>
            </tr>
            <tr className={toggleEdu}>
              <td className="type">{t("edu")}</td>
              <td className="date">2020 {t("oct")}</td>
              <td className="description">{t("deedu20/10")}<br/><br/></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type">{t("work")}</td>
              <td className="date">2020 {t("oct")}</td>
              <td className="description">{t("dewo20/08")}<br/><br/></td>
            </tr>
            <tr className={toggleEdu}>
              <td className="type">{t("edu")}</td>
              <td className="date">2020 {t("jul")}</td>
              <td className="description">{t("deedu20/07")}<br/><br/></td>
            </tr>
            <tr className={togglePursuit}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2019 {t("apr")}</td>
              <td className="description">{t("depu19/04")}<br/><br/></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type">{t("edu")}</td>
              <td className="date">2018 {t("may")}</td>
              <td className="description">{t("deedu18/05")}<br/><br/></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type">{t("work")}</td>
              <td className="date">2018 {t("apr")}</td>
              <td className="description">{t("dewo18/04")}<br/><br/></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type">{t("edu")}</td>
              <td className="date">2017 {t("mar")}</td>
              <td className="description">{t("deedu17/03")}<br/><br/></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type">{t("edu")}</td>
              <td className="date">2016 {t("mar")}</td>
              <td className="description">{t("deedu16/03")}<br/><br/></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2013 {t("oct")}</td>
              <td className="description">{t("depur13/10")}<br/><br/></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type">{t("edu")}</td>
              <td className="date">2012 {t("sep")}</td>
              <td className="description">{t("deedu12/09")}<br/><br/></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type">{t("edu")}</td>
              <td className="date">2008 {t("sep")}</td>
              <td className="description">{t("deedu08/09")}<br/><br/></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type"></td>
              <td className="date">2002 {t("feb")}</td>
              <td className="description">{t("deedu02/02")}<br/><br/></td>
            </tr>
            
            </table>
          </div>
          <div class="line"/>
            <br/>
        </div>
        <h1>{t("skills")}</h1>
        <div id="skills" className="skills">
          
          <br/>
          <br/>
          <div className="work-skills">
            <h2>{t("work-skills")}</h2>
            <div className="skillTable tooltip">
            

            <label for="teamwork">{t("teamwork")}</label><br/>
            <p class="tooltiptext">{t("teamwork-text")}</p>
            <input type="radio" id="teamwork1" name="teamwork1" value="5" disabled checked="false"/>
            <input type="radio" id="teamwork2" name="teamwork2" value="4" disabled checked="false"/>
            <input type="radio" id="teamwork3" name="teamwork3" value="3" disabled checked="false"/>
            <input type="radio" id="teamwork4" name="teamwork4" value="2" disabled checked="false"/>
            <input type="radio" id="teamwork5" name="teamwork5" value="1" disabled checked="false"/>
            <input type="radio" id="teamwork6" name="teamwork6" value="0" enabled checked="true"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="teammanagement">{t("teammanagement")}</label><br/>
            <p class="tooltiptext">{t("teammanagement-text")}</p>
            <input type="radio" id="teammanagement" name="teammanagement1" value="5" disabled checked="false"/>
            <input type="radio" id="teammanagement" name="teammanagement2" value="4" disabled checked="false"/>
            <input type="radio" id="teammanagement" name="teammanagement3" value="3" disabled checked="false"/>
            <input type="radio" id="teammanagement" name="teammanagement4" value="2" disabled checked="false"/>
            <input type="radio" id="teammanagement" name="teammanagement5" value="1" enabled checked="true"/>
            <input type="radio" id="teammanagement" name="teammanagement6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="communication">{t("communication")}</label><br/>
            <p class="tooltiptext">{t("communication-text")}</p>
            <input type="radio" id="communication" name="communication1" value="5" disabled checked="false"/>
            <input type="radio" id="communication" name="communication2" value="4" disabled checked="false"/>
            <input type="radio" id="communication" name="communication3" value="3" disabled checked="false"/>
            <input type="radio" id="communication" name="communication4" value="2" enabled checked="true"/>
            <input type="radio" id="communication" name="communication5" value="1" disabled checked="false"/>
            <input type="radio" id="communication" name="communication6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="reliability">{t("reliability")}</label><br/>
            <p class="tooltiptext">{t("reliability-text")}</p>
            <input type="radio" id="reliability" name="reliability1" value="5" disabled checked="false"/>
            <input type="radio" id="reliability" name="reliability2" value="4" disabled checked="false"/>
            <input type="radio" id="reliability" name="reliability3" value="3" disabled checked="false"/>
            <input type="radio" id="reliability" name="reliability4" value="2" disabled checked="false"/>
            <input type="radio" id="reliability" name="reliability5" value="1" enabled checked="true"/>
            <input type="radio" id="reliability" name="reliability6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="punctuality">{t("punctuality")}</label><br/>
            <p class="tooltiptext">{t("punctuality-text")}</p>
            <input type="radio" id="punctuality" name="punctuality1" value="5" disabled checked="false"/>
            <input type="radio" id="punctuality" name="punctuality2" value="4" disabled checked="false"/>
            <input type="radio" id="punctuality" name="punctuality3" value="3" disabled checked="false"/>
            <input type="radio" id="punctuality" name="punctuality4" value="2" disabled checked="false"/>
            <input type="radio" id="punctuality" name="punctuality5" value="1" disabled checked="false"/>
            <input type="radio" id="punctuality" name="punctuality6" value="0" enabled checked="true"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="solo">{t("solo")}</label><br/>
            <p class="tooltiptext">{t("solo-text")}</p>
            <input type="radio" id="solo" name="solo1" value="5" disabled checked="false"/>
            <input type="radio" id="solo" name="solo2" value="4" disabled checked="false"/>
            <input type="radio" id="solo" name="solo3" value="3" disabled checked="false"/>
            <input type="radio" id="solo" name="solo4" value="2" disabled checked="false"/>
            <input type="radio" id="solo" name="solo5" value="1" enabled checked="true"/>
            <input type="radio" id="solo" name="solo6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="timemanagement">{t("timemanagement")}</label><br/>
            <p class="tooltiptext">{t("timemanagement-text")}</p>
            <input type="radio" id="timemanagement" name="timemanagement1" value="5" disabled checked="false"/>
            <input type="radio" id="timemanagement" name="timemanagement2" value="4" disabled checked="false"/>
            <input type="radio" id="timemanagement" name="timemanagement3" value="3" disabled checked="false"/>
            <input type="radio" id="timemanagement" name="timemanagement4" value="2" enabled checked="true"/>
            <input type="radio" id="timemanagement" name="timemanagement5" value="1" disabled checked="false"/>
            <input type="radio" id="timemanagement" name="timemanagement6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
          </div>
          <div className="language-skills">
            <h2>{t("languages")}</h2>
            <div className="skillTable tooltip">
            <label for="english">{t("english")}</label><br/>
            <p class="tooltiptext">{t("english-text")}</p>
            <input type="radio" id="english" name="english1" value="5" disabled checked="false"/>
            <input type="radio" id="english" name="english2" value="4" disabled checked="false"/>
            <input type="radio" id="english" name="english3" value="3" enabled checked="true"/>
            <input type="radio" id="english" name="english4" value="2" disabled checked="false"/>
            <input type="radio" id="english" name="english5" value="1" disabled checked="false"/>
            <input type="radio" id="english" name="english6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="french">{t("french")}</label><br/>
            <p class="tooltiptext">{t("french-text")}</p>
            <input type="radio" id="french" name="french1" value="5" disabled checked="false"/>
            <input type="radio" id="french" name="french2" value="4" disabled checked="false"/>
            <input type="radio" id="french" name="french3" value="3" enabled checked="true"/>
            <input type="radio" id="french" name="french4" value="2" disabled checked="false"/>
            <input type="radio" id="french" name="french5" value="1" disabled checked="false"/>
            <input type="radio" id="french" name="french6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="java">Java</label><br/>
            <p class="tooltiptext">{t("teamwork-text")}</p>
            <input type="radio" id="java" name="java1" value="5" disabled checked="false"/>
            <input type="radio" id="java" name="java2" value="4" disabled checked="false"/>
            <input type="radio" id="java" name="java3" value="3" enabled checked="true"/>
            <input type="radio" id="java" name="java4" value="2" disabled checked="false"/>
            <input type="radio" id="java" name="java5" value="1" disabled checked="false"/>
            <input type="radio" id="java" name="java6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="javascript">JavaScript</label><br/>
            <p class="tooltiptext">{t("teamwork-text")}</p>
            <input type="radio" id="javas" name="javas1" value="5" disabled checked="false"/>
            <input type="radio" id="javas" name="javas2" value="4" disabled checked="false"/>
            <input type="radio" id="javas" name="javas3" value="3" disabled checked="false"/>
            <input type="radio" id="javas" name="javas4" value="2" enabled checked="true"/>
            <input type="radio" id="javas" name="javas5" value="1" disabled checked="false"/>
            <input type="radio" id="javas" name="javas6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="react">ReactJS</label><br/>
            <p class="tooltiptext">{t("teamwork-text")}</p>
            <input type="radio" id="react" name="react1" value="5" disabled checked="false"/>
            <input type="radio" id="react" name="react2" value="4" disabled checked="false"/>
            <input type="radio" id="react" name="react3" value="3" disabled checked="false"/>
            <input type="radio" id="react" name="react4" value="2" enabled checked="true"/>
            <input type="radio" id="react" name="react5" value="1" disabled checked="false"/>
            <input type="radio" id="react" name="react6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="python">Python</label><br/>
            <p class="tooltiptext">{t("teamwork-text")}</p>
            <input type="radio" id="python" name="python1" value="5" enabled checked="true"/>
            <input type="radio" id="python" name="python2" value="4" disabled checked="false"/>
            <input type="radio" id="python" name="python3" value="3" disabled checked="false"/>
            <input type="radio" id="python" name="python4" value="2" disabled checked="false"/>
            <input type="radio" id="python" name="python5" value="1" disabled checked="false"/>
            <input type="radio" id="python" name="python6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="CSharp">C#</label><br/>
            <p class="tooltiptext">{t("teamwork-text")}</p>
            <input type="radio" id="cSharp" name="cSharp1" value="5" enabled checked="true"/>
            <input type="radio" id="cSharp" name="cSharp2" value="4" disabled checked="false"/>
            <input type="radio" id="cSharp" name="cSharp3" value="3" disabled checked="false"/>
            <input type="radio" id="cSharp" name="cSharp4" value="2" disabled checked="false"/>
            <input type="radio" id="cSharp" name="cSharp5" value="1" disabled checked="false"/>
            <input type="radio" id="cSharp" name="cSharp6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
          </div>
          <div className="hobby-skills">
            <h2>{t("hobbys")}</h2>
            <div className="skillTable tooltip">
            <label for="skating">{t("skating")}</label><br/>
            <p class="tooltiptext">{t("skating-text")}</p>
            <input type="radio" id="skating" name="skating1" value="5" disabled checked="false"/>
            <input type="radio" id="skating" name="skating2" value="4" disabled checked="false"/>
            <input type="radio" id="skating" name="skating3" value="3" disabled checked="false"/>
            <input type="radio" id="skating" name="skating4" value="2" disabled checked="false"/>
            <input type="radio" id="skating" name="skating5" value="1" enabled checked="true"/>
            <input type="radio" id="skating" name="skating6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="cooking">{t("cooking")}</label><br/>
            <p class="tooltiptext">{t("cooking-text")}</p>
            <input type="radio" id="cooking" name="cooking1" value="5" disabled checked="false"/>
            <input type="radio" id="cooking" name="cooking2" value="4" disabled checked="false"/>
            <input type="radio" id="cooking" name="cooking3" value="3" enabled checked="true"/>
            <input type="radio" id="cooking" name="cooking4" value="2" disabled checked="false"/>
            <input type="radio" id="cooking" name="cooking5" value="1" disabled checked="false"/>
            <input type="radio" id="cooking" name="cooking6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
            <div className="skillTable tooltip">
            <label for="baking">{t("baking")}</label><br/>
            <p class="tooltiptext">{t("baking-text")}</p>
            <input type="radio" id="baking" name="baking1" value="5" disabled checked="false"/>
            <input type="radio" id="baking" name="baking2" value="4" disabled checked="false"/>
            <input type="radio" id="baking" name="baking3" value="3" disabled checked="false"/>
            <input type="radio" id="baking" name="baking4" value="2" enabled checked="true"/>
            <input type="radio" id="baking" name="baking5" value="1" disabled checked="false"/>
            <input type="radio" id="baking" name="baking6" value="0" disabled checked="false"/>
            <br/><br/><br/>
            </div>
          </div>
        </div>
        <div class="line"/>
            <br/>
        <div id="refs" className="refs">
          <h1>{t("refs")}</h1>
          <br/>
          <br/>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="img_avatar.png" alt="<Cover not Loading>"/>
                  <h1>Projekt 1 Titel</h1>
                </div>
              <div class="flip-card-back">
                <p className="flip-info">Infotext zu Projekt.</p>
                <a className="flip-link">Link 1 zu Projekt (inaktiv).</a>
                <br/>
                <a className="flip-link">Link 2 zu Projekt (inaktiv).</a>
              </div>
              </div>
            </div> 

        </div>
      </div>









      <aside className="cvDownload">

            <a href="https://cloud.beckerbasis.duckdns.org/s/2aGTLw8gnzepBEn/download/Lebenslauf.pdf">{t("download")}</a>
        </aside>
      </>
    );
  }
}

export default withTranslation()(CV);
