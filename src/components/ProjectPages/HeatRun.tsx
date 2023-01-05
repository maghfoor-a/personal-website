import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiJest } from "react-icons/si";

export default function HeatRun(): JSX.Element {
  return (
    <>
      <section>
        <p className="project_title">Heat Run</p>
        <div className="project_buttons">
          <button
            className="project_button-live"
            onClick={() =>
              window.open("https://heat-run.netlify.app/", "_self")
            }
          >
            Live Site
          </button>
          <button
            className="project_button-code"
            onClick={() =>
              window.open("https://github.com/maghfoor-a/heat-run", "_self")
            }
          >
            See The Code
          </button>
        </div>
        <p className="project_description">
          Heat Run is a web application that allows users to track and visualize
          their running activities. Built using TypeScript, React, NodeJS, and
          Express, the app offers a clean and intuitive interface for logging
          runs and seeing them represented on a heatmap. With its use of
          react-calendar-heatmap, Heat Run offers a visually striking way to see
          progress and patterns in your running over time. In the future, the
          developer plans to create an offline version of the app using
          Electron, ensuring that users have access to their data even when not
          connected to the internet. Whether you're a seasoned runner looking
          for a new way to track your training or just starting out on your
          fitness journey, Heat Run has something to offer
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
        </div>
      </section>
    </>
  );
}
