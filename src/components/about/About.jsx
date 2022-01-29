import React from "react";
import "../about/about.css";
import { Component } from "react";
import Stock from "../img/frontendJS.jpeg";

export default class About extends Component {
  render() {
    return (
      <div className="a" id="about">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src="https://www.pinpng.com/pngs/m/27-278277_839-x-1181-6-man-with-laptop-vector.png"
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">Om Mig</h1>
          <p className="a-sub">
            Att känna för att göra skillnaden i liv är egentligen möjlighet till
            ett arbete som man verkligen brinner för har till studerat och
            förberett sig för.
          </p>
          <p className="a-desc">
            Jag är väldigt driven person. Gillar ordning och reda, planering och
            struktur och tycker om att arbeta efter uppsatta mål. Känner nu att
            det är i rätt läge för att söka nya utmaningar. Viljan är stark för
            att jobba hårt och uppnå alla krav för att hjälpa vilken
            verksamheten som helst att flyta på som den ska. Inspirationen att
            både utvecklas själv genom att lära sig nya saker och arbetssätt är
            stor, men också att finnas där och driva utvecklingen framåt.
          </p>
          <div className="a-award">
            <img src={Stock} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Varför en Utvecklare?</h4>
              <p className="a-award-desc">
                Att gilla utmaningar Känna att man bidra med sitt sätt att tänka
                Chansen att samtidigt utvecklas med nya kunskaper i sitt område
                och utveckla sin kompetens.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
