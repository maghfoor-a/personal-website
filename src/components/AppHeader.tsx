import "./AppHeader.css"
import React from "react";

function AppHeader(): JSX.Element {

    const [widthPct, setWidthPct] = React.useState<number>(50);

    const handleMove = (e: any) => {

        const xPercentage = (e.clientX / window.innerWidth) * 100;
        setWidthPct(xPercentage)
    }

    return (
        <>
            <div className="BothSides" onMouseMove={handleMove}>
                <div id="left-side" className="side" style={{ width: `${widthPct}%` }}>
                    <h2 className="title">
                        Today was <span className="fancy">GOOD</span>
                    </h2>
                    <a href="https://my-favourite-media.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="button">My Favourite Media (work in progress!)</button></a>
                    <a href="https://github.com/maghfoor-a" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                </div>
                <div id="right-side" className="side">
                    <h2 className="title">
                        Today was <span className="fancy">GREAT</span>
                    </h2>
                    <a href="https://my-favourite-media.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="button">My Favourite Media (work in progress!)</button></a>
                    <a href="https://github.com/maghfoor-a" target="_blank" rel="noopener noreferrer"><button className="githubBtn">GitHub</button></a>
                </div>

            </div>
        </>
    )
}
export default AppHeader;

