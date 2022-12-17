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
      </div>
      <div className="sketch">
        <h1>2D ANIMATION and SKETCHES</h1>
        <h3>Click on an image to view the open processing code!😎</h3>
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
                src={media.video}
                width="400"
                height="400"
                controls
                autoPlay
                loop
                muted
                poster={media.poster}
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
