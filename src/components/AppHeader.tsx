import "./AppHeader.css";
import React from "react";
import { Link } from "react-router-dom";
import randomWalk from "../utils/creativePictures/randomwalk (10).webp";
import MFM from "../utils/MFM.webp";
import GetStuffDone from "../utils/GetStuffDone.webp";

function AppHeader(): JSX.Element {
  const [widthPct, setWidthPct] = React.useState<number>(50);

  const handleMouseMove = (e: any) => {
    const xPercentage = (e.clientX / window.innerWidth) * 100;
    setWidthPct(xPercentage);
  };

  return (
    <>
      <div className="BothSides" onMouseMove={handleMouseMove}>
        <div className="extra">
          <a
            className="github"
            href="https://github.com/maghfoor-a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">GitHub</button>
          </a>
          <a
            className="github"
            href="https://www.linkedin.com/in/maghfoor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">LinkedIn</button>
          </a>
        </div>
        <div id="left-side" className="side" style={{ width: `${widthPct}%` }}>
          <h2 className="title">
            Today was <span className="fancy">GOOD</span>
          </h2>
        </div>
        <div id="right-side" className="side">
          <h2 className="title">
            Today was <span className="fancy">GREAT</span>
          </h2>
        </div>
        <div className="AllProjects">
          <a
            href="https://my-favourite-media.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="button MFM">
              <img className="img" src={MFM} width={300} height={300} />
              <p className="projectTitle">
                My Favourite Media (work in progress!)
              </p>
            </div>
          </a>
          <a
            href="https://getstuffdone.maghfoor.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="button GSD">
              <img
                className="img"
                src={GetStuffDone}
                width={300}
                height={300}
              />
              <p className="projectTitle">Get Stuff Done!</p>
            </div>
          </a>
          <Link to="/creative">
            <div className="button CC">
              <img className="img" src={randomWalk} width={300} height={300} />
              <p className="projectTitle">Creative Coding</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default AppHeader;
