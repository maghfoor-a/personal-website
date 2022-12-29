import "./MainBody.css"

export default function MainBody(): JSX.Element {
    return (
        <>
        <header>
            <div className="logo">
                <img src="testing-circle.png" alt=""/>
            </div>

            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="burger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#">Home</a></li>
                    <li className="nav__item"><a href="#">Projects</a></li>
                    <li className="nav__item"><a href="/creative">Creative Coding</a></li>
                </ul>
            </nav>
        </header>
        {/*About Me Section*/}
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">Hi! I am <strong>Maghfoor Ahmed</strong></h1>
            <p className="section__subtitle section__subtitle--intro">Full Stack Software Developer</p>
            <img src="src\utils\Headshots-Maghfoor-4.webp" alt="" className="intro__img"/>
        </section>

        {/* Projects */}
        <section className="projects">
            <h2 className="section__title">Projects</h2>
            <p className="section__subtitle">Here are some of the projects I have worked on</p>
            <div className="portfolio">
                {/*Item 1 */}
                <div onClick={() => window.open("https://myfavouritemedia.maghfoor.com/")} className="portfolio__item">
                    <img src="src\utils\MFM.webp" alt="" className="portfolio__img"/>
                    <p className="portfolio__title">My Favourite Media</p>
                    <p className="portfolio__description">A database where you can store your favourite albums.</p>
                </div>
                {/*Item 2 */}
                <div onClick={() => window.open("https://myfavouritemedia.maghfoor.com/")} className="portfolio__item">
                    <img src="src\utils\GetStuffDone.webp" alt="" className="portfolio__img"/>
                    <p className="portfolio__title">Get Stuff Done</p>
                    <p className="portfolio__description">A web application that helps you stay on top of your work.</p>
                </div>
                {/*Item 3 */}
                <div onClick={() => window.open("https://myfavouritemedia.maghfoor.com/")} className="portfolio__item">
                    <img src="src\utils\ZMDB.webp" alt="" className="portfolio__img"/>
                    <p className="portfolio__title">ZMDB</p>
                    <p className="portfolio__description">Find information about your favourite tv shows.</p>
                </div>
            </div>
        </section>

        {/* Footer */}

        <footer>
            <a href="mailto:maghfoor.ahmed05@gmail.com" className="footer-link">maghfoor.ahmed05@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item"><a className="social-list__link" href="https://www.linkedin.com/in/maghfoor/">LinkedIn</a></li>
                <li className="social-list__item"><a className="social-list__link" href="https://github.com/maghfoor-a">GitHub</a></li>
            </ul>
        </footer>

            
        </>
    )
}