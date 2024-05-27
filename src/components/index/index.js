import React from "react";
import { Component } from "react";
import { withTranslation } from "react-i18next";

class Index extends Component {
  render() {
    const { t } = this.props;
    return (
    <div>
        Index Seite.
    </div>        
    );
  }
}

export default withTranslation()(Index);
