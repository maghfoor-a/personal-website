import "./MainBody.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function MainBody(): JSX.Element {
  return (
    <>
      {/*About Me Section*/}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi! I am <strong>Maghfoor Ahmed</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Full Stack Software Developer
        </p>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          Here are some of the projects I have worked on
        </p>
        <p className="section__findinfo">
          Click on a project to find out more information!
        </p>
        <div className="portfolio">
          {/*Item 1 */}
          <div
            onClick={() => window.open("/mfm", "_self")}
            className="portfolio__item"
          >
            <img src="src\utils\MFM.webp" alt="" className="portfolio__img" />
            <p className="portfolio__title">My Favourite Media</p>
            <p className="portfolio__description">
              A database where you can store your favourite albums.
            </p>
          </div>
          {/*Item 2 */}
          <div
            onClick={() => window.open("/getstuffdone", "_self")}
            className="portfolio__item"
          >
            <img
              src="src\utils\GetStuffDone.webp"
              alt=""
              className="portfolio__img"
            />
            <p className="portfolio__title">Get Stuff Done</p>
            <p className="portfolio__description">
              A web application that helps you stay on top of your work.
            </p>
          </div>
          {/*Item 3 */}
          <div
            onClick={() => window.open("/zmdb", "_self")}
            className="portfolio__item"
          >
            <img src="src\utils\ZMDB.webp" alt="" className="portfolio__img" />
            <p className="portfolio__title">ZMDB</p>
            <p className="portfolio__description">
              Find information about your favourite tv shows.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="footer">
        <a href="mailto:maghfoor.ahmed05@gmail.com" className="footer__link">
          maghfoor.ahmed05@gmail.com
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social__list__link"
              href="https://www.linkedin.com/in/maghfoor/"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social__list__link"
              href="https://github.com/maghfoor-a"
            >
              <BsGithub />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
