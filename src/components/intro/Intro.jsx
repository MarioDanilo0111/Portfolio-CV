import "./intro.css";
import Me from "../img/me111.png";

const Intro = () => {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Profil/ Personlig beskrivning</h2>
          <h1 className="i-name">Mario Fernández V.</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">FrontEnd Developer</div>
              <div className="i-title-item">HTML/CSS</div>
              <div className="i-title-item">JavaScript</div>
              <div className="i-title-item">SCSS</div>
              <div className="i-title-item">C#</div>
            </div>
          </div>
          <div className="i-desc">
            <h5>
              Är en väl kvalificerad arbetare som man alltid kan vända sig till
              när problem uppstår. Är en stabil och ansvarsfull person som har
              mycket god samarbetsförmåga. Jag har studerat till läkemedels
              operatör på Europaskolan i Strängnäs och studerade då bland annat
              ämnen som; Kemi process A & B, produktionsutrustning, mätteknik,
              Svenska & Matematik. Har gåt Programmering 1 och skaffat kunskaer
              i C# Kännedom för SAP som skrivs i programmeringsspråk som heter
              ABAP. Den kontrollerar affärstransaktioner och utför olika
              analysfunktioner. Jag har arbetat med PAS-X, som är ett effektivt
              läkemedels- och biofarmaceutisk tillverknings mjukvara.
            </h5>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
