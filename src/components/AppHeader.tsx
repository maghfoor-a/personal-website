import React from 'react';
import { MouseEvent } from 'react';

import "./AppHeader.css"

function AppHeader(): JSX.Element {

    const left: any = document.getElementById("left-side");

    const handleMove = (e: MouseEvent) => {

    const percentage = (e.clientX / window.innerWidth) * 100;

    left.style.width = percentage.toFixed(2) + "%"
    
  }

    document.onmousemove = e => handleMove(e);
    return (
        <div className="BothSides">
            <div id="left-side" className="side" onMouseMove={handleMove}>
                <h2 className="title">
                    Today was <span className="fancy">good</span>
                </h2>
            </div>
            <div id="right-side" className="side">
                <h2 className="title">
                    Today was <span className="fancy">fantastic</span>
                </h2>
            </div>
    </div>
    )
}
export default AppHeader;