import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/projects/img1.jpg";
import UTrackerImg from "../images/projects/img1.svg";
// import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: "U Tracker",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    stack: "Stacks",
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "Green CTG",
    desc: "An app to help people to get an overview of how they can make the city beautiful.",
    stack: "Stacks",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Coin Tracker",
    desc: "Using this app you can track any e coin. Also you will get a good advise about investment form the professional",
    stack: "Stacks",
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "Cavins Portfolio",
    desc: "A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.",
    stack: "Stacks",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Tracking Soft",
    desc: "A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",
    stack: "Stacks",
    img: ProjectImg,
  },
];

export default projects;
