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

export default function GetStuffDone(): JSX.Element {
  return (
    <>
      <section>
        <p className="project_title">GET STUFF DONE</p>
        <div className="project_buttons">
          <button
            className="project_button-live"
            onClick={() =>
              window.open("https://getstuffdone.maghfoor.com/login", "_self")
            }
          >
            Live Site
          </button>
          <button
            className="project_button-code"
            onClick={() =>
              window.open(
                "https://github.com/maghfoor-a/fullstack-todo-frontend",
                "_self"
              )
            }
          >
            See The Code
          </button>
        </div>
        <p className="project_description">
          Get Stuff Done is a web application that helps users stay organized
          and on top of their tasks. The front end is built using <b>React</b>{" "}
          and <b>Typescript</b>, and the backend is built using <b>Express</b>{" "}
          and Typescript. The site is deployed on <b>Netlify</b> and uses{" "}
          <b>Firebase</b> for authentication and a <b>postgreSQL</b> database.
          The project was built using <b>Git</b> for version control and{" "}
          <b>Jest</b> for testing. This project has been a valuable learning
          experience for me, allowing me to gain experience in building a
          full-stack web application with authentication and a database.
        </p>
      </section>
      <section>
        <p className="project_subheading">TECH STACK</p>
        <div className="project_icons">
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
      </section>
    </>
  );
}
