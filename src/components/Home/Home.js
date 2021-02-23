import React from "react";
import Timeline from "./Timeline";
import PdfDownload from "../../images/pdf-download.png";
import WabKinew from "../../images/wabkinew.jpg";
import ReportImage from "../../images/report-image.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="homeOne">
        <h1>
          Etiam pellentesque tortor eu erat iaculis, a efficitur odio pretium.
          Nunc sed justo lacus. Nam a faucibus tortor, quis venenatis ligula.
          Curabitur fermentum ac dolor vel rhoncus. Pellentesque pretium neque
          felis, in tempus lectus pellentesque eget. Vivamus a lobortis metus.
          Donec vehicula lacinia turpis, quis tristique eros condimentum
          sodales.
        </h1>
      </div>
      <div className="homeTwo">
        <div className="pdfs">
          <div className="reportContainer">
            <div className="boxOne">
              <img
                src={ReportImage}
                alt="PDF Download Icon"
                className="reportImage"
              />
            </div>
            <div className="boxTwo">
              <h2>Download Reports</h2>

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
          <div className="eventContainer">
            <div className="boxThree">
              <img
                src={WabKinew}
                alt="Wab Kinew portrait"
                className="wabKinew"
              />
            </div>
            <div className="boxFour">
              <h2>
                Virtual Town Hall with Wab Kinew On Cuts to Rural Manitoba
              </h2>
              <p>Wednesday, February 24, 2021</p>
              <p>7 PM UTC-06</p>

              <button>More information</button>
            </div>
          </div>
        </div>
      </div>

      <div className="homeThree">
        <div className="changeContainer">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <button className="button change">Change.org</button>
        </div>
      </div>
      <div className="homeFour">
        <div className="timelineContainer">
          <Timeline />
        </div>
      </div>
    </div>
  );
}
