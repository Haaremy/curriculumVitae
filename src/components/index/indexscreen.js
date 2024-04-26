import { withTranslation } from "react-i18next";
import React, { Component } from "react";
import Icon from '@mdi/react';
import { mdiSortBoolAscendingVariant } from '@mdi/js';

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

class IndexScreen extends Component {
  componentDidMount() {

  }
  
  changeToggle1(){
    
    this.props.setToggle1(!this.props.toggle1)
 }
 changeToggle2(){
  this.props.setToggle2(!this.props.toggle2)
}
changeToggle3(){
  this.props.setToggle3(!this.props.toggle3)
}
  
  render() {
    const {t} = this.props;
    let toggleType1 = this.props.toggle1 ? "istoggled" : "nottoggled";
    let toggleType2 = this.props.toggle2 ? "istoggled" : "nottoggled";
    let toggleType3 = this.props.toggle3 ? "istoggled" : "nottoggled";

    return (
      <>
        <aside className="quickNavigation">
        <ul id="navi" className="navul">
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a href="#about">{t("about")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a href="#cv">{t("cv-s")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a href="#skills">{t("skills")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a href="#refs">{t("refs")}</a>
          </li>
          <li
            className="navli"
            onClick={() => this.props.changeScreen("index")}
            >
            <a href="#foot">{t("contacts")}</a>
          </li>
        </ul>
        </aside>
        




      <div className="indexContent">
        
        <div className="about-main" id="about">
          <div className="about">
            <div className="about-text">
              <h1>{t("about")}</h1>
              <h1>Jeremy Becker</h1>
              <br/>
              <br/>
              <p className="about">
                {t("about-caption")}
              </p>
              </div>
            
 
          </div>
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
                          onClick={this.changeToggle1.bind(this)}
                        >
                          <input 
                            type="checkbox"
                            checked={this.props.toggle1}
                            onChange={this.changeToggle1.bind(this)}
                          />
                          {t("work")}
                        </a>
                        <a 
                          className="dropItem"
                         onClick={this.changeToggle2.bind(this)}
                        >
                          <input 
                            type="checkbox"
                            checked={this.props.toggle2}
                            onChange={this.changeToggle2.bind(this)}
                            />
                          {t("edu")}
                        </a>
                        <a 
                          className="dropItem"
                          onClick={this.changeToggle3.bind(this)}
                        >
                          <input 
                            type="checkbox"
                            checked={this.props.toggle3}
                            onChange={this.changeToggle3.bind(this)}
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
            <tr className={toggleType1}>
              <td className="type">{t("work")}</td>
              <td className="date">2023 {t("apr")}.</td>
              <td className="description">{t("dewo23/4.1")}</td>
            </tr>
            <tr className={toggleType3}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2022 {t("feb")}.</td>
              <td className="description">{t("depu22/02.1")}</td>
            </tr>
            <tr className={toggleType3}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2021 {t("oct")}.</td>
              <td className="description">{t("depu21/10.1")}</td>
            </tr>
            <tr className={toggleType3}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2021 {t("apr")}.</td>
              <td className="description">{t("depu21/04.1")}</td>
            </tr>
            <tr className={toggleType3}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2021 {t("feb")}.</td>
              <td className="description">{t("depu21/02.1")}</td>
            </tr>
            <tr className={toggleType2}>
              <td className="type">{t("edu")}</td>
              <td className="date">2020 {t("oct")}.</td>
              <td className="description">{t("deedu20/10.1")}</td>
            </tr>
            <tr className={toggleType1}>
              <td className="type">{t("work")}</td>
              <td className="date">2020 {t("oct")}.</td>
              <td className="description">{t("dewo20/08.1")}</td>
            </tr>
            <tr className={toggleType2}>
              <td className="type">{t("edu")}</td>
              <td className="date">2020 {t("jul")}.</td>
              <td className="description">{t("deedu20/07.1")}</td>
            </tr>
            <tr className={toggleType3}>
              <td className="type">{t("pursuits")}</td>
              <td className="date">2019 {t("apr")}.</td>
              <td className="description">{t("depu19/04.1")}</td>
            </tr>
            <tr className={toggleType1}>
              <td className="type">{t("work")}</td>
              <td className="date">2018 {t("apr")}.</td>
              <td className="description">{t("dewo18/04.1")}</td>
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
        </div>
        <div id="refs" className="refs">
          <h1>{t("refs")}</h1>
          <br/>
          <br/>
        </div>
      </div>









      <aside className="cvDownload">

            <a href="https://cloud.beckerbasis.duckdns.org/s/2aGTLw8gnzepBEn/download/Lebenslauf.pdf">{t("download")}</a>
        </aside>
      </>
    );
  }
}

export default withTranslation()(IndexScreen);
