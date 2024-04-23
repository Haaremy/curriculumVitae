import "../style.css";

import { Component } from "react";
import { withTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import IndexScreen from "../index/indexscreen";
import ErrorScreen from "../error/errorscreen";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "index",
      uuid: uuid(),
      lang: "de",
      currentTheme: "dark",
      login: false,
    };
  }

  changeScreen = (newScreen) => this.setState({ currentScreen: newScreen }); //declarng all needed setStates
  changeLanguage = (oldLang) => {
    if (oldLang === "de") {
      this.setState({ lang: "en" });
      return "en";
    } else {
      this.setState({ lang: "de" });
      return "de";
    }
  };
  changeTheme = (newTheme) => this.setState({ currentTheme: newTheme });
  changeLog = (bool) => this.setState({ login: bool });
  /*loadData = () => {
    // quick function to fetch all data
    fetch("https://webengineering.ins.hs-anhalt.de:40930/solutions")
      .then((res) => {
        if (!!res?.ok) {
          return res.json();
        } else {
          throw new Error("The response was not ok.");
        }
      })
      .then((solutions) => {
        this.setState({ solutions });
      })
      .catch((errorMessage) => console.error);
*/
    

  componentDidMount() {

      document.getElementById("loading").setAttribute("class", "loader");

  }

  render() {
    let langSwitch = <aside></aside>;
    let navigationBar = ( //declaring needed states for components
      <Navigation
        changeScreen={this.changeScreen}
        currentTheme={this.state.currentTheme}
        changeTheme={this.changeTheme}
        changeLanguage={this.changeLanguage}
        lang={this.state.lang}
        login={this.changeLog}
        log={this.state.login}
      />
    );

    let footbar = (
      <Footer changeScreen={this.changeScreen} lang={this.state.lang} />
    );

    let screenComponent; // Displays MainPage

    switch (this.state.currentScreen) {
      case "index":
        screenComponent = (
          <IndexScreen
            changeScreen={this.changeScreen}
          />
        );
        break;

      default:
        screenComponent = <ErrorScreen />;
    }
    return (
      <>
        {navigationBar}
        {langSwitch}
        <main>{screenComponent}</main>
        {footbar}
      </>
    );
  }
}

export default withTranslation()(App);