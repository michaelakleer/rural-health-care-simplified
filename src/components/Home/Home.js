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
          Advocating for community-engagement, consent and collaboration on
          health care delivery in rural settings.
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
            <p className="pdfDescription">
              In 2017, Grandview Healthcare Solutions, a community advocacy
              group from Grandview, Manitoba, commissioned a community research
              project on the implications of emergency healthcare cuts within
              their community. Researchers from McMaster University, with roots
              in rural Manitoba and Ontario, undertook this study, analyzing
              government reports and policies, and interviewing community
              members. The results of this project, 'Keeping Rural Health Care
              Close to Home' are shared here.
            </p>
          </div>
          <div className="boxThree">
            <div className="execLink">
              <a
                href={ExecSummary}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Executive Summary{" "}
                <img
                  src={PdfDownload}
                  alt="PDF Download Icon"
                  className="pdfIcon"
                />
              </a>{" "}
            </div>
            <div className="finalLink">
              <a
                href={FinalReport}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Final Report
                <img
                  src={PdfDownload}
                  alt="PDF Download Icon"
                  className="pdfIcon"
                />
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="events">
          <div className="eventContainer">
            <h3 className="titleEvents">Events</h3>
            <div className="eventTime">
              <p>Wednesday, February 24, 2021 - 7 PM CST</p>
              <h2>
                Virtual Town Hall with Wab Kinew On Cuts to Rural Manitoba
              </h2>
            </div>
          </div>
          <div className="eventInfo">
            <div className="boxThree">
              <img
                src={WabKinew}
                alt="Wab Kinew portrait"
                className="wabKinew"
              />
            </div>
            <div className="boxFour">
              <p>
                Join the Leader of the Official Opposition in Manitoba for a
                discussion on rural service cuts including health care cuts and
                emergency room closures.
              </p>
              <br />
              <p>
                The event will also be streamed live on{" "}
                <a
                  href="https://www.facebook.com/WabKinew/"
                  target="_blank"
                  rel="noreferrer"
                >
                  facebook.com/WabKinew
                </a>
              </p>
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
