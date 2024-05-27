import { withTranslation } from "react-i18next";
import React, { Component } from "react";


class Imprint extends Component {


  
  render() {
    const {t} = this.props;

    return (
      <>

      <div className="imprint">
        <p>
          <h2>Impressum</h2>
          <br/>
          <br/><br/>Betreiber
          <br/><br/>Jeremy Becker
          <br/><br/>
          <br/><br/>Postanschift
          <br/><br/>Friedrich-Ebert-Str. 3
          <br/><br/>06366 Köthen
          <br/><br/>
          <br/><br/>Inhaber / verantworliche Person
          <br/><br/>Herr Jeremy Becker
          <br/><br/>Friedrich Ebert Str.3
          <br/><br/>06366 Köthen
          <br/><br/>
          <br/><br/>Kontakt
          <br/><br/>Telefon: +49157 / 30062682
          <br/><br/>E-Mail: info@haaremy.de
          <br/><br/>        haaremy@gmail.com
          <br/><br/>
          <br/><br/>Hompage: www.haaremy.de
          <br/><br/>
          <br/><br/>Rechtsform
          <br/><br/>Privatperson
        </p>

          <div class="line"/>
            <br/>
        <p>
        <br/><h3>Rechtliche Hinweise zur Webseite</h3>
        <br/>
        <br/>  <h4>Haftungsausschluss / Haftung für Inhalte</h4>
        <br/>  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden ich diese Inhalte umgehend entfernen.
        <br/>
        <br/>  <h4>Haftung für Links</h4>       
        <br/> Meine Website enthält unter Umständen Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        <br/>
        <br/>  <h4>Urheberrecht</h4>      
        <br/>  Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
        <br/>
        <br/>  <h4>Datenschutz</h4>      
        <br/>  Die Nutzung meiner Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf meinen Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben soweit sie nicht zur Erfüllung eines Auftrages notwendig sind. Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Der Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
        <br/>
        <br/>  Gestaltung und Programmierung:  Jeremy Becker
        </p>     
      </div>





      </>
    );
  }
}

export default withTranslation()(Imprint);
