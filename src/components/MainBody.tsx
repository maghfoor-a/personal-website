import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
{
  /**          */
}
import "./MainBody.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import pictureMFM from "../utils/MFM.webp";
import pictureGetStuffDone from "../utils/GetStuffDone.webp";
import pictureZMDB from "../utils/ZMDB.webp";
import { useState } from "react";
import pictureHeatRun from "../utils/heatrun.webp";

export default function MainBody(): JSX.Element {
  const [pressed, setPressed] = useState<boolean>(true);
  return (
    <>
      {/*About Me Section*/}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi! I am <strong>Maghfoor Ahmed</strong>
        </h1>
        <p
          className="section__subtitle section__subtitle--intro"
          onClick={() => setPressed((prev) => !prev)}
        >
          Full Stack Software Developer
        </p>
        {pressed && (
          <div className="project_icons--main">
            <div className="single-icon">
              <SiTypescript size={"3rem"} color={"#007acc"} />
              <p className="project_icon-name">TypeScript</p>
            </div>
            <div className="single-icon">
              <SiReact size={"3rem"} color={"#61DBFB"} />
              <p className="project_icon-name">React</p>
            </div>
            <div className="single-icon">
              <SiGithub size={"3rem"} color={"#171515"} />
              <p className="project_icon-name">GitHub</p>
            </div>
            <div className="single-icon">
              <SiNodedotjs size={"3rem"} color={"#3c873a"} />
              <p className="project_icon-name">NodeJs</p>
            </div>
            <div className="single-icon">
              <SiHtml5 size={"3rem"} color={"#e34c26"} />
              <p className="project_icon-name">HTML</p>
            </div>
            <div className="single-icon">
              <SiCss3 size={"3rem"} color={"#264de4"} />
              <p className="project_icon-name">CSS</p>
            </div>
            <div className="single-icon">
              <SiNetlify size={"3rem"} color={"#00AD9F"} />
              <p className="project_icon-name">Netlify</p>
            </div>
            <div className="single-icon">
              <SiJest size={"3rem"} color={"#C53D14"} />
              <p className="project_icon-name">Jest</p>
            </div>
            <div className="single-icon">
              <SiPostgresql size={"3rem"} color={"#0064a5"} />
              <p className="project_icon-name">PostgreSQL</p>
            </div>
            <div className="single-icon">
              <SiFirebase size={"3rem"} color={"#FFA611"} />
              <p className="project_icon-name">FireBase</p>
            </div>
            <div className="single-icon">
              <SiExpress size={"3rem"} color={"black"} />
              <p className="project_icon-name">Express</p>
            </div>
          </div>
        )}
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
            onClick={() => window.open("/getstuffdone", "_self")}
            className="portfolio__item"
          >
            <img src={pictureGetStuffDone} alt="" className="portfolio__img" />
            <p className="portfolio__title">Get Stuff Done</p>
            <p className="portfolio__description">
              A web application that helps you stay on top of your work.
            </p>
          </div>

          {/*Item 2 */}
          <div
            onClick={() => window.open("/heatrun", "_self")}
            className="portfolio__item"
          >
            <img src={pictureHeatRun} alt="" className="portfolio__img" />
            <p className="portfolio__title">Heat Run</p>
            <p className="portfolio__description">
              Heat Run allows you to track your running journey. The app is
              still being made, the user will be able to submit running
              distances, times, pace and more and get analysis!
            </p>
          </div>
          {/*Item 3 */}
          <div
            onClick={() => window.open("/mfm", "_self")}
            className="portfolio__item"
          >
            <img src={pictureMFM} alt="" className="portfolio__img" />
            <p className="portfolio__title">My Favourite Media</p>
            <p className="portfolio__description">
              A database where you can store your favourite albums.
            </p>
          </div>

          {/*Item 4 */}
          <div
            onClick={() => window.open("/zmdb", "_self")}
            className="portfolio__item"
          >
            <img src={pictureZMDB} alt="" className="portfolio__img" />
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
