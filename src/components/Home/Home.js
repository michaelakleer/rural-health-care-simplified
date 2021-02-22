import React from "react";
import Timeline from "./Timeline";
import PdfDownload from "../../images/pdf-download.png";
import WabKinew from "../../images/wabkinew.jpg";
import ReportImage from "../../images/report-image.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <section className="homeOne">
        <h1>
          Etiam pellentesque tortor eu erat iaculis, a efficitur odio pretium.
          Nunc sed justo lacus. Nam a faucibus tortor, quis venenatis ligula.
          Curabitur fermentum ac dolor vel rhoncus. Pellentesque pretium neque
          felis, in tempus lectus pellentesque eget. Vivamus a lobortis metus.
          Donec vehicula lacinia turpis, quis tristique eros condimentum
          sodales.
        </h1>
      </section>
      <section className="homeTwo">
        <div className="pdfs">
          <h2>Download Reports</h2>
          <div className="reportContainer">
            <div className="boxOne">
              <img
                src={ReportImage}
                alt="PDF Download Icon"
                className="reportImage"
              />
            </div>
            <div className="boxTwo">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                lacinia, erat nec dignissim iaculis, felis eros ornare lacus,
                vitae aliquam libero tortor id ipsum.
              </p>
              <div className="buttonContainer">
                <button>
                  <a href="/">Executive Summary</a>{" "}
                  <img
                    src={PdfDownload}
                    alt="PDF Download Icon"
                    className="pdfIcon"
                  />
                </button>
                <button>
                  <a href="/">Final Report</a>{" "}
                  <img
                    src={PdfDownload}
                    alt="PDF Download Icon"
                    className="pdfIcon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="events">
          <h2>Virtual Town Hall with Wab Kinew On Cuts to Rural Manitoba</h2>
          <div className="eventContainer">
            <div className="boxThree">
              <img
                src={WabKinew}
                alt="Wab Kinew portrait"
                className="wabKinew"
              />
            </div>
            <div className="boxFour">
              <p>Wednesday, February 24</p>
            </div>
          </div>
        </div>
      </section>
      <section className="homeThree">
        <button className="button">Change.org</button>
        <Timeline />
      </section>
    </div>
  );
}
