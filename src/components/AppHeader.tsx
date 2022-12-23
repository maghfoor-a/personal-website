import "./AppHeader.css";
import React from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";

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
        <Projects />
      </div>
    </>
  );
}
export default AppHeader;
