export default function AppHeaderV2():JSX.Element {
    return (
        <>
        <header className="appheader">
            <img className="logo" src="testing-circle.png" alt=""/>
            <li className="nav__link"><a href="/">Home</a></li>
            <li className="nav__link"><a href="#">Projects</a></li>
            <li className="nav__link"><a href="/creative">Creative Coding</a></li>
        </header>
        </>
    )
}