import "../style.css";

import { Component } from "react";
import { withTranslation } from "react-i18next";
import IndexScreen from "../index/indexscreen";
import ErrorScreen from "../error/errorscreen";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "index",
      lang: "de",
      currentTheme: "dark",
      login: false,
    };
  }

  // change Screen shown
  changeScreen = (newScreen) => this.setState({ currentScreen: newScreen }); //declarng all needed setStates
  
  // change Language shown
  changeLanguage = (newLang) => {
    if (newLang === "en") {
      this.setState({ lang: "en" });
      localStorage.setItem("lang", "en");
    } else {
      this.setState({ lang: "de" });
      localStorage.setItem("lang", "de");
    }
  };

  // change Theme shown
  changeTheme = (newTheme) => {
    this.setState({ currentTheme: newTheme });
    if(newTheme === "dark"){
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  // check for Login State
  changeLog = (bool) => this.setState({ login: bool });
    

  componentDidMount() {

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