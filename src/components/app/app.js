import "../style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import ErrorScreen from "../error/errorscreen";
import Header from "../header/header.js";
import Footer from "../footer/footer";
import Index from "../index/index";
import CV from "../cv/cv";
import Imprint from "../imprint/imprint";
import Matrix from "../matrix/matrix.js";


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
      <Header
        currentTheme={this.state.currentTheme}
        changeTheme={this.changeTheme}
        changeLanguage={this.changeLanguage}
        lang={this.state.lang}
      />
    );

    return (
      <>
    <main>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={navigationBar}>
          <Route path="" element={<Index />} />
          <Route path="matrix" element={<Matrix />} />
          <Route path="cv" element={<CV />} />
          <Route path="lebenslauf" element={<CV />}/>
          <Route path="imprint" element={<Imprint />} />
          <Route path="impressum" element={<Imprint />} />
          <Route path="*" element={<ErrorScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </main>
    {<Footer/>}



        
      </>
    );
  }
}

export default withTranslation()(App);