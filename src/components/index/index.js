import React from "react";
import { Component } from "react";
import { withTranslation } from "react-i18next";

class Index extends Component {
  render() {
    const { t } = this.props;
    return (
    <div>
        <div id="music" className="music">
        <h1><a href = "#" onClick={() =>

          fetch("https://stream.haaremy.de", {
          method: "GET",
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log(error))
  

        }>{t("Fetch Test")}</a></h1>
        </div>
    </div>        
    );
  }
}

export default withTranslation()(Index);
