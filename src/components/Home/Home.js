import React from "react";
import Timeline from "./Timeline";
import PdfDownload from "../../images/pdf-download.png";
import WabKinew from "../../images/wabkinew2.jpg";
import ReportImage from "../../images/report-image.jpg";
import ExecSummary from "../../pdfs/GV_Health_Report_Executive_Summary_Final.pdf";
import FinalReport from "../../pdfs/Keeping_Rural_Health_Final_Report_Nov2020.pdf";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="homeOne">
        <h1 className="opening">
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
              <h3 className="titleDownload">Download</h3>
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
            </div>
          </div>
          <div className="buttonContainer">
            <button>
              <a href={ExecSummary} target="_blank" rel="noreferrer">
                Executive Summary{" "}
                <img
                  src={PdfDownload}
                  alt="PDF Download Icon"
                  className="pdfIcon"
                />
              </a>{" "}
            </button>
            <button>
              <a href={FinalReport} target="_blank" rel="noreferrer">
                Final Report
                <img
                  src={PdfDownload}
                  alt="PDF Download Icon"
                  className="pdfIcon"
                />
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="events">
          <div className="eventContainer">
            <div className="boxThree">
              <h3 className="titleEvents">Events</h3>
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
