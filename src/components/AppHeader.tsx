import "./AppHeader.css";
import React from "react";
import { Link } from "react-router-dom";

function AppHeader(): JSX.Element {
  const [widthPct, setWidthPct] = React.useState<number>(50);

  const handleMouseMove = (e: any) => {
    const xPercentage = (e.clientX / window.innerWidth) * 100;
    setWidthPct(xPercentage);
  };

  return (
    <>
      <div className="BothSides" onMouseMove={handleMouseMove}>
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
        <div className="AllButtons">
          <a
            href="https://my-favourite-media.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button MFM">
              My Favourite Media (work in progress!)
            </button>
          </a>
          <a
            href="https://getstuffdone.maghfoor.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Get Stuff Done!</button>
          </a>
          <Link to="/creative">
            <button className="button CC">Creative Coding</button>
          </Link>
          <a
            href="https://github.com/maghfoor-a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button github">GitHub</button>
          </a>
        </div>
      </div>
    </>
  );
}
export default AppHeader;
