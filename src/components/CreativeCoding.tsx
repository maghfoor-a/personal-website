import fish from "../utils/creativePictures/fish-gold.gif";
export default function CreativeCoding(): JSX.Element {
  const media = [fish];
  return (
    <>
      <h1>My Creative Coding Journey!</h1>
      <h3>🚧🚧Work in progress! come back later🚧🚧</h3>
      <div className="allCreative">
        {media.map((picture) => {
          return <img src={picture} alt={picture} />;
        })}
      </div>
    </>
  );
}
