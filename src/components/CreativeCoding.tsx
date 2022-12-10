import "./CreativeCoding.css";
import { AllPictures, AllGifs } from "../utils/allPicturesArray";
export default function CreativeCoding(): JSX.Element {
  return (
    <>
      <h1>My Creative Coding Journey!</h1>
      <h3>🚧🚧Work in progress! come back later🚧🚧</h3>
      <div className="allCreative">
        {AllGifs.map((media) => {
          return (
            <div key={media.id} className="singlePicture">
              <img src={media.gif} alt={media.gif} width="400" />
              <h4>{media.name}</h4>
            </div>
          );
        })}
      </div>
      <div className="allCreative">
        {AllPictures.map((media) => {
          return (
            <div key={media.id} className="singlePicture">
              <img src={media.picture} alt={media.picture} width="400" />
              <h4>{media.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
