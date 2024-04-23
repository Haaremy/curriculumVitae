import { withTranslation } from "react-i18next";
import React, { Component } from "react";

class IndexScreen extends Component {
  componentDidMount() {}
  
  
  render() {
    const {t} = this.props;
    return (
      <>
      
        <h1 className="mainHeadline">Gamified Crowdsourcing Platform</h1>
        <aside className="quiz">
        
          Score: 
          

        </aside>
        <div className="weiter">
          <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-restricted">
            <ul className="pure-menu-list">
            
              <li
                className="pure-menu-item"
                onClick={() => this.props.changeScreen("quiz")}
              >
                <button id="loading" className="weiter">
                  {t("tasks")}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
      </>
    );
  }
}

export default withTranslation()(IndexScreen);
