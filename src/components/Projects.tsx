import { Link } from "react-router-dom";
import randomWalk from "../utils/creativePictures/randomwalk (10).webp";
import MFM from "../utils/MFM.webp";
import GetStuffDone from "../utils/GetStuffDone.webp";
import ZMDB from "../utils/ZMDB.webp";

export default function Projects() {
  return (
    <>
      <div className="AllProjects">
        <Link to="/creative">
          <div className="button CC">
            <img className="img" src={randomWalk} width={300} height={300} />
            <p className="projectTitle">Creative Coding</p>
          </div>
        </Link>
        <a
          href="https://my-favourite-media.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="button MFM">
            <img className="img" src={MFM} width={300} height={300} />
            <p className="projectTitle">
              My Favourite Media (work in progress!)
            </p>
          </div>
        </a>
        <a
          href="https://getstuffdone.maghfoor.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="button GSD">
            <img className="img" src={GetStuffDone} width={300} height={300} />
            <p className="projectTitle">Get Stuff Done!</p>
          </div>
        </a>
        <a
          href="https://zmdb-official.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="button ZMDB">
            <img className="img" src={ZMDB} width={300} height={300} />
            <p className="projectTitle">ZMDB</p>
          </div>
        </a>
      </div>
    </>
  );
}
