//importing all the pictures that I have made
import PicFirstProject from "../utils/creativePictures/FirstProject.webp";
import PicRandomWalk1 from "../utils/creativePictures/randomwalk (1).webp";
import PicRandomWalk2 from "../utils/creativePictures/randomwalk (3).webp";
import PicRandomWalk3 from "../utils/creativePictures/randomwalk (4).webp";
import PicRandomWalk4 from "../utils/creativePictures/randomwalk (7).webp";
import PicRandomWalk5 from "../utils/creativePictures/randomwalk (8).webp";
import PicRandomWalk6 from "../utils/creativePictures/randomwalk (10).webp";
import PicRandomWalk9 from "../utils/creativePictures/twoRandomWalkers.webp";
import movingCirclePoster from "../utils/creativePictures/moving-circles-poster.png";
import starfieldPoster from "../utils/creativePictures/starfield-poster.png";
import fishGoldPoster from "../utils/creativePictures/fishGoldPoster.png";

//importing gifs that I have made of my work
import fishGold from "../utils/creativePictures/fish-gold.webm";
import movingCircles from "../utils/creativePictures/moving-circles.webm";
import starfield from "../utils/creativePictures/stars-colours.webm";

//importing react 3D work gifs later on

export const AllPictures = [
  {
    id: 1,
    picture: PicFirstProject,
    name: "My First Ever Project.",
    link: "https://openprocessing.org/sketch/1720878",
  },
  {
    id: 2,
    picture: PicRandomWalk1,
    name: "Random Walker V1.",
    link: "https://openprocessing.org/sketch/1720926",
  },
  {
    id: 3,
    picture: PicRandomWalk3,
    name: "Random Walker V2.",
    link: "https://openprocessing.org/sketch/1720926",
  },
  {
    id: 4,
    picture: PicRandomWalk9,
    name: "Random Walker Adaptation: Two Random Walkers.",
    link: "https://openprocessing.org/sketch/1724810",
  },
  {
    id: 5,
    picture: PicRandomWalk2,
    name: "Random Walker Adaptation C1.",
    link: "https://openprocessing.org/sketch/1721002",
  },
  {
    id: 6,
    picture: PicRandomWalk4,
    name: "Random Walker Adaptation C2.",
    link: "https://openprocessing.org/sketch/1721002",
  },
  {
    id: 7,
    picture: PicRandomWalk5,
    name: "Random Walker Adaptation C3.",
    link: "https://openprocessing.org/sketch/1721002",
  },
  {
    id: 8,
    picture: PicRandomWalk6,
    name: "Random Walker Adaptation C4.",
    link: "https://openprocessing.org/sketch/1721002",
  },
];

export const AllGifs = [
  {
    id: 1,
    video: fishGold,
    name: "Testing with imported pictures, adapting from starfield.",
    link: "https://openprocessing.org/sketch/1750023",
    poster: fishGoldPoster,
  },
  {
    id: 2,
    video: starfield,
    name: "A 2D starfield built with speheres and strokes",
    link: "https://openprocessing.org/sketch/1749955",
    poster: starfieldPoster,
  },
  {
    id: 3,
    video: movingCircles,
    name: "Plotting circles then added motion based on framecount.",
    link: "https://openprocessing.org/sketch/1740369",
    poster: movingCirclePoster,
  },
];
