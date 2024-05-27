import React from "react";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';
import { mdiCellphone } from '@mdi/js';
import { mdiHumanGreetingProximity } from '@mdi/js';

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
