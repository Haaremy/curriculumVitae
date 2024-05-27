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

          <div class="line"/>
            <br/>
        </div>
        <div id="cv" className="cv">
          <h1>{t("cv")}</h1>
          <br/>
          
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
        <div id="skills" className="skills">
          <h1>{t("skills")}</h1>
          <br/>
          <br/>
          <div className="skillTable">
          <label for="teamwork">{t("teamwork")}</label><br/>
          <input type="radio" id="teamwork" name="teamwork" value="5" disabled checked="false"/>
          <input type="radio" id="teamwork" name="teamwork" value="4" disabled checked="false"/>
          <input type="radio" id="teamwork" name="teamwork" value="3" disabled checked="false"/>
          <input type="radio" id="teamwork" name="teamwork" value="2" disabled checked="false"/>
          <input type="radio" id="teamwork" name="teamwork" value="1" disabled checked="false"/>
            <input type="radio" id="teamwork" name="teamwork" value="0" disabled checked="true"/>
              <br/><br/><br/>
        </div>
        </div>
        <div id="refs" className="refs">
          <h1>{t("refs")}</h1>
          <br/>
          <br/>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="img_avatar.png" alt="<Cover Image not Loading>"/>
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
