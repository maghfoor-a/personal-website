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

        {/* About Me */}
        <section className="projects">
            <h2 className="section__title">Projects</h2>
            <p className="section__subtitle">Here are some of the projects I have worked on</p>
            <div className="portfolio">
                {/*Item 1 */}
                <a href="#" className="portfolio__item">
                    <img src="src\utils\MFM.webp" alt="" className="portfolio__img"/>
                </a>
                {/*Item 2 */}
                <a href="#" className="portfolio__item">
                    <img src="src\utils\GetStuffDone.webp" alt="" className="portfolio__img"/>
                </a>
                {/*Item 3 */}
                <a href="#" className="portfolio__item">
                    <img src="src\utils\ZMDB.webp" alt="" className="portfolio__img"/>
                </a>
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