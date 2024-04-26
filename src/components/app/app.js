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
      currentTheme: "light",
      login: false,
    };
  }

  

  // change Screen shown
  changeScreen = (newScreen) => this.setState({ currentScreen: newScreen }); //declarng all needed setStates
  
  // change Language shown
  changeLanguage = (newLang) => {
      this.setState({ lang: newLang });
      localStorage.setItem("lang", newLang);
  };

  // change Theme shown
  changeTheme = (newTheme) => {
    this.setState({ currentTheme: newTheme });
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute(
      "class",
      newTheme
    )
  };

  // check for Login State
  changeLog = (bool) => this.setState({ login: bool });
  

  componentDidMount() {
    const { i18n } = this.props;
    if(localStorage.getItem("theme")==null){
      localStorage.setItem("theme", "light")
    }
    if(localStorage.getItem("lang")==null){
      localStorage.setItem("lang", "de")
    }
    this.changeTheme(localStorage.getItem("theme"));
    this.changeLanguage(localStorage.getItem("lang"));
    i18n.changeLanguage(localStorage.getItem("lang"));
    //this.state.changeLanguage(localStorage.getItem("lang"));
  }


  render() {
    
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

    let screenComponent; // Displays IndexSceen

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
        <main>{screenComponent}</main>
        {footbar}
      </>
    );
  }
}

export default withTranslation()(App);