import "./AppHeader.css";
import React from "react";

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
      </div>
    </>
  );
}
export default AppHeader;
