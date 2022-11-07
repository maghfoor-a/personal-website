import "./AppHeader.css"

function AppHeader(): JSX.Element {
    return (
        <div className="BothSides">
            <div id="left-side" className="side">
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