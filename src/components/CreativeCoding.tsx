import "./CreativeCoding.css";
import { AllPictures, AllGifs } from "../utils/allPicturesArray";
export default function CreativeCoding(): JSX.Element {
  return (
    <>
    <div className="title">
      <h1>MY CREATIVE CODING JOURNEY</h1>
      <h3>🚧🚧Work in progress! come back later🚧🚧</h3>
      <p>please wait for the browser to full load the media😊😊</p>
    </div>
      <div className="allCreative">
        {AllGifs.map((media) => {
          return (
            <div key={media.id} className="singlePicture">
              <img className="image" src={media.gif} alt={media.gif} width="400" />
              <h4>{media.name}</h4>
            </div>
          );
        })}
      </div>
      <div className="allCreative">
        {AllPictures.map((media) => {
          return (
            <div key={media.id} className="singlePicture">
              <img className="image" src={media.picture} alt={media.picture} width="400" />
              <h4>{media.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
