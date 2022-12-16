import "./CreativeCoding.css";
import { AllPictures, AllGifs } from "../utils/allPicturesArray";
export default function CreativeCoding(): JSX.Element {
  const handleLink = (link: string) => {
    window.open(link);
  };
  return (
    <>
      <div className="Creativetitle">
        <h1>MY CREATIVE CODING JOURNEY</h1>
        <h3>🚧🚧Work in progress! come back later🚧🚧</h3>
        <p>please wait for the browser to fully load the media😊😊</p>
      </div>
      <div className="sketch">
        <h1>2D ANIMATION and SKETCHES</h1>
      </div>
      <div className="allCreative">
        {AllGifs.map((media) => {
          return (
            <div
              key={media.id}
              className="singlePicture"
              onClick={() => handleLink(media.link)}
            >
              <video
                className="image"
                src={media.gif}
                width="400"
                height="400"
                controls
                autoPlay
                loop
              />
              <h4>{media.name}</h4>
            </div>
          );
        })}
      </div>
      <div className="allCreative">
        {AllPictures.map((media) => {
          return (
            <div
              key={media.id}
              className="singlePicture"
              onClick={() => handleLink(media.link)}
            >
              <img
                className="image"
                src={media.picture}
                alt={media.picture}
                width="400"
                height="400"
                loading="lazy"
              />
              <h4>{media.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
